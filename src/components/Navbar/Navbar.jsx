import Separator from '../SharedElements/Separator';
import NavbarBottom from './NavbarBottom';
import NavbarTop from './NavbarTop';

function Navbar() {
  return (
    <nav>
      <NavbarTop />
      <Separator className="mt-2" />
      <NavbarBottom />
    </nav>
  );
}

export default Navbar;
