import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <div className="flex items-center p-4 bg-gray-100 dark:bg-slate-900 border-b h-16">
      <Button variant="outline" size="icon" className="md:hidden">
        <MenuIcon />
      </Button>
      <div className="ml-auto flex gap-1 items-center">
        <UserMenu />
      </div>
    </div>
  );
}
