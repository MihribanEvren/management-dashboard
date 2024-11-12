import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HiBell } from 'react-icons/hi';
import { FiMenu, FiX } from 'react-icons/fi';

import Search from './Search';
import NotificationButton from './NotificationButton';

function NavbarTop({ toggleSidebar, isSidebarOpen }) {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <Search />
      <div className="flex items-center justify-between gap-x-6">
        <NotificationButton icon={HiBell} notificationCount={3} />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
