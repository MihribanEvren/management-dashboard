import Separator from '../SharedElements/Separator';
import NavbarBottom from './NavbarBottom';
import NavbarTop from './NavbarTop';

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <>
      <NavbarTop toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Separator className="mt-2" />
      <NavbarBottom />
    </>
  );
}

export default Navbar;
