import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Startup',
    price: '$99',
    period: '/mes',
    description: 'Para emprendimientos y pequeños equipos',
    features: [
      'Acceso a 1 ecosistema',
      'Hasta 50 usuarios',
      '10 GB de almacenamiento',
      'Soporte por email',
      'Actualizaciones automáticas',
      'API básica',
    ],
    cta: 'Comenzar',
    highlighted: false,
  },
  {
    name: 'Profesional',
    price: '$299',
    period: '/mes',
    description: 'Para empresas en crecimiento',
    features: [
      'Acceso a todos los ecosistemas',
      'Usuarios ilimitados',
      '500 GB de almacenamiento',
      'Soporte prioritario 24/7',
      'Analíticas avanzadas',
      'API completa',
      'Integraciones personalizadas',
      'Capacitación incluida',
    ],
    cta: 'Seleccionar Plan',
    highlighted: true,
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    period: '',
    description: 'Para grandes organizaciones',
    features: [
      'Todo en Profesional',
      'Almacenamiento ilimitado',
      'Soporte dedicado 24/7',
      'SLA garantizado 99.99%',
      'Servidor dedicado',
      'Auditoría y compliance',
      'Onboarding personalizado',
      'Roadmap dedicado',
    ],
    cta: 'Contactar Ventas',
    highlighted: false,
  },
];

export default function Pricing() {
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
            Planes Flexibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para tu organización. Escala según tus necesidades sin compromisos a largo plazo.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-primary bg-card shadow-xl shadow-primary/20 scale-105 md:scale-100'
                  : 'border border-border bg-card hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

