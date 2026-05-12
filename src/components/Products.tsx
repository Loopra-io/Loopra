import { motion } from 'framer-motion';
import { BookOpen, Zap, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ecosystems = [
  {
    name: 'Lúmina',
    icon: BookOpen,
    status: 'Disponible',
    description: 'Ecosistema educativo digital que conecta, empodera e inspira a la comunidad académica. Herramientas de enseñanza, aprendizaje y colaboración.',
    features: ['Plataforma educativa', 'Colaboración en tiempo real', 'Herramientas de evaluación', 'Comunidad global'],
    cta: 'Explorar Lúmina',
    highlighted: true,
  },
  {
    name: 'Próximo Ecosistema',
    icon: Zap,
    status: 'Próximamente',
    description: 'Un nuevo ecosistema diseñado para revolucionar la productividad empresarial y la gestión de proyectos con inteligencia artificial.',
    features: ['Automatización inteligente', 'Gestión colaborativa', 'Análisis en tiempo real', 'Integraciones avanzadas'],
    cta: 'Notificarme',
    highlighted: false,
  },
  {
    name: 'Futuro Ecosistema',
    icon: Rocket,
    status: 'En Desarrollo',
    description: 'Un ecosistema innovador para transformar la forma en que las organizaciones colaboran, innovan y escalan globalmente.',
    features: ['Escalabilidad ilimitada', 'Conectividad global', 'Herramientas avanzadas', 'Soporte empresarial'],
    cta: 'Más Información',
    highlighted: false,
  },
];

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            Nuestros Ecosistemas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loopra desarrolla ecosistemas de software innovadores que transforman industrias y empoderan a millones de usuarios.
          </p>
        </motion.div>

        {/* Ecosystems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ecosystems.map((ecosystem, index) => {
            const Icon = ecosystem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  ecosystem.highlighted
                    ? 'border-2 border-primary bg-card shadow-xl shadow-primary/20'
                    : 'border border-border bg-card hover:border-primary/30 hover:shadow-lg'
                }`}
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    ecosystem.status === 'Disponible'
                      ? 'bg-green-100 text-green-700'
                      : ecosystem.status === 'Próximamente'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {ecosystem.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {ecosystem.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {ecosystem.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {ecosystem.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-xl font-semibold transition-all duration-200 ${
                    ecosystem.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                  variant={ecosystem.highlighted ? 'default' : 'outline'}
                >
                  {ecosystem.cta}
                  <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2} />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
