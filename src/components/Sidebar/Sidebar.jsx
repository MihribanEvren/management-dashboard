import Separator from '../SharedElements/Separator';
import SidebarBottom from './SidebarBottom';
import SidebarTop from './SidebarTop';

function Sidebar() {
  return (
    <div className="flex flex-col">
      <SidebarTop />
      <Separator className="mt-2" />
      <SidebarBottom />
    </div>
  );
}

export default Sidebar;
