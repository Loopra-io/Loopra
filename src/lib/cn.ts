import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to combine classNames with clsx and tailwind-merge
 * This allows for conditional classes without conflicts
 *
 * @example
 * cn('px-2 py-1', isActive && 'bg-blue-500', 'px-4') // px-4 wins over px-2
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

