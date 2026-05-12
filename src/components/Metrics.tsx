import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Building2, Users, Activity } from 'lucide-react';

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export default function Metrics() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      icon: <Building2 className="w-6 h-6" />,
      label: 'Instituciones',
      value: 0,
      suffix: '+',
      description: 'Usando nuestros ecosistemas',
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Usuarios Gestionados',
      value: 0,
      suffix: 'K+',
      description: 'En tiempo real',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      label: 'Uptime del Ecosistema',
      value: 0,
      suffix: '%',
      description: 'Disponibilidad garantizada',
    },
  ]);

  // Animate numbers on mount
  useEffect(() => {
    const targets = [500, 100, 99.9];
    const durations = [2000, 2000, 2000];

    const intervals = targets.map((target, idx) => {
      let current = 0;
      const increment = target / (durations[idx] / 50);

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[idx]);
        }

        setMetrics((prev) => {
          const updated = [...prev];
          updated[idx].value = Math.round(current * 10) / 10;
          return updated;
        });
      }, 50);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Métricas en Tiempo Real
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loopra está en producción y generando impacto real en instituciones educativas y empresas.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 text-center"
              >
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary/20 transition-colors"
                >
                  {metric.icon}
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-2"
                >
                  <span className="text-5xl md:text-6xl font-bold text-primary">
                    {metric.value}
                  </span>
                  <span className="text-3xl font-bold text-primary ml-1">
                    {metric.suffix}
                  </span>
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-6 h-1 w-8 bg-primary mx-auto origin-left"
                />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl -z-10"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
