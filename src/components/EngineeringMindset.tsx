import { motion } from 'framer-motion';
import { Code2, Cloud, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Desarrollo',
    description: 'Código limpio y tipado con TypeScript. Seguimos mejores prácticas de ingeniería para mantener calidad y facilitar colaboración.',
    icon: Code2,
    details: [
      'TypeScript estricto',
      'Testing automatizado',
      'Code review riguroso',
      'Documentación clara',
    ],
  },
  {
    number: 2,
    title: 'Despliegue',
    description: 'Ecosistemas escalables en la nube. Implementamos infraestructura moderna para garantizar disponibilidad y rendimiento.',
    icon: Cloud,
    details: [
      'CI/CD automatizado',
      'Monitoreo 24/7',
      'Auto-scaling',
      'CDN global',
    ],
  },
];

export default function EngineeringMindset() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
            The Engineering Mindset
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro proceso de desarrollo garantiza ecosistemas robustos, escalables y confiables.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left: Content */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                        >
                          <span className="text-2xl font-bold text-primary-foreground">
                            {step.number}
                          </span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-sm text-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                              {detail}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Icon */}
                  <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20"
                    >
                      <Icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center my-12"
                  >
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" strokeWidth={2} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Este enfoque sistemático garantiza que cada ecosistema de Loopra sea una solución profesional, confiable y lista para producción.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
