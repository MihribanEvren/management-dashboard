import Banner from './Banner/Banner';
import Footer from './ProjectOverview/Footer';
import Statistics from './Statistics/Statistics';

function DashboardLeft() {
  return (
    <div className="flex flex-col gap-4 lg:w-2/3">
      <Banner />

      <Statistics />

      <Footer />
    </div>
  );
}

export default DashboardLeft;
