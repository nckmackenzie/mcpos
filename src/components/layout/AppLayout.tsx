import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Navbar from './Navbar';

export default function AppLayout() {
  return (
    <div className="h-dvh relative">
      <Aside />
      <main className="md:pl-72">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
