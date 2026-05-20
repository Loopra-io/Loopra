import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Activity,
  Zap,
  BookOpen,
  Globe,
  Clock,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';
import MetricCard from '@/components/MetricCard';
import DashboardHeader, { Period } from '@/components/DashboardHeader';
import ChartCard from '@/components/ChartCard';
import { useState, useEffect, useRef } from 'react';

// ─── Datos por período ────────────────────────────────────────────────────────

const LINE_DATA: Record<Period, { name: string; usuarios: number; activos: number }[]> = {
  'Hoy': [
    { name: '00h', usuarios: 1200, activos: 800 },
    { name: '04h', usuarios: 900,  activos: 600 },
    { name: '08h', usuarios: 2100, activos: 1400 },
    { name: '12h', usuarios: 3800, activos: 2600 },
    { name: '16h', usuarios: 4200, activos: 3100 },
    { name: '20h', usuarios: 3100, activos: 2200 },
  ],
  '7 días': [
    { name: 'Lun', usuarios: 5200, activos: 3100 },
    { name: 'Mar', usuarios: 6100, activos: 3700 },
    { name: 'Mié', usuarios: 5800, activos: 3400 },
    { name: 'Jue', usuarios: 7200, activos: 4300 },
    { name: 'Vie', usuarios: 8100, activos: 4900 },
    { name: 'Sáb', usuarios: 6400, activos: 3800 },
    { name: 'Dom', usuarios: 4900, activos: 2900 },
  ],
  '30 días': [
    { name: 'Ene', usuarios: 4000, activos: 2400 },
    { name: 'Feb', usuarios: 5200, activos: 2800 },
    { name: 'Mar', usuarios: 6800, activos: 3200 },
    { name: 'Abr', usuarios: 7200, activos: 3800 },
    { name: 'May', usuarios: 8500, activos: 4200 },
    { name: 'Jun', usuarios: 9800, activos: 5100 },
  ],
  '90 días': [
    { name: 'Ene', usuarios: 4000,  activos: 2400 },
    { name: 'Feb', usuarios: 5200,  activos: 2800 },
    { name: 'Mar', usuarios: 6800,  activos: 3200 },
    { name: 'Abr', usuarios: 7200,  activos: 3800 },
    { name: 'May', usuarios: 8500,  activos: 4200 },
    { name: 'Jun', usuarios: 9800,  activos: 5100 },
    { name: 'Jul', usuarios: 11200, activos: 5900 },
    { name: 'Ago', usuarios: 12500, activos: 6700 },
    { name: 'Sep', usuarios: 13800, activos: 7400 },
  ],
};

const METRICS_DATA: Record<Period, { usuarios: string; instituciones: string; uptime: string }> = {
  'Hoy':     { usuarios: '4,200',  instituciones: '612', uptime: '100%'  },
  '7 días':  { usuarios: '8,100',  instituciones: '613', uptime: '99.98%' },
  '30 días': { usuarios: '11,400', instituciones: '615', uptime: '99.97%' },
  '90 días': { usuarios: '13,800', instituciones: '615', uptime: '99.94%' },
};

const BAR_DATA: Record<Period, { name: string; usuarios: number; instituciones: number }[]> = {
  'Hoy':     [
    { name: 'Lúmina',  usuarios: 3200, instituciones: 290 },
    { name: 'Próximo', usuarios: 700,  instituciones: 80  },
    { name: 'Futuro',  usuarios: 300,  instituciones: 20  },
  ],
  '7 días':  [
    { name: 'Lúmina',  usuarios: 6100, instituciones: 380 },
    { name: 'Próximo', usuarios: 1400, instituciones: 100 },
    { name: 'Futuro',  usuarios: 600,  instituciones: 35  },
  ],
  '30 días': [
    { name: 'Lúmina',  usuarios: 8500, instituciones: 450 },
    { name: 'Próximo', usuarios: 2100, instituciones: 120 },
    { name: 'Futuro',  usuarios: 800,  instituciones: 45  },
  ],
  '90 días': [
    { name: 'Lúmina',  usuarios: 11200, instituciones: 510 },
    { name: 'Próximo', usuarios: 3800,  instituciones: 180 },
    { name: 'Futuro',  usuarios: 1400,  instituciones: 70  },
  ],
};

// ─── Actividad simulada ───────────────────────────────────────────────────────

type ActivityItem = {
  id: number;
  icon: typeof BookOpen;
  title: string;
  time: string;
  type: string;
};

const ACTIVITY_POOL: Omit<ActivityItem, 'id' | 'time'>[] = [
  { icon: BookOpen,     title: 'Lúmina alcanzó 8,500 usuarios',          type: 'milestone'   },
  { icon: TrendingUp,   title: 'Incremento de 12.5% en actividad',       type: 'growth'      },
  { icon: AlertCircle,  title: 'Mantenimiento programado completado',     type: 'maintenance' },
  { icon: Users,        title: '50 nuevas instituciones registradas',     type: 'signup'      },
  { icon: Zap,          title: 'API Gateway procesó 1M de requests',      type: 'milestone'   },
  { icon: Globe,        title: 'Nuevo acceso desde región LATAM',         type: 'growth'      },
  { icon: Activity,     title: 'Backup automático completado con éxito',  type: 'maintenance' },
  { icon: TrendingUp,   title: 'Sesiones activas superaron las 3,000',    type: 'milestone'   },
];

const TIMES = ['Hace 2 min', 'Hace 5 min', 'Hace 12 min', 'Hace 28 min',
               'Hace 1 hora', 'Hace 2 horas', 'Hace 4 horas', 'Hace 1 día'];

function buildInitialActivity(): ActivityItem[] {
  return ACTIVITY_POOL.slice(0, 4).map((a, i) => ({
    ...a,
    id: i,
    time: TIMES[i],
  }));
}

// ─── Servicios del sistema ────────────────────────────────────────────────────

type ServiceStatus = 'operational' | 'degraded' | 'outage';

type Service = { name: string; status: ServiceStatus };

const INITIAL_SERVICES: Service[] = [
  { name: 'API Gateway',   status: 'operational' },
  { name: 'Base de Datos', status: 'operational' },
  { name: 'Cache',         status: 'operational' },
  { name: 'CDN',           status: 'operational' },
];

const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: 'Operativo',
  degraded:    'Degradado',
  outage:      'Fuera de línea',
};

const STATUS_COLOR: Record<ServiceStatus, string> = {
  operational: 'bg-green-500',
  degraded:    'bg-yellow-500',
  outage:      'bg-red-500',
};

const STATUS_TEXT: Record<ServiceStatus, string> = {
  operational: 'text-green-600 dark:text-green-400',
  degraded:    'text-yellow-600 dark:text-yellow-400',
  outage:      'text-red-600 dark:text-red-400',
};

const PIE_DATA = [
  { name: 'Educación', value: 45 },
  { name: 'Empresas',  value: 30 },
  { name: 'Gobierno',  value: 15 },
  { name: 'Otros',     value: 10 },
];

const COLORS = ['#0070F3', '#3B82F6', '#60A5FA', '#93C5FD'];

// ─── Componente principal ─────────────────────────────────────────────────────

const ConsolaControl = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('30 días');
  const [activity, setActivity]         = useState<ActivityItem[]>(buildInitialActivity);
  const [services, setServices]         = useState<Service[]>(INITIAL_SERVICES);
  const [lastUpdate, setLastUpdate]     = useState<Date>(new Date());
  const [isLive, setIsLive]             = useState(true);
  const activityCounter                 = useRef(ACTIVITY_POOL.length);

  // ── Tiempo real: actualiza timestamp, agrega actividad y rota estados ──────
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setLastUpdate(new Date());

      // ~40% de probabilidad de nueva actividad
      if (Math.random() < 0.4) {
        const pool = ACTIVITY_POOL;
        const next = pool[activityCounter.current % pool.length];
        activityCounter.current += 1;

        setActivity(prev => [
          { ...next, id: Date.now(), time: 'Ahora mismo' },
          ...prev.slice(0, 6),
        ]);
      }

      // ~15% de probabilidad de cambio temporal en un servicio
      if (Math.random() < 0.15) {
        const idx    = Math.floor(Math.random() * INITIAL_SERVICES.length);
        const toggle = Math.random() < 0.5 ? 'degraded' : 'operational';
        setServices(prev =>
          prev.map((s, i) => i === idx ? { ...s, status: toggle as ServiceStatus } : s)
        );
        // Vuelve a operational después de 8s
        setTimeout(() => {
          setServices(prev =>
            prev.map((s, i) => i === idx ? { ...s, status: 'operational' } : s)
          );
        }, 8000);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isLive]);

  // ── Métricas según período ────────────────────────────────────────────────
  const m = METRICS_DATA[activePeriod];

  const metrics = [
    {
      title:           'Usuarios Totales',
      value:           m.usuarios,
      subtitle:        'Usuarios activos en ecosistemas',
      icon:            Users,
      trend:           'up' as const,
      trendValue:      '+12.5%',
      backgroundColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor:       'text-blue-600 dark:text-blue-400',
      delay:           0,
    },
    {
      title:           'Instituciones',
      value:           m.instituciones,
      subtitle:        'Organizaciones conectadas',
      icon:            Globe,
      trend:           'up' as const,
      trendValue:      '+8.2%',
      backgroundColor: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor:       'text-purple-600 dark:text-purple-400',
      delay:           0.1,
    },
    {
      title:           'Uptime',
      value:           m.uptime,
      subtitle:        'Disponibilidad del sistema',
      icon:            Activity,
      trend:           'neutral' as const,
      backgroundColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor:       'text-green-600 dark:text-green-400',
      delay:           0.2,
    },
    {
      title:           'Ecosistemas Activos',
      value:           '3',
      subtitle:        'Productos en operación',
      icon:            Zap,
      trend:           'up' as const,
      trendValue:      '+1 nuevo',
      backgroundColor: 'bg-amber-100 dark:bg-amber-900/30',
      iconColor:       'text-amber-600 dark:text-amber-400',
      delay:           0.3,
    },
  ];

  // ── Formato timestamp ─────────────────────────────────────────────────────
  const formatTime = (d: Date) =>
    d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          {/* Header */}
          <DashboardHeader
            activePeriod={activePeriod}
            onPeriodChange={setActivePeriod}
          />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, idx) => (
              <MetricCard key={idx} {...metric} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Line Chart */}
            <ChartCard title="Crecimiento de Usuarios" subtitle={`Período: ${activePeriod}`} delay={0.4}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={LINE_DATA[activePeriod]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="usuarios" stroke="#0070F3" strokeWidth={2} dot={{ fill: '#0070F3', r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="activos"  stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6', r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Pie Chart */}
            <ChartCard title="Distribución por Sector" subtitle="Instituciones por industria" delay={0.5}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={PIE_DATA} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}%`} outerRadius={80} dataKey="value">
                    {PIE_DATA.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Bar Chart */}
            <ChartCard title="Usuarios por Ecosistema" subtitle={`Período: ${activePeriod}`} delay={0.6}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={BAR_DATA[activePeriod]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Bar dataKey="usuarios"     fill="#0070F3" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="instituciones" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Activity + Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Actividad Reciente */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">Actividad Reciente</h3>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'}`} />
                  <button
                    onClick={() => setIsLive(v => !v)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isLive ? 'En vivo' : 'Pausado'}
                  </button>
                </div>
              </div>

              <div className="space-y-4 overflow-hidden">
                <AnimatePresence initial={false}>
                  {activity.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1,  y: 0    }}
                        exit={{    opacity: 0,  y: 12   }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-b-0 last:pb-0"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Estado del Sistema */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">Estado del Sistema</h3>

              <div className="space-y-4">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    className="flex items-center justify-between"
                  >
                    <p className="text-sm text-muted-foreground">{service.name}</p>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={service.status !== 'operational' ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className={`w-2 h-2 rounded-full ${STATUS_COLOR[service.status]}`}
                      />
                      <span className={`text-xs font-medium ${STATUS_TEXT[service.status]}`}>
                        {STATUS_LABEL[service.status]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Resumen salud */}
              <div className="mt-4 pt-4 border-t border-border/50">
                {services.every(s => s.status === 'operational') ? (
                  <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Todos los sistemas operativos
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    {services.filter(s => s.status !== 'operational').length} servicio(s) con incidencias
                  </div>
                )}
              </div>

              {/* Timestamp */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span>Actualizado: {formatTime(lastUpdate)}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
  );
};

export default ConsolaControl;
