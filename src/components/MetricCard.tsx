import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { FC } from 'react';
import { cn } from '@/lib/cn';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  backgroundColor?: string;
  iconColor?: string;
  delay?: number;
}

const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend = 'neutral',
  trendValue,
  backgroundColor = 'bg-primary/10',
  iconColor = 'text-primary',
  delay = 0,
}) => {
  const trendColors = {
    up: 'text-green-600 dark:text-green-400',
    down: 'text-red-600 dark:text-red-400',
    neutral: 'text-muted-foreground',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {value}
            </h3>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* Icon */}
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
            backgroundColor,
            'group-hover:scale-110 transition-transform duration-300'
          )}>
            <Icon className={cn('w-6 h-6', iconColor)} strokeWidth={1.5} />
          </div>
        </div>

        {/* Trend indicator */}
        {trendValue && (
          <div className="flex items-center gap-1">
            <span className={cn('text-sm font-semibold', trendColors[trend])}>
              {trend === 'up' && '↑'}
              {trend === 'down' && '↓'}
              {trend === 'neutral' && '→'}
              {' '}
              {trendValue}
            </span>
            <span className="text-xs text-muted-foreground">vs. mes anterior</span>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300" />
    </motion.div>
  );
};

export default MetricCard;
