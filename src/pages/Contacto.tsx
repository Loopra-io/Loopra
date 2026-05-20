import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            ¿Tienes preguntas? Nos encantaría escucharte. Contáctanos a través de cualquiera de estos canales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                Envíanos un email y te responderemos en 24 horas.
              </p>
              <a
                href="mailto:hola@loopra.com"
                className="text-primary hover:text-primary/80 font-medium mt-4 inline-block"
              >
                hola@loopra.com
              </a>
            </motion.div>

            {/* Teléfono */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Teléfono</h3>
              <p className="text-sm text-muted-foreground">
                Llámanos durante horario de oficina.
              </p>
              <a
                href="tel:+573001234567"
                className="text-primary hover:text-primary/80 font-medium mt-4 inline-block"
              >
                +57 (300) 123-4567
              </a>
            </motion.div>

            {/* Ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">
                Bogotá, Colombia
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Carrera 7 #123, Bogotá DC
              </p>
            </motion.div>
          </div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Envíanos un Mensaje
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Tu mensaje"
                rows={6}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
