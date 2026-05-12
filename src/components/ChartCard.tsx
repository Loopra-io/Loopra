import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  delay?: number;
  fullWidth?: boolean;
}

const ChartCard: FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  delay = 0,
  fullWidth = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${
        fullWidth ? 'col-span-full' : ''
      }`}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      <div className="w-full overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default ChartCard;
