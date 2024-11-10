import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HiBell } from 'react-icons/hi';
import Search from './Search';
import NotificationButton from './NotificationButton';

function NavbarTop() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <Search />
      <div className="flex items-center justify-between gap-x-6">
        <NotificationButton icon={HiBell} notificationCount={3} />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default NavbarTop;
