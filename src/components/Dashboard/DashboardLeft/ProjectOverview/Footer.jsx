import Events from './Events';
import ProjectDeliveries from './ProjectDeliveries';

function Footer() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <ProjectDeliveries />
      </div>
      <div className="w-full xl:w-1/3">
        <Events />
      </div>
    </div>
  );
}

export default Footer;
