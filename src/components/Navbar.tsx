
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';
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
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user profile exists in localStorage
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
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
    { name: 'Create Profile', path: '/profile' },
    { name: 'Find Skills to Learn', path: '/discover' },
    { name: 'Set Up Skill Exchange', path: '/exchange' },
  ];

  // Add "My Profile" if user is logged in
  if (isLoggedIn) {
    navigationItems.push({ name: 'My Profile', path: '/profile' });
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

    // Check if user profile exists with this email
    const userProfileString = localStorage.getItem('userProfile');
    if (userProfileString) {
      const userProfile = JSON.parse(userProfileString);
      if (userProfile.email === email) {
        // In a real app, we would validate the password here
        setIsLoggedIn(true);
        toast({
          title: "Sign in successful",
          description: "Welcome back to the community!",
        });
        return;
      }
    }

    // If no matching profile or credentials incorrect
    toast({
      title: "Sign in failed",
      description: "Email or password is incorrect",
      variant: "destructive"
    });
  };

  const handleSignInWithGoogle = () => {
    // Simulate Google sign-in
    toast({
      title: "Google sign-in",
      description: "This would connect to Google in a real app",
    });
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
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
            {isLoggedIn ? (
              <Button variant="default" className="ml-2" onClick={handleSignOut}>
                Sign Out
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="ml-2">
                    <LogIn size={16} className="mr-1.5" />
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogDescription>
                      Sign in to your account to access your profile and manage skill exchanges
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
                    <Button onClick={handleSignIn} className="w-full">Sign In</Button>
                    <Button onClick={handleSignInWithGoogle} variant="outline" className="w-full">
                      Sign in with Google
                    </Button>
                    <div className="text-center text-sm text-muted-foreground mt-2">
                      Don't have an account?{" "}
                      <Link to="/profile" className="text-primary hover:underline">
                        Create Profile
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
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {isLoggedIn ? (
                  <Button className="mt-2" onClick={handleSignOut}>Sign Out</Button>
                ) : (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-2">Sign In</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogDescription>
                          Sign in to your account to access your profile and manage skill exchanges
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
                        <Button onClick={handleSignIn} className="w-full">Sign In</Button>
                        <Button onClick={handleSignInWithGoogle} variant="outline" className="w-full">
                          Sign in with Google
                        </Button>
                        <div className="text-center text-sm text-muted-foreground mt-2">
                          Don't have an account?{" "}
                          <Link to="/profile" className="text-primary hover:underline">
                            Create Profile
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

export default Navbar;
