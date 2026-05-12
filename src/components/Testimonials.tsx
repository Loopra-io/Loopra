import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendez',
    role: 'CEO, EdTech Innovations',
    content: 'Loopra nos ayudó a lanzar Lúmina en tiempo récord. Su equipo es profesional y sus ecosistemas son robustos.',
    avatar: 'CM',
    rating: 5,
  },
  {
    name: 'María González',
    role: 'CTO, Global Solutions',
    content: 'La plataforma de Loopra es escalable, segura y fácil de integrar. Excelente soporte técnico.',
    avatar: 'MG',
    rating: 5,
  },
  {
    name: 'Juan López',
    role: 'Product Manager, Tech Ventures',
    content: 'Trabajar con Loopra fue transformador. Sus ecosistemas han impactado positivamente a millones de usuarios.',
    avatar: 'JL',
    rating: 5,
  },
  {
    name: 'Ana Rodríguez',
    role: 'Founder, Digital Academy',
    content: 'Loopra es el partner perfecto para empresas que quieren innovar. Recomendamos sus servicios ampliamente.',
    avatar: 'AR',
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas líderes confían en Loopra para desarrollar ecosistemas de software innovadores.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
