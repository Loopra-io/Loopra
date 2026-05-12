import { motion } from 'framer-motion';
import { BookOpen, Code2, Zap, HelpCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ✅ FIXED: <Layout> eliminado — App.tsx ya lo envuelve

const docs = [
  {
    icon: BookOpen,
    title: 'Guía de Inicio',
    description: 'Comienza con Loopra en minutos. Aprende los conceptos básicos y configura tu primer proyecto.',
    link: '#',
  },
  {
    icon: Code2,
    title: 'API Reference',
    description: 'Documentación completa de nuestra API REST. Endpoints, autenticación y ejemplos de código.',
    link: '#',
  },
  {
    icon: Zap,
    title: 'Mejores Prácticas',
    description: 'Patrones y estrategias recomendadas para maximizar el potencial de nuestros ecosistemas.',
    link: '#',
  },
  {
    icon: HelpCircle,
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a las preguntas más comunes sobre Loopra y nuestros productos.',
    link: '#',
  },
];

export default function Documentacion() {
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
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Documentación
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Todo lo que necesitas saber para trabajar con Loopra y nuestros ecosistemas. Guías, referencias y ejemplos.
            </p>

            {/* Search Bar */}
            <div className="mt-8 md:mt-12 max-w-md mx-auto px-4 md:px-0">
              <input
                type="text"
                placeholder="Buscar documentación..."
                className="w-full px-5 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          >
            {docs.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {doc.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground mb-6">
                    {doc.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 p-0 h-auto font-semibold flex items-center gap-2 text-sm"
                  >
                    Leer más
                    <ExternalLink className="w-4 h-4" strokeWidth={2} />
                  </Button>

                  <div className="mt-6 h-1 w-0 bg-primary group-hover:w-8 transition-all duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Recursos Adicionales
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 px-2">
              Encuentra tutoriales, ejemplos de código y comunidades de desarrolladores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'GitHub', description: 'Repositorios públicos y ejemplos' },
                { title: 'Blog', description: 'Artículos técnicos y actualizaciones' },
                { title: 'Comunidad', description: 'Foro de desarrolladores y soporte' },
              ].map((resource, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 p-0 h-auto font-semibold text-sm"
                  >
                    Visitar
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}