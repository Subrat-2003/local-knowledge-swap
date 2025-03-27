
import EcoNavbar from './EcoNavbar';

interface NavbarProps {
  extraLinks?: Array<{ href: string; label: string; }>;
}

const Navbar = () => {
  const extraLinks = [{ href: "/route-optimization", label: "Route Optimization" }];
  
  return <EcoNavbar extraLinks={extraLinks} />;
};

export default Navbar;
