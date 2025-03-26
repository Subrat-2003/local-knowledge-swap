
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, User, Leaf, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EcoNavbar = () => {
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

  // Add "Dashboard" for logged-in users
  if (isLoggedIn) {
    navigationItems.push({ name: 'Dashboard', path: '/dashboard' });
  }
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <Recycle size={20} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-400 rounded-full animate-pulse" />
            </div>
            <div className="ml-2 font-bold text-lg">
              <span className="text-green-600">Eco</span>
              <span className="text-muted-foreground">Waste</span>
            </div>
          </div>
        </Link>
        
        {!isMobile ? (
          <nav className="flex items-center gap-1 md:gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-green-600 text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <Button variant="outline" className="ml-2" onClick={handleSignOut}>
                <LogOut size={16} className="mr-1.5" />
                Sign Out
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="ml-2 bg-green-600 hover:bg-green-700">
                    <LogIn size={16} className="mr-1.5" />
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogDescription>
                      Sign in to your EcoWaste account to access your dashboard and services
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex flex-col gap-2">
                    <Button onClick={handleSignIn} className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
                    <div className="text-center text-sm text-muted-foreground mt-2">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-green-600 hover:underline">
                        Create Account
                      </Link>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
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
                        ? 'bg-green-600 text-primary-foreground'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {isLoggedIn ? (
                  <Button className="mt-2 bg-green-600 hover:bg-green-700" onClick={handleSignOut}>
                    <LogOut size={16} className="mr-1.5" />
                    Sign Out
                  </Button>
                ) : (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700">
                        <LogIn size={16} className="mr-1.5" />
                        Sign In
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogDescription>
                          Sign in to your EcoWaste account to access your dashboard and services
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email-mobile">Email</Label>
                          <Input 
                            id="email-mobile" 
                            type="email" 
                            placeholder="your@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="password-mobile">Password</Label>
                          <Input 
                            id="password-mobile" 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter className="flex flex-col gap-2">
                        <Button onClick={handleSignIn} className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
                        <div className="text-center text-sm text-muted-foreground mt-2">
                          Don't have an account?{" "}
                          <Link to="/signup" className="text-green-600 hover:underline">
                            Create Account
                          </Link>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default EcoNavbar;
