import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Palette, Zap } from 'lucide-react';

const technologies = [
  {
    name: 'React',
    icon: Code2,
    description: 'Framework UI moderno para interfaces interactivas y responsivas',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'TypeScript',
    icon: Code2,
    description: 'Tipado estático para código robusto y mantenible',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    description: 'Utilidades CSS para diseño rápido y consistente',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Framer Motion',
    icon: Zap,
    description: 'Animaciones fluidas y microinteracciones profesionales',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            ADN Técnico de Loopra
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Construimos ecosistemas con las tecnologías más modernas y confiables del mercado.
          </p>
        </motion.div>

        {/* ✅ FIXED: era lg:grid-cols-5 con solo 4 items — ahora lg:grid-cols-4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center text-center"
                >
                  {/* Icon Container */}
                  <motion.div
                    animate={hoveredIndex === index ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-sm md:text-lg font-bold text-foreground mb-2">
                    {tech.name}
                  </h3>

                  {/* Description - Appears on hover (hidden on mobile) */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 1, height: 'auto' }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="text-xs md:text-sm text-muted-foreground overflow-hidden hidden md:block"
                  >
                    {tech.description}
                  </motion.p>

                  {/* Description always visible on mobile */}
                  <p className="text-xs text-muted-foreground mt-1 md:hidden leading-tight">
                    {tech.description}
                  </p>
                </motion.div>

                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId={`glow-${index}`}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-10 blur-xl -z-10`}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Cada tecnología está cuidadosamente seleccionada para garantizar rendimiento, escalabilidad y experiencia de usuario excepcional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}