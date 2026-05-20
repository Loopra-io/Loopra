import { LucideIcon } from 'lucide-react';

export interface Ecosystem {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status: 'Disponible' | 'Próximamente' | 'En Desarrollo';
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: boolean;
  icon?: LucideIcon;
}

export type Theme = 'light' | 'dark';

export interface NavbarState {
  isMobileMenuOpen: boolean;
  isEcosystemDropdownOpen: boolean;
}
