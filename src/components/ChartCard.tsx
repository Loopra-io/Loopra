import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  delay?: number;
  fullWidth?: boolean;
  className?: string; // Muy útil para sobreescribir estilos desde fuera
}

const ChartCard: FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  delay = 0,
  fullWidth = false,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "rounded-2xl border border-border bg-card p-6",
        "hover:border-primary/30 transition-all duration-300 hover:shadow-lg",
        fullWidth ? 'col-span-full' : '',
        className
      )}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Se añadió h-72 o min-h para que el gráfico tenga espacio donde renderizarse */}
      <div className="w-full h-72"> 
        {children}
      </div>
    </motion.div>
  );
};

export default ChartCard;
