import DashboardLeft from './DashboardLeft/DashboardLeft';
import DashboardRight from './DashboardRight/DashboardRight';

function Dashboard() {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
}

export default Dashboard;
