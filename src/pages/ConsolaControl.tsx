import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Activity,
  Zap,
  BookOpen,
  Globe,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Layout from '@/components/Layout';
import MetricCard from '@/components/MetricCard';
import DashboardHeader from '@/components/DashboardHeader';
import ChartCard from '@/components/ChartCard';

const ConsolaControl = () => {
  // Data for charts
  const lineChartData = [
    { name: 'Ene', usuarios: 4000, activos: 2400 },
    { name: 'Feb', usuarios: 5200, activos: 2800 },
    { name: 'Mar', usuarios: 6800, activos: 3200 },
    { name: 'Abr', usuarios: 7200, activos: 3800 },
    { name: 'May', usuarios: 8500, activos: 4200 },
    { name: 'Jun', usuarios: 9800, activos: 5100 },
  ];

  const barChartData = [
    { name: 'Lúmina', usuarios: 8500, instituciones: 450 },
    { name: 'Próximo', usuarios: 2100, instituciones: 120 },
    { name: 'Futuro', usuarios: 800, instituciones: 45 },
  ];

  const pieChartData = [
    { name: 'Educación', value: 45 },
    { name: 'Empresas', value: 30 },
    { name: 'Gobierno', value: 15 },
    { name: 'Otros', value: 10 },
  ];

  const COLORS = ['#0070F3', '#3B82F6', '#60A5FA', '#93C5FD'];

  const metrics = [
    {
      title: 'Usuarios Totales',
      value: '11,400+',
      subtitle: 'Usuarios activos en ecosistemas',
      icon: Users,
      trend: 'up' as const,
      trendValue: '+12.5%',
      backgroundColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      delay: 0,
    },
    {
      title: 'Instituciones',
      value: '615',
      subtitle: 'Organizaciones conectadas',
      icon: Globe,
      trend: 'up' as const,
      trendValue: '+8.2%',
      backgroundColor: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      delay: 0.1,
    },
    {
      title: 'Uptime',
      value: '99.97%',
      subtitle: 'Disponibilidad del sistema',
      icon: Activity,
      trend: 'neutral' as const,
      backgroundColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      delay: 0.2,
    },
    {
      title: 'Ecosistemas Activos',
      value: '3',
      subtitle: 'Productos en operación',
      icon: Zap,
      trend: 'up' as const,
      trendValue: '+1 nuevo',
      backgroundColor: 'bg-amber-100 dark:bg-amber-900/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
      delay: 0.3,
    },
  ];

  const recentActivity = [
    {
      icon: BookOpen,
      title: 'Lúmina alcanzó 8,500 usuarios',
      time: 'Hace 2 horas',
      type: 'milestone',
    },
    {
      icon: TrendingUp,
      title: 'Incremento de 12.5% en actividad',
      time: 'Hace 4 horas',
      type: 'growth',
    },
    {
      icon: AlertCircle,
      title: 'Mantenimiento programado completado',
      time: 'Hace 1 día',
      type: 'maintenance',
    },
    {
      icon: Users,
      title: '50 nuevas instituciones registradas',
      time: 'Hace 2 días',
      type: 'signup',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <DashboardHeader />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, idx) => (
              <MetricCard key={idx} {...metric} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Line Chart */}
            <ChartCard
              title="Crecimiento de Usuarios"
              subtitle="Últimos 6 meses"
              delay={0.4}
              fullWidth={false}
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="usuarios"
                    stroke="#0070F3"
                    strokeWidth={2}
                    dot={{ fill: '#0070F3', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="activos"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Pie Chart */}
            <ChartCard
              title="Distribución por Sector"
              subtitle="Instituciones por industria"
              delay={0.5}
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Bar Chart */}
            <ChartCard
              title="Usuarios por Ecosistema"
              subtitle="Comparativa de adopción"
              delay={0.6}
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="usuarios" fill="#0070F3" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="instituciones" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">
                Actividad Reciente
              </h3>

              <div className="space-y-4">
                {recentActivity.map((activity, idx) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-b-0 last:pb-0"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">
                Estado del Sistema
              </h3>

              <div className="space-y-4">
                {[
                  { name: 'API Gateway', status: 'operational' },
                  { name: 'Base de Datos', status: 'operational' },
                  { name: 'Cache', status: 'operational' },
                  { name: 'CDN', status: 'operational' },
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {service.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">
                        Operativo
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Last Update */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span>Última actualización: hace 2 minutos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConsolaControl;

