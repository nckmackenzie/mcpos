import { useCompany } from '@/features/company/useCompany';
import NavItem from './NavItem';
import { NAVITEMS } from './constants';
// import { useQueryClient } from '@tanstack/react-query';

export default function Aside() {
  const { company } = useCompany();
  return (
    <aside>
      <header className="h-20 border-b flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl font-bold">McPos</h1>
        <p className="text-muted-foreground">
          {company?.companyName || 'Company Name'}
        </p>
      </header>
      <nav className="p-4">
        <ul className="grid grid-cols-2 gap-4">
          {NAVITEMS.map(item => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.to}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
