import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, ChevronDown, BookOpen, Zap, Rocket, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState, FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { Ecosystem, NavLink } from '@/types/navbar';
import { cn } from '@/lib/cn';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemDropdownOpen, setIsEcosystemDropdownOpen] = useState(false);
  const { theme, toggleTheme, switchable } = useTheme();

  const ecosystems: Ecosystem[] = [
    {
      name: 'Lúmina',
      description: 'Ecosistema educativo digital',
      icon: BookOpen,
      href: 'https://lumina.com',
      status: 'Disponible',
    },
    {
      name: 'Próximo Ecosistema',
      description: 'Productividad empresarial',
      icon: Zap,
      href: '#',
      status: 'Próximamente',
    },
    {
      name: 'Futuro Ecosistema',
      description: 'Colaboración global',
      icon: Rocket,
      href: '#',
      status: 'En Desarrollo',
    },
  ];

  const navLinks: NavLink[] = [
    { label: 'Ecosistemas', href: '#', dropdown: true },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Sobre el Estudio', href: '/sobre-estudio' },
    { label: 'Documentación', href: '/docs' },
  ];

  const getStatusStyles = (status: Ecosystem['status']): string => {
    const baseStyles = 'inline-block text-xs font-medium mt-1 px-2 py-0.5 rounded-full';
    const statusMap = {
      'Disponible': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
      'Próximamente': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
      'En Desarrollo': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200',
    };
    return cn(baseStyles, statusMap[status]);
  };

  const EcosystemLink: FC<{ ecosystem: Ecosystem }> = ({ ecosystem }) => {
    const Icon = ecosystem.icon;
    const isExternal = ecosystem.href.startsWith('http');

    const content = (
      <div className="flex items-start gap-3 w-full">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
        </div>
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold text-foreground">
            {ecosystem.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {ecosystem.description}
          </p>
          <span className={getStatusStyles(ecosystem.status)}>
            {ecosystem.status}
          </span>
        </div>
      </div>
    );

    if (isExternal) {
      return (
        <a
          href={ecosystem.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-lg hover:bg-muted transition-colors duration-200 group/item"
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        to={ecosystem.href}
        className="block p-3 rounded-lg hover:bg-muted transition-colors duration-200 group/item"
      >
        {content}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Loopra home"
          >
            <img
              src="/favicon.png"
              alt="Loopra logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Loopra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <DropdownMenu open={isEcosystemDropdownOpen} onOpenChange={setIsEcosystemDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                        aria-expanded={isEcosystemDropdownOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-300',
                            isEcosystemDropdownOpen && 'rotate-180'
                          )}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {ecosystems.map((ecosystem) => (
                        <DropdownMenuItem key={ecosystem.name} asChild>
                          <EcosystemLink ecosystem={ecosystem} />
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {switchable && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                ) : (
                  <Sun className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                )}
              </motion.button>
            )}
            <a href="https://lumina.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-foreground hover:bg-muted rounded-lg"
              >
                Explorar Lúmina
              </Button>
            </a>
            <Link to="/consola-control">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium">
                Consola de Control
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6 text-foreground" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/50 bg-background mt-4"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <details className="group">
                      <summary className="w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2 flex items-center justify-between cursor-pointer list-none">
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="space-y-2 pl-4 mt-2">
                        {ecosystems.map((ecosystem) => (
                          <EcosystemLink key={ecosystem.name} ecosystem={ecosystem} />
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={link.href}
                      className="w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="space-y-2 pt-4 border-t border-border/50">
                {switchable && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleTheme}
                    className="w-full p-2 rounded-lg hover:bg-muted transition-colors duration-200 flex items-center justify-center gap-2 text-foreground"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="w-5 h-5" strokeWidth={1.5} />
                        <span className="text-sm font-medium">Modo Oscuro</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-5 h-5" strokeWidth={1.5} />
                        <span className="text-sm font-medium">Modo Claro</span>
                      </>
                    )}
                  </motion.button>
                )}
                <a href="https://lumina.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full text-foreground hover:bg-muted rounded-lg justify-start"
                  >
                    Explorar Lúmina
                  </Button>
                </a>
                <Link to="/consola-control" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium">
                    Consola de Control
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

