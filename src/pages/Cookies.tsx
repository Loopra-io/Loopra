import { motion } from 'framer-motion';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Política de Cookies
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. ¿Qué son las Cookies?
              </h2>
              <p className="text-muted-foreground">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo para mejorar tu experiencia de navegación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Tipos de Cookies que Usamos
              </h2>
              <p className="text-muted-foreground">
                Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de análisis para entender cómo usas nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Control de Cookies
              </h2>
              <p className="text-muted-foreground">
                Puedes controlar las cookies a través de la configuración de tu navegador. Ten en cuenta que desactivar cookies puede afectar la funcionalidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Cookies de Terceros
              </h2>
              <p className="text-muted-foreground">
                Algunos servicios de terceros pueden establecer sus propias cookies en nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Más Información
              </h2>
              <p className="text-muted-foreground">
                Para más información sobre cómo usamos cookies, consulta nuestra política de privacidad.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
