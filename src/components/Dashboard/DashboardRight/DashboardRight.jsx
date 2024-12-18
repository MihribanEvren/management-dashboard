import Activity from './Activity/Activity';
import CustomCalendar from './Calendar/CustomCalendar';

function DashboardRight() {
  return (
    <div className="flex flex-col gap-4 lg:w-1/3">
      <CustomCalendar />
      <Activity />
    </div>
  );
}

export default DashboardRight;
