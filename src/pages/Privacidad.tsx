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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Última actualización: mayo de 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-6">

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Responsable del Tratamiento</h2>
              <p className="text-muted-foreground">
                Loopra, con domicilio en Cali, Valle del Cauca, Colombia, dirigida por Kener Alejandro Botina Bravo, es responsable del tratamiento de los datos personales recolectados a través de nuestros sitios web, aplicaciones y servicios. Puedes contactarnos en <a href="mailto:privacy@loopra.me" className="text-primary hover:underline">privacy@loopra.me</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Datos que Recolectamos</h2>
              <p className="text-muted-foreground mb-3">Recolectamos únicamente los datos necesarios para prestarte nuestros servicios:</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Datos de identificación: nombre completo y dirección de correo electrónico, proporcionados al registrarte o contactarnos.',
                  'Datos de uso: páginas visitadas, tiempo de sesión, acciones dentro de los ecosistemas y preferencias de configuración.',
                  'Datos técnicos: dirección IP, tipo de navegador, sistema operativo y dispositivo utilizado.',
                  'Cookies y tecnologías similares: para el funcionamiento del servicio, análisis de uso y mejora de la experiencia.',
                  'Comunicaciones: el contenido de mensajes que nos envías a través del formulario de contacto o por email.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Finalidad del Tratamiento</h2>
              <p className="text-muted-foreground mb-3">Usamos tus datos para:</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Prestarte los servicios contratados y gestionar tu cuenta dentro de los ecosistemas de Loopra.',
                  'Responderte cuando nos contactas o solicitas información sobre nuestros planes.',
                  'Enviarte comunicaciones relacionadas con el servicio (actualizaciones, alertas de seguridad, cambios en los términos).',
                  'Enviarte comunicaciones comerciales o de marketing, solo si has dado tu consentimiento explícito.',
                  'Mejorar nuestros productos mediante el análisis agregado y anonimizado del uso.',
                  'Cumplir con obligaciones legales y regulatorias aplicables.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Base Legal del Tratamiento</h2>
              <p className="text-muted-foreground">
                El tratamiento de tus datos se basa en la ejecución del contrato de servicios (cuando usas nuestros ecosistemas), tu consentimiento (para comunicaciones de marketing y cookies no esenciales), el interés legítimo de Loopra (para análisis internos de mejora) y el cumplimiento de obligaciones legales. En Colombia, aplicamos la Ley 1581 de 2012 y el Decreto 1377 de 2013. Para usuarios en el Espacio Económico Europeo, cumplimos con el GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Compartición de Datos</h2>
              <p className="text-muted-foreground mb-3">
                No vendemos ni alquilamos tus datos personales. Podemos compartirlos únicamente con:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Proveedores de servicios tecnológicos que nos apoyan en la operación (hosting, analítica, email), bajo contratos de confidencialidad y tratamiento de datos.',
                  'Autoridades públicas cuando la ley lo exija o para proteger derechos legítimos.',
                  'Terceros en caso de fusión, adquisición o reestructuración empresarial, notificándote previamente.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Derechos ARCO y Otros Derechos</h2>
              <p className="text-muted-foreground mb-3">Puedes ejercer los siguientes derechos en cualquier momento:</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Acceso: conocer qué datos tenemos sobre ti y cómo los usamos.',
                  'Rectificación: corregir datos inexactos o incompletos.',
                  'Cancelación (supresión): solicitar la eliminación de tus datos cuando ya no sean necesarios.',
                  'Oposición: oponerte al tratamiento de tus datos para fines específicos, como el marketing.',
                  'Portabilidad: recibir tus datos en un formato estructurado y legible por máquina (usuarios GDPR).',
                  'Limitación: solicitar que pausemos el tratamiento en ciertos supuestos.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-3">
                Para ejercer tus derechos, escríbenos a <a href="mailto:privacy@loopra.me" className="text-primary hover:underline">privacy@loopra.me</a>. Responderemos en un plazo máximo de 15 días hábiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Retención de Datos</h2>
              <p className="text-muted-foreground">
                Conservamos tus datos mientras mantengas una relación activa con Loopra o el tiempo necesario para cumplir con obligaciones legales. Al finalizar la relación, tus datos serán eliminados o anonimizados en un plazo máximo de 90 días, salvo que la ley exija un período mayor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Seguridad</h2>
              <p className="text-muted-foreground">
                Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos contra acceso no autorizado, pérdida o alteración: cifrado en tránsito y en reposo, controles de acceso por roles, monitoreo continuo y auditorías periódicas de seguridad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Cambios a esta Política</h2>
              <p className="text-muted-foreground">
                Podemos actualizar esta política periódicamente. Te notificaremos por email o mediante un aviso destacado en nuestro sitio cuando realicemos cambios materiales. La fecha de última actualización siempre estará visible al inicio del documento.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
