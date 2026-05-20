import { motion } from 'framer-motion';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Introducción
              </h2>
              <p className="text-muted-foreground">
                En Loopra, valoramos tu privacidad. Esta política de privacidad explica cómo recopilamos, usamos y protegemos tu información personal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Información que Recopilamos
              </h2>
              <p className="text-muted-foreground">
                Recopilamos información que proporcionas directamente, como nombre, email y datos de uso de nuestros ecosistemas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Cómo Usamos tu Información
              </h2>
              <p className="text-muted-foreground">
                Utilizamos tu información para mejorar nuestros servicios, comunicarnos contigo y cumplir con obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Protección de Datos
              </h2>
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad para proteger tu información contra acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Contacto
              </h2>
              <p className="text-muted-foreground">
                Si tienes preguntas sobre esta política, contáctanos en privacy@loopra.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
