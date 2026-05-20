import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Carreras() {
  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Bogotá, Colombia',
      salary: '$80K - $120K',
      type: 'Tiempo Completo',
    },
    {
      title: 'Product Designer',
      location: 'Remoto',
      salary: '$60K - $90K',
      type: 'Tiempo Completo',
    },
    {
      title: 'DevOps Engineer',
      location: 'Bogotá, Colombia',
      salary: '$70K - $110K',
      type: 'Tiempo Completo',
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
            Carreras en Loopra
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Únete a nuestro equipo y ayuda a construir el futuro del software.
          </p>

          <div className="space-y-6 mb-12">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" strokeWidth={1.5} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" strokeWidth={1.5} />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                    Aplicar
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              ¿No ves el puesto que buscas?
            </h2>
            <p className="text-muted-foreground mb-6">
              Envíanos tu CV y cuéntanos sobre ti. Nos encantaría conocer talento en cualquier área.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
              Enviar CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
