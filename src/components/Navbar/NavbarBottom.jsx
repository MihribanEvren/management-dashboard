import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { MdInsertChart } from 'react-icons/md';

function NavbarBottom() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div className="space-y-1">
        <h1 className="text-base font-semibold">Dashboard</h1>
        <p className="text-sm text-paragraphcolor">
          Hi, welcome to task management dashboard
        </p>
      </div>
      <div className="flex items-center justify-between gap-x-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="lg" className="bg-buttoncolor">
              My Project
              <HiOutlineChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Project 1</DropdownMenuItem>
            <DropdownMenuItem>Project 2</DropdownMenuItem>
            <DropdownMenuItem>Project 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" className="bg-buttoncolor" size="icon">
          <MdInsertChart className="text-gray-800" />
        </Button>
      </div>
    </div>
  );
}

export default NavbarBottom;
