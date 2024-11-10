import Events from './Events';
import ProjectDeliveries from './ProjectDeliveries';

function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-auto space-x-4">
      <ProjectDeliveries />
      <Events />
    </div>
  );
}

export default Footer;
