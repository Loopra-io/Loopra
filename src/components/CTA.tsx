import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />

          {/* ✅ FIXED: padding reducido en móvil para evitar overflow */}
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Transforma tu Negocio con Loopra
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestros ecosistemas de software pueden revolucionar tu industria y llevar tu organización al siguiente nivel.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
                >
                  Contáctanos
                  <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2} />
                </Button>
              </Link>
              <a href="https://lumina.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 font-semibold rounded-xl transition-all duration-200 w-full sm:w-auto"
                >
                  Explorar Lúmina
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
              <div>✓ Prueba gratuita de 14 días</div>
              <div>✓ Sin tarjeta de crédito requerida</div>
              <div>✓ Soporte dedicado incluido</div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
