
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { BrandLogo } from './navigation/BrandLogo';
import { DesktopNavigation } from './navigation/DesktopNavigation';
import { MobileMenu } from './navigation/MobileMenu';

interface EcoNavbarProps {
  extraLinks?: Array<{ href: string; label: string; }>;
}

const EcoNavbar = ({ extraLinks = [] }: EcoNavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  
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
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  // Add extra links from props
  extraLinks.forEach(link => {
    navigationItems.push({ name: link.label, path: link.href });
  });

  // Add "Dashboard" for logged-in users
  if (isLoggedIn) {
    navigationItems.push({ name: 'Dashboard', path: '/dashboard' });
  }

  const handleSignIn = () => {
    // Validate inputs
    if (!email || !password) {
      toast({
        title: "Missing information",
        description: "Please enter both email and password",
        variant: "destructive"
      });
      return;
    }

    // Simple auth for demo purposes
    if (email === "demo@ecowaste.com" && password === "password") {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      setIsLoggedIn(true);
      toast({
        title: "Sign in successful",
        description: "Welcome to EcoWaste Innovations!",
      });
      
      // Clear form fields
      setEmail('');
      setPassword('');
      
      // Redirect to dashboard
      navigate('/dashboard');
      return;
    }
    
    // Check if user profile exists
    const userProfileString = localStorage.getItem('userProfile');
    if (userProfileString) {
      const userProfile = JSON.parse(userProfileString);
      if (userProfile.email === email && userProfile.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        setIsLoggedIn(true);
        toast({
          title: "Sign in successful",
          description: "Welcome back to EcoWaste Innovations!",
        });
        
        // Clear form fields
        setEmail('');
        setPassword('');
        
        // Redirect to dashboard
        navigate('/dashboard');
        return;
      }
    }

    // If no match
    toast({
      title: "Sign in failed",
      description: "Email or password is incorrect",
      variant: "destructive"
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
    
    // Navigate to home page
    navigate('/');
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
        <BrandLogo />
        
        {!isMobile ? (
          <DesktopNavigation 
            navigationItems={navigationItems}
            isLoggedIn={isLoggedIn}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
            handleSignOut={handleSignOut}
          />
        ) : (
          <MobileMenu 
            navigationItems={navigationItems}
            isLoggedIn={isLoggedIn}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
            handleSignOut={handleSignOut}
          />
        )}
      </div>
    </header>
  );
};

export default EcoNavbar;
