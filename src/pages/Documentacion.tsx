import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code2, Zap, HelpCircle, ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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

const resources = [
  { title: 'GitHub',    description: 'Repositorios públicos y ejemplos',        href: '#' },
  { title: 'Blog',      description: 'Artículos técnicos y actualizaciones',    href: '#' },
  { title: 'Comunidad', description: 'Foro de desarrolladores y soporte',       href: '#' },
];

export default function Documentacion() {
  const [query, setQuery] = useState('');

  const filteredDocs = docs.filter(
    doc =>
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.description.toLowerCase().includes(query.toLowerCase())
  );

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
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Documentación
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas saber para trabajar con Loopra y nuestros ecosistemas. Guías, referencias y ejemplos.
            </p>

            {/* Search Bar */}
            <div className="mt-12 max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" strokeWidth={1.5} />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar documentación..."
                className="w-full pl-11 pr-6 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-4 md:py-8 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredDocs.length > 0 ? (
              <motion.div
                key="results"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredDocs.map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <motion.div
                      key={doc.title}
                      variants={itemVariants}
                      layout
                      className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {doc.title}
                      </h3>

                      <p className="text-muted-foreground mb-6">
                        {doc.description}
                      </p>

                      <Button
                        variant="ghost"
                        className="text-primary hover:bg-primary/10 p-0 h-auto font-semibold flex items-center gap-2"
                        disabled={doc.link === '#'}
                      >
                        Leer más
                        <ExternalLink className="w-4 h-4" strokeWidth={2} />
                      </Button>

                      <div className="mt-6 h-1 w-0 bg-primary group-hover:w-8 transition-all duration-300" />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" strokeWidth={1} />
                <p className="text-muted-foreground">
                  No se encontraron resultados para{' '}
                  <span className="text-foreground font-medium">"{query}"</span>
                </p>
                <button
                  onClick={() => setQuery('')}
                  className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Limpiar búsqueda
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recursos Adicionales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Encuentra tutoriales, ejemplos de código y comunidades de desarrolladores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <span className="text-sm text-muted-foreground/40 cursor-not-allowed select-none font-semibold">
                    Visitar
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
