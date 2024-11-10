import banner from '../../assets/banner.svg';

function DashboardLeft() {
  return (
    <div className="flex flex-col items-center justify-start h-full bg-pink-100 basis-2/3">
      {/* banner */}
      <div className="relative flex items-center justify-start w-full h-56 bg-gradient-to-r to-linearblue from-linearsomon rounded-3xl">
        <div>
          <img
            src={banner}
            alt="Girl on Calender Image"
            className="absolute left-0 -top-6 rounded-3xl"
          />
        </div>
        <div></div>
      </div>

      {/* statictics */}
      <div></div>

      {/* footer */}
      <div></div>
    </div>
  );
}

export default DashboardLeft;
