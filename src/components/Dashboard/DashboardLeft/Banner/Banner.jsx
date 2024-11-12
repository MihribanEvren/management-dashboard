import banner from '@/assets/banner.svg';

function Banner() {
  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-r from-rose-100 to-blue-100">
      <div className="container mx-auto">
        <div className="flex flex-col items-center px-8 md:gap-8 md:flex-row">
          <div className="relative w-full h-56 md:1/2 lg:w-1/3">
            <img
              src={banner}
              alt="Girl on Calender Image"
              className="absolute h-auto transform -translate-x-1/2 -top-4 left-1/2 md:left-0 md:translate-x-0"
            />
          </div>

          <div className="flex-1 py-2 space-y-2 text-center md:space-y-3 md:text-left">
            <span className="text-sm text-gray-600">Hi, Vanshika Pandey</span>

            <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Welcome to Management
            </h1>

            <p className="max-w-md text-sm text-gray-600">
              Project activity will be updated here. Click on the name section
              to set your configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
