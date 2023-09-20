import { useCompany } from '@/features/company/useCompany';
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
    </aside>
  );
}
