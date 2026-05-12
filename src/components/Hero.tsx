import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-background pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Contenido izquierdo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">Bienvenido a Loopra</span>
              </div>
            </motion.div>

            {/* Título principal */}
            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Ecosistemas de Software
                <span className="block text-primary">para el Futuro</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Loopra desarrolla ecosistemas de software innovadores que transforman industrias. Descubre Lúmina y los próximos ecosistemas que revolucionarán la educación, productividad y colaboración.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
              >
                Consola de Control
                <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted rounded-xl transition-all duration-200 w-full sm:w-auto"
              >
                Explorar Lúmina
              </Button>
            </motion.div>

            {/* Stats — ✅ FIXED: gap más pequeño en móvil para que no se apriete */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-border"
            >
              <div>
                <div className="text-xl md:text-2xl font-bold text-primary">3</div>
                <p className="text-xs md:text-sm text-muted-foreground">Ecosistemas</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-primary">100K+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Usuarios Activos</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-primary">99.9%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Disponibilidad</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            // ✅ FIXED: removido "as any" — transition acepta objeto directamente
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663326772252/LtKTubJTndvTL7bDXB7nd7/lumina-hero-SCw7sbAodnrfBwhBXqEcS9.webp"
                alt="Loopra Ecosystems"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Elemento decorativo flotante */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}