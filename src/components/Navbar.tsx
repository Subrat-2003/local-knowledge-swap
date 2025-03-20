
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Search, Clock, Menu as MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import CoinBalance from './CoinBalance';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Discover', path: '/discover', icon: Search },
    { name: 'Exchange', path: '/exchange', icon: Clock },
    { name: 'Profile', path: '/profile', icon: User }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-semibold tracking-tight transition-colors"
          aria-label="Go to homepage"
        >
          <span className="text-primary">Skill</span>Share
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-secondary text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <CoinBalance />
          <Button variant="secondary" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Join Now
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-x-0 top-[72px] p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen 
          ? "opacity-100 translate-y-0 shadow-lg" 
          : "opacity-0 -translate-y-10 pointer-events-none"
      )}>
        <div className="space-y-3 pt-1 pb-3">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-secondary text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="pt-4 border-t border-border flex flex-col space-y-3">
          <CoinBalance />
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">Sign In</Button>
            <Button className="w-full">Join Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
