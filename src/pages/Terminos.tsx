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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Última actualización: mayo de 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-6">

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground">
                Al acceder o usar cualquier servicio, sitio web o aplicación de Loopra, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios. El uso continuado de los servicios tras la publicación de cambios implica tu aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Descripción del Servicio</h2>
              <p className="text-muted-foreground">
                Loopra desarrolla y opera ecosistemas de software, incluyendo Lúmina y otros productos en desarrollo. Los servicios pueden incluir plataformas educativas, herramientas de colaboración, APIs y paneles de gestión. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte del servicio en cualquier momento, notificándote con al menos 30 días de anticipación cuando sea posible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Registro y Cuenta</h2>
              <p className="text-muted-foreground mb-3">Al crear una cuenta en cualquier ecosistema de Loopra, te comprometes a:</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Proporcionar información veraz, precisa y actualizada.',
                  'Mantener la confidencialidad de tus credenciales de acceso.',
                  'Notificarnos de inmediato ante cualquier uso no autorizado de tu cuenta.',
                  'No compartir tu cuenta con terceros sin autorización expresa de Loopra.',
                  'Ser el único responsable de todas las actividades realizadas bajo tu cuenta.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Uso Permitido</h2>
              <p className="text-muted-foreground mb-3">Puedes usar nuestros servicios para:</p>
              <ul className="space-y-2 text-muted-foreground list-none mb-4">
                {[
                  'Acceder a las funcionalidades contratadas dentro de tu plan activo.',
                  'Crear, gestionar y compartir contenido dentro de los ecosistemas según los permisos de tu rol.',
                  'Integrar nuestras APIs en tus aplicaciones, respetando los límites de uso de tu plan.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Conductas Prohibidas</h2>
              <p className="text-muted-foreground mb-3">Está estrictamente prohibido:</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                {[
                  'Usar los servicios para actividades ilegales, fraudulentas o que violen derechos de terceros.',
                  'Intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.',
                  'Distribuir malware, spam, contenido ofensivo o material que infrinja derechos de autor.',
                  'Realizar ingeniería inversa, descompilar o intentar extraer el código fuente de nuestros productos.',
                  'Revender, sublicenciar o transferir el acceso a los servicios sin autorización escrita de Loopra.',
                  'Sobrecargar intencionalmente nuestra infraestructura o interferir con el servicio de otros usuarios.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Propiedad Intelectual</h2>
              <p className="text-muted-foreground">
                Todos los elementos de los ecosistemas de Loopra —incluyendo código fuente, diseños, logotipos, marcas, textos y funcionalidades— son propiedad exclusiva de Loopra o sus licenciantes, y están protegidos por las leyes de propiedad intelectual colombianas e internacionales. El uso de nuestros servicios no te otorga ningún derecho sobre nuestra propiedad intelectual, salvo la licencia limitada, no exclusiva e intransferible de acceso al servicio contratado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contenido del Usuario</h2>
              <p className="text-muted-foreground">
                Conservas la propiedad del contenido que creas o subes a nuestros ecosistemas. Al hacerlo, nos otorgas una licencia mundial, no exclusiva y libre de regalías para alojar, procesar y mostrar dicho contenido exclusivamente con el fin de prestarte el servicio. No vendemos ni usamos tu contenido para entrenar modelos de inteligencia artificial sin tu consentimiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Planes, Pagos y Cancelaciones</h2>
              <p className="text-muted-foreground">
                Los planes de pago se facturan mensualmente por anticipado. Puedes cancelar en cualquier momento; el servicio continuará activo hasta el final del período facturado. No realizamos reembolsos proporcionales por cancelaciones anticipadas, salvo en casos donde la ley lo exija o Loopra lo determine discrecionalmente. El incumplimiento de pago puede resultar en la suspensión del servicio tras 7 días de aviso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground">
                En la máxima medida permitida por la ley, Loopra no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad total no superará el monto pagado por el usuario en los últimos 3 meses de servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Ley Aplicable y Jurisdicción</h2>
              <p className="text-muted-foreground">
                Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa se someterá a la jurisdicción de los jueces y tribunales de Cali, Valle del Cauca, Colombia, salvo que las partes acuerden otro mecanismo de resolución.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Contacto</h2>
              <p className="text-muted-foreground">
                Si tienes preguntas sobre estos términos, escríbenos a <a href="mailto:hola@loopra.me" className="text-primary hover:underline">hola@loopra.me</a>.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
