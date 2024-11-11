import Activity from './Activity/Activity';
import CustomCalendar from './Calendar/CustomCalendar';

function DashboardRight() {
  return (
    <div className="w-full h-full basis-1/3">
      <CustomCalendar />
      <Activity />
    </div>
  );
}

export default DashboardRight;
