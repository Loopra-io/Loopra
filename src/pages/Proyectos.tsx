import { motion } from 'framer-motion';
import { BookOpen, Zap, Rocket, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ✅ FIXED: <Layout> eliminado — App.tsx ya lo envuelve

const projects = [
  {
    name: 'Lúmina',
    description: 'Ecosistema educativo digital que conecta, empodera e inspira a la comunidad académica.',
    icon: BookOpen,
    status: 'Disponible',
    features: ['Plataforma educativa', 'Colaboración en tiempo real', 'Herramientas de evaluación'],
    link: '/lumina',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Próximo Ecosistema',
    description: 'Revolucionando la productividad empresarial con herramientas inteligentes y colaborativas.',
    icon: Zap,
    status: 'Próximamente',
    features: ['Automatización inteligente', 'Gestión colaborativa', 'Análisis en tiempo real'],
    link: '#',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Futuro Ecosistema',
    description: 'Transformando la forma en que las organizaciones colaboran, innovan y escalan globalmente.',
    icon: Rocket,
    status: 'En Desarrollo',
    features: ['Escalabilidad ilimitada', 'Conectividad global', 'Herramientas avanzadas'],
    link: '#',
    color: 'from-orange-400 to-red-500',
  },
];

export default function Proyectos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Nuestros Proyectos
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explora los ecosistemas de software que Loopra está desarrollando para transformar industrias.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card — sin whileHover scale en móvil para evitar overflow */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.status === 'Disponible'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Próximamente'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-200"
                    disabled={project.status !== 'Disponible'}
                  >
                    {project.status === 'Disponible' ? 'Explorar' : 'Próximamente'}
                    <ExternalLink className="ml-2 w-4 h-4" strokeWidth={2} />
                  </Button>
                </motion.div>

                {/* Glow effect */}
                {project.status === 'Disponible' && (
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-10 blur-xl -z-10`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}