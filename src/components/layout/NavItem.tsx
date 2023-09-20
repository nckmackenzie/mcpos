import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type NavItemProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export default function NavItem({ label, href, icon: Icon }: NavItemProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <li className="w-full aspect-square border rounded">
      <Link
        to={href}
        className={cn(
          'w-full aspect-square p-4 flex flex-col items-center gap-4 transition-colors hover:bg-primary/10 hover:text-blue-300',
          pathname === href && 'bg-primary/10 text-blue-300'
        )}
      >
        <Icon className="w-8 h-8" />
        <p
          className={cn(
            'font-normal hover:font-medium transition-all hover:text-blue-300',
            pathname === href && 'font-medium text-blue-300'
          )}
        >
          {label}
        </p>
      </Link>
    </li>
  );
}
