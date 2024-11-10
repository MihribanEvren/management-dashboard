import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

function Dashboard() {
  return (
    <div className="flex items-center justify-center w-full h-full py-4 space-x-4">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
}

export default Dashboard;
