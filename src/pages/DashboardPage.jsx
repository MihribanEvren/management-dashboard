import Dashboard from '@/components/Dashboard/Dashboard';
import Navbar from '@/components/Navbar/Navbar';
import Separator from '@/components/SharedElements/Separator';
import Sidebar from '@/components/Sidebar/Sidebar';

function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-shrink-0 w-64 overflow-y-auto bg-softgray">
        <Sidebar />
      </div>

      <Separator orientation="vertical" className="flex-shrink-0" />

      <div className="flex flex-col flex-1">
        <div className="bg-white">
          <Navbar />
        </div>

        <main className="flex-1 px-8 py-4 bg-softgray">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
