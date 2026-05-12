import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Users,
  Palette,
  BarChart3,
  Rocket,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Tecnología de Vanguardia',
    description: 'Desarrollamos con las tecnologías más modernas para garantizar rendimiento, escalabilidad y seguridad.',
  },
  {
    icon: Shield,
    title: 'Seguridad Empresarial',
    description: 'Protección de datos de nivel empresarial con encriptación, backups y cumplimiento normativo.',
  },
  {
    icon: Users,
    title: 'Comunidades Globales',
    description: 'Conectamos millones de usuarios en ecosistemas colaborativos y seguros.',
  },
  {
    icon: Palette,
    title: 'Experiencia Intuitiva',
    description: 'Interfaces diseñadas con principios de UX/UI para máxima usabilidad y adopción.',
  },
  {
    icon: BarChart3,
    title: 'Analíticas Avanzadas',
    description: 'Insights en tiempo real para tomar decisiones informadas y optimizar resultados.',
  },
  {
    icon: Rocket,
    title: 'Innovación Continua',
    description: 'Actualizaciones regulares y nuevas características basadas en feedback de usuarios.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
            Por Qué Elegir Loopra
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos una empresa comprometida con la excelencia en desarrollo de software y la creación de ecosistemas que transforman industrias.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 bg-primary group-hover:w-8 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
