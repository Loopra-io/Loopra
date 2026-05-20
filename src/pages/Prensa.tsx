import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

export default function Prensa() {
  const articles = [
    {
      title: 'Loopra Lanza Lúmina: Revolucionando la Educación Digital',
      date: '15 de Mayo, 2026',
      author: 'Equipo de Loopra',
      excerpt: 'Presentamos Lúmina, nuestro nuevo ecosistema educativo que conecta a millones de estudiantes e instituciones alrededor del mundo.',
    },
    {
      title: 'Loopra Recibe Inversión de $10M para Expandir Operaciones',
      date: '10 de Mayo, 2026',
      author: 'Prensa',
      excerpt: 'Anunciamos una ronda de financiamiento que nos permitirá acelerar el desarrollo de nuestros ecosistemas y expandir globalmente.',
    },
    {
      title: 'Kener Alejandro Botina Bravo Habla sobre el Futuro del Software',
      date: '5 de Mayo, 2026',
      author: 'TechCrunch',
      excerpt: 'En una entrevista exclusiva, nuestro fundador comparte su visión sobre cómo los ecosistemas de software transformarán industrias.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prensa
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Últimas noticias y comunicados de prensa de Loopra.
          </p>

          <div className="space-y-8">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" strokeWidth={1.5} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" strokeWidth={1.5} />
                    {article.author}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-primary hover:text-primary/80 font-medium"
                >
                  Leer más →
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 mt-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Kit de Prensa
            </h2>
            <p className="text-muted-foreground mb-6">
              Descarga nuestro kit de prensa con logos, imágenes y información sobre Loopra.
            </p>
            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium"
            >
              Descargar Kit de Prensa
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
