import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Zap } from 'lucide-react';

// ✅ FIXED: <Layout> eliminado — App.tsx ya lo envuelve

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

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-60 md:h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <p className="text-foreground font-semibold text-sm md:text-base">Innovación Constante</p>
                </div>
              </div>
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
              Somos un equipo diverso de expertos en ingeniería, diseño, producto y estrategia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3].map((_, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-card"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mx-auto mb-4" />
                  <h3 className="text-base md:text-lg font-bold text-foreground">Miembro del Equipo</h3>
                  <p className="text-sm text-muted-foreground">Rol en Loopra</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}