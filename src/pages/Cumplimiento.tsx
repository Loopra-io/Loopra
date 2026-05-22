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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Cumplimiento y Ética
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Última actualización: mayo de 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-6">

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Nuestro Compromiso</h2>
              <p className="text-muted-foreground">
                En Loopra, el cumplimiento normativo y la ética no son un trámite: son parte de nuestra cultura de ingeniería. Construimos ecosistemas de software con la misma rigurosidad que aplicamos al código — cada política, cada proceso y cada decisión debe sostenerse ante el escrutinio técnico y ético más exigente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Marco Normativo Aplicable</h2>
              <p className="text-muted-foreground mb-3">Operamos bajo las siguientes normativas:</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Ley 1581 de 2012 (Colombia): Ley de Protección de Datos Personales y su Decreto reglamentario 1377 de 2013.',
                  'Ley 1273 de 2009 (Colombia): Delitos informáticos y protección de la información y los datos.',
                  'GDPR (Reglamento General de Protección de Datos, UE): para usuarios en el Espacio Económico Europeo.',
                  'CCPA (California Consumer Privacy Act): para usuarios en el estado de California, EE. UU.',
                  'Estatuto del Consumidor colombiano (Ley 1480 de 2011): para relaciones con usuarios finales.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Código de Conducta</h2>
              <p className="text-muted-foreground mb-3">
                Todos los miembros del equipo de Loopra, colaboradores y proveedores que accedan a nuestros sistemas se comprometen a:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Tratar los datos de usuarios con confidencialidad absoluta y usarlos únicamente para los fines autorizados.',
                  'No acceder a cuentas o información de usuarios sin propósito legítimo y registro de actividad.',
                  'Reportar de inmediato cualquier incidente de seguridad, brecha de datos o conducta sospechosa.',
                  'No aceptar conflictos de interés ni beneficios que comprometan la integridad del servicio.',
                  'Respetar los derechos de propiedad intelectual, tanto de Loopra como de terceros.',
                  'Actuar con honestidad en todas las comunicaciones con clientes, socios e instituciones.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Seguridad y Privacidad por Diseño</h2>
              <p className="text-muted-foreground">
                Seguimos el principio de Privacy by Design: la privacidad y la seguridad se integran en nuestros ecosistemas desde la fase de diseño, no como un añadido posterior. Esto incluye minimización de datos (solo recolectamos lo necesario), cifrado de extremo a extremo en transmisiones sensibles, control de acceso basado en roles y auditorías de código orientadas a seguridad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Gestión de Incidentes</h2>
              <p className="text-muted-foreground">
                Ante una brecha de seguridad o incidente que comprometa datos personales, Loopra se compromete a notificar a los usuarios afectados en un plazo máximo de 72 horas desde que tengamos conocimiento del incidente, conforme a lo exigido por el GDPR y las buenas prácticas internacionales. La notificación incluirá la naturaleza del incidente, los datos afectados y las medidas adoptadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Accesibilidad</h2>
              <p className="text-muted-foreground">
                Nos comprometemos a que nuestros ecosistemas sean accesibles para todas las personas, incluyendo aquellas con discapacidades. Trabajamos bajo las pautas WCAG 2.1 nivel AA como referencia de accesibilidad web, y mejoramos continuamente la experiencia de usuarios con tecnologías de asistencia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Transparencia</h2>
              <p className="text-muted-foreground">
                Loopra publica este documento de cumplimiento como parte de su compromiso con la transparencia. No participamos en prácticas de dark patterns, publicidad engañosa ni manipulación de usuarios. Nuestros modelos de negocio se basan en el valor real del servicio, no en la explotación de datos o la atención del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Reportar un Incumplimiento</h2>
              <p className="text-muted-foreground">
                Si identificas una posible violación de estas políticas, una vulnerabilidad de seguridad o una conducta que contradiga nuestro código de ética, te pedimos que nos lo reportes de forma confidencial a <a href="mailto:compliance@loopra.me" className="text-primary hover:underline">compliance@loopra.me</a>. Investigamos todos los reportes con seriedad y garantizamos la protección del informante.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
