import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/context/theme-context';
import { Link } from 'react-router-dom';
import { useUser } from '@/features/authentication/useUser';
import { useLogout } from '@/features/authentication/useLogout';
import { Loader2 } from 'lucide-react';

export default function UserMenu() {
  const { setTheme } = useTheme();
  const { isAuthenticated, data } = useUser();

  const { isLoading, logout } = useLogout();

  if (!isAuthenticated) return null;
  const src = data?.user_metadata?.avatarUrl ?? './default-user.jpg';

  return (
    <Menubar className="bg-transparent w-max border-0 cursor-pointer">
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex items-center gap-1">
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm">{data?.user_metadata?.fullName}</div>
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link to="/profile">My Profile</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Change Theme</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => setTheme('light')}>Light</MenubarItem>
              <MenubarItem onClick={() => setTheme('dark')}>Dark</MenubarItem>
              <MenubarItem onClick={() => setTheme('system')}>
                System
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem onClick={() => logout()} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />{' '}
                <span>Logging out...</span>
              </>
            ) : (
              'Logout'
            )}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
