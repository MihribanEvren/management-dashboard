import banner from '../../../../assets/banner.svg';

function Banner() {
  return (
    <div className="relative flex items-center justify-between w-full h-56 bg-gradient-to-r to-linearblue from-linearsomon rounded-2xl">
      <div className="w-1/3">
        <img
          src={banner}
          alt="Girl on Calender Image"
          className="absolute left-0 -top-6 rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-start justify-end w-2/3 ml-auto space-y-2 text-left">
        <p className="text-sm font-normal">Hi, Vanshika Pandey</p>
        <h1 className="text-3xl font-semibold">Welcome to Management</h1>
        <p className="text-xs font-normal">
          Project activity will be updated here. Click on the name section to
          set your configuration.
        </p>
      </div>
    </div>
  );
}

export default Banner;
