import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Zap, ArrowRight, Building2, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Sparkles,
    title: 'Innovación',
    description: 'Creamos soluciones tecnológicas que transforman industrias y empoderan comunidades.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Creemos en la fuerza de las comunidades conectadas y colaborativas.',
  },
  {
    icon: Target,
    title: 'Excelencia',
    description: 'Perseguimos la excelencia en cada aspecto de nuestro trabajo y productos.',
  },
  {
    icon: Zap,
    title: 'Impacto',
    description: 'Medimos nuestro éxito por el impacto positivo que generamos en el mundo.',
  },
];

const stats = [
  { icon: Building2, value: '500+',  label: 'Instituciones',     description: 'Usando nuestros ecosistemas' },
  { icon: Users,     value: '100K+', label: 'Usuarios Activos',  description: 'En tiempo real'             },
  { icon: Zap,       value: '3',     label: 'Ecosistemas',       description: 'En producción y desarrollo'  },
  { icon: Activity,  value: '99.9%', label: 'Uptime',            description: 'Disponibilidad garantizada' },
];

const team = [
  {
    name: 'Kener Alejandro Botina Bravo',
    role: 'Fundador & Lead Engineer',
    initials: 'KB',
    bio: 'Ingeniero de software apasionado por construir ecosistemas que transformen la manera en que las personas aprenden y colaboran.',
    placeholder: false,
  },
  {
    name: 'Únete al Equipo',
    role: 'Diseñador de Producto',
    initials: '+',
    bio: 'Buscamos un diseñador apasionado por crear experiencias digitales de alto impacto que conecten con millones de usuarios.',
    placeholder: true,
  },
  {
    name: 'Únete al Equipo',
    role: 'Ingeniero de Software',
    initials: '+',
    bio: 'Buscamos un ingeniero senior con experiencia en ecosistemas escalables y arquitecturas modernas en la nube.',
    placeholder: true,
  },
];

export default function SobreEstudio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Sobre Loopra
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Somos un equipo de ingenieros, diseñadores y visionarios comprometidos con crear ecosistemas de software que transforman la forma en que las personas trabajan, aprenden y colaboran.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Nuestra Misión
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                En Loopra, creemos que la tecnología debe ser un puente que conecta, empodera e inspira. Nuestro objetivo es desarrollar ecosistemas de software que resuelvan problemas reales y generen impacto positivo en millones de vidas.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Cada producto que creamos es resultado de investigación profunda, diseño cuidadoso y desarrollo riguroso. Nos comprometemos con la excelencia en cada detalle.
              </p>
            </motion.div>

            {/* Right — Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
                    <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Estos principios guían cada decisión que tomamos y cada producto que creamos.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 px-2">
              Personas apasionadas construyendo tecnología con propósito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 md:p-8 rounded-2xl border bg-card text-left transition-all duration-300 ${
                    member.placeholder
                      ? 'border-dashed border-border hover:border-primary/40'
                      : 'border-border hover:border-primary/30 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold ${
                    member.placeholder
                      ? 'bg-muted text-muted-foreground border-2 border-dashed border-border'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {member.initials}
                  </div>
                  <h3 className={`text-base md:text-lg font-bold mb-1 text-center ${
                    member.placeholder ? 'text-muted-foreground' : 'text-foreground'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm text-center mb-3 ${
                    member.placeholder ? 'text-muted-foreground/60' : 'text-primary font-medium'
                  }`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {member.bio}
                  </p>
                  {member.placeholder && (
                    <div className="mt-4 text-center">
                      <Link
                        to="/carreras"
                        className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Ver posición →
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                ¿Quieres ser parte de Loopra?
              </h2>
              <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
                Estamos construyendo el futuro del software. Si compartes nuestra visión, nos encantaría conocerte.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/carreras">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold w-full sm:w-auto">
                    Ver Carreras
                    <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2} />
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button variant="outline" className="rounded-xl border-border hover:bg-muted font-semibold w-full sm:w-auto">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
