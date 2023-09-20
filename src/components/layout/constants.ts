import {
  BoxesIcon,
  CalculatorIcon,
  ClipboardListIcon,
  GaugeCircleIcon,
  MessagesSquareIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  User2Icon,
  Users2Icon,
} from 'lucide-react';

export const NAVITEMS = [
  {
    label: 'Dashboard',
    icon: GaugeCircleIcon,
    to: '/',
  },
  {
    label: 'Products',
    icon: ShoppingBagIcon,
    to: '/products',
  },
  {
    label: 'Customers',
    icon: Users2Icon,
    to: '/customers',
  },
  {
    label: 'Inventory',
    icon: BoxesIcon,
    to: '/inventory',
  },
  {
    label: 'Orders',
    icon: ShoppingCartIcon,
    to: '/orders',
  },
  {
    label: 'Vendors',
    icon: User2Icon,
    to: '/vendors',
  },
  {
    label: 'Invoices',
    icon: ClipboardListIcon,
    to: '/invoices',
  },
  {
    label: 'Expenses',
    icon: CalculatorIcon,
    to: '/expenses',
  },
  {
    label: 'Messages',
    icon: MessagesSquareIcon,
    to: '/messages',
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
    to: '/settings',
  },
];
