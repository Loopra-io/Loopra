import { motion } from 'framer-motion';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Términos de Servicio
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Aceptación de Términos
              </h2>
              <p className="text-muted-foreground">
                Al acceder y usar los servicios de Loopra, aceptas estar vinculado por estos términos y condiciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Uso del Servicio
              </h2>
              <p className="text-muted-foreground">
                Te comprometes a usar nuestros servicios de manera legal y responsable, sin violar derechos de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Propiedad Intelectual
              </h2>
              <p className="text-muted-foreground">
                Todo contenido en nuestros ecosistemas es propiedad de Loopra o sus licenciantes. No puedes reproducirlo sin permiso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Limitación de Responsabilidad
              </h2>
              <p className="text-muted-foreground">
                Loopra no es responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Cambios en los Términos
              </h2>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
