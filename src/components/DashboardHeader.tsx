import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { FC } from 'react';

export type Period = 'Hoy' | '7 días' | '30 días' | '90 días';

const PERIODS: Period[] = ['Hoy', '7 días', '30 días', '90 días'];

interface DashboardHeaderProps {
  activePeriod: Period;
  onPeriodChange: (period: Period) => void;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({
  activePeriod,
  onPeriodChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Consola de Control
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Monitorea el rendimiento de tus ecosistemas en tiempo real
          </p>
        </div>
      </div>

      {/* Period selector */}
      <div className="mt-6 flex flex-wrap gap-2">
        {PERIODS.map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              period === activePeriod
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
