import { motion } from 'framer-motion';

export default function Cumplimiento() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Cumplimiento Legal
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Conformidad Regulatoria
              </h2>
              <p className="text-muted-foreground">
                Loopra cumple con todas las regulaciones aplicables en jurisdicciones donde operamos, incluyendo GDPR, CCPA y otras leyes de protección de datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Certificaciones de Seguridad
              </h2>
              <p className="text-muted-foreground">
                Nuestros ecosistemas cumplen con estándares de seguridad internacionales y están regularmente auditados por terceros independientes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Accesibilidad
              </h2>
              <p className="text-muted-foreground">
                Nos comprometemos a hacer nuestros servicios accesibles para todos, cumpliendo con las pautas WCAG 2.1.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Transparencia
              </h2>
              <p className="text-muted-foreground">
                Publicamos regularmente reportes de transparencia sobre solicitudes de datos y cumplimiento legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Reportar Incumplimientos
              </h2>
              <p className="text-muted-foreground">
                Si identificas un posible incumplimiento, contáctanos en compliance@loopra.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
