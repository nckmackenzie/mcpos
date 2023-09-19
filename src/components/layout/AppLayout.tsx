import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Navbar from './Navbar';

export default function AppLayout() {
  return (
    <div className="h-dvh relative">
      <Aside />
      <main className="md:pl-72 h-full overflow-scroll">
        <Navbar />
        <div className="h-[calc(100dvh-5rem)] p-4 md:p-6 lg:px-8 lg:py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
