
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { AuthDialog } from './AuthDialog';

interface DesktopNavigationProps {
  navigationItems: Array<{ name: string; path: string }>;
  isLoggedIn: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSignIn: () => void;
  handleSignOut: () => void;
}

export const DesktopNavigation = ({
  navigationItems,
  isLoggedIn,
  email,
  password,
  setEmail,
  setPassword,
  handleSignIn,
  handleSignOut
}: DesktopNavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
          <AuthDialog 
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
          />
        </Dialog>
      )}
    </nav>
  );
};
