import Dashboard from '@/components/Dashboard/Dashboard';
import Navbar from '@/components/Navbar/Navbar';
import Separator from '@/components/SharedElements/Separator';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useState } from 'react';

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`
          fixed md:relative
          ${isSidebarOpen ? 'block' : 'hidden'} md:block
          w-64 h-full z-50
          bg-softgray
          transition-all duration-300 ease-in-out
        `}
      >
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <Separator orientation="vertical" className="flex-shrink-0" />

      <div className="flex flex-col flex-1 w-full min-w-0">
        <div className="w-full bg-white">
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>

        <main className="flex-1 px-4 py-4 lg:px-8 bg-softgray">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
