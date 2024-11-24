import Dashboard from '@/components/Dashboard/Dashboard';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useState } from 'react';

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex overflow-x-clip">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          bg-softgray border-r border-gray-200
          transition-transform duration-300 ease-in-out
          z-30
        `}
      >
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      <div className="flex flex-col flex-1 w-full md:pl-64">
        <header className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </header>

        <main className="flex-1 p-4 overflow-y-auto lg:p-8 bg-softgray">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
