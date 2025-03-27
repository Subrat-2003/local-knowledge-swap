
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Menu } from 'lucide-react';
import { AuthDialog } from './AuthDialog';

interface MobileMenuProps {
  navigationItems: Array<{ name: string; path: string }>;
  isLoggedIn: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSignIn: () => void;
  handleSignOut: () => void;
}

export const MobileMenu = ({
  navigationItems,
  isLoggedIn,
  email,
  password,
  setEmail,
  setPassword,
  handleSignIn,
  handleSignOut
}: MobileMenuProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
              <AuthDialog 
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSignIn={handleSignIn}
                isMobile={true}
              />
            </Dialog>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
