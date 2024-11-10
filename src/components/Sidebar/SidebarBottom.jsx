import { IoLogOut } from 'react-icons/io5';
import { Button } from '../ui/button';

function SidebarBottom() {
  return (
    <div className="flex items-center justify-start p-6">
      <Button size="xl" className="mr-3 text-white bg-black rounded-full">
        <IoLogOut />
      </Button>
      <p className="text-sm font-medium">Logout</p>
    </div>
  );
}

export default SidebarBottom;
