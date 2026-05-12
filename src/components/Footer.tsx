import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Ecosistemas: ['Lúmina', 'Próximos', 'Documentación', 'API'],
    Desarrolladores: ['GitHub', 'Documentación', 'Comunidad', 'Soporte'],
    Empresa: ['Sobre el Estudio', 'Carreras', 'Prensa', 'Contacto'],
    Legal: ['Privacidad', 'Términos', 'Cookies', 'Cumplimiento'],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-foreground">Loopra</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Desarrollamos ecosistemas de software innovadores que transforman industrias y empoderan a millones de usuarios globalmente.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map((category, idx) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {category[0]}
              </h4>
              <ul className="space-y-3">
                {category[1].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Loopra. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
