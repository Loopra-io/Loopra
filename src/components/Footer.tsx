import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type FooterLink = { label: string; href: string };

const footerLinks: Record<string, FooterLink[]> = {
  Ecosistemas: [
    { label: 'Lúmina',        href: 'https://lumina.com' },
    { label: 'Próximos',      href: '#'                  },
    { label: 'Documentación', href: '/docs'              },
  ],
  Desarrolladores: [
    { label: 'GitHub',        href: 'https://github.com/Loopra-io' },
    { label: 'Documentación', href: '/docs'                        },
    { label: 'Comunidad',     href: 'https://github.com/Loopra-io' },
    { label: 'Soporte',       href: 'mailto:soporte@loopra.me'     },
  ],
  Empresa: [
    { label: 'Sobre el Estudio', href: '/sobre-estudio'        },
    { label: 'Carreras',         href: '/carreras'             },
    { label: 'Prensa',           href: '/prensa'               },
    { label: 'Contacto',         href: '/contacto' },
  ],
  Legal: [
    { label: 'Privacidad',   href: '/privacidad'   },
    { label: 'Términos',     href: '/terminos'     },
    { label: 'Cumplimiento', href: '/cumplimiento' },
  ],
};

const socialLinks: FooterLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589625951890'          },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kener-alejandro-botina-bravo-7bb577317' },
  { label: 'GitHub',   href: 'https://github.com/Loopra-io'                                   },
];

const linkClass = 'text-sm text-muted-foreground hover:text-primary transition-colors duration-200';
const disabledClass = 'text-sm text-muted-foreground/40 cursor-not-allowed select-none';

function FooterLink({ link }: { link: FooterLink }) {
  if (link.href === '#') {
    return <span className={disabledClass}>{link.label}</span>;
  }
  if (link.href.startsWith('http') || link.href.startsWith('mailto:')) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={linkClass}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.href} className={linkClass}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity w-fit">
              <img
                src="/favicon.png"
                alt="Loopra logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-foreground">Loopra</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Desarrollamos ecosistemas de software innovadores que transforman industrias y empoderan a millones de usuarios globalmente.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Fundador: Kener Alejandro Botina Bravo
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
