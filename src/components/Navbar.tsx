
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Create Profile', path: '/profile' },
    { name: 'Find Skills to Learn', path: '/discover' },
    { name: 'Set Up Skill Exchange', path: '/exchange' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      } transition-all duration-200`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        {!isMobile ? (
          <nav className="flex items-center gap-1 md:gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" className="ml-2">
              Sign In
            </Button>
          </nav>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={24} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-3 text-base rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-2">Sign In</Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
