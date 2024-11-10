import Banner from './Banner/Banner';
import Footer from './ProjectOverview/Footer';
import Statistics from './Statistics/Statistics';

function DashboardLeft() {
  return (
    <div className="flex flex-col items-center justify-start h-full space-y-4 bg-pink-100 basis-2/3">
      {/* banner */}
      <Banner />

      {/* statictics */}
      <Statistics />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default DashboardLeft;
