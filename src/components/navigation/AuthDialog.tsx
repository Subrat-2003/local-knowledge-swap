
import { Link } from 'react-router-dom';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface AuthDialogProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSignIn: () => void;
  isMobile?: boolean;
}

export const AuthDialog = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignIn,
  isMobile = false
}: AuthDialogProps) => {
  const idSuffix = isMobile ? '-mobile' : '';
  
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>
          Sign in to your EcoWaste account to access your dashboard and services
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor={`email${idSuffix}`}>Email</Label>
          <Input 
            id={`email${idSuffix}`} 
            type="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`password${idSuffix}`}>Password</Label>
          <Input 
            id={`password${idSuffix}`} 
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
  );
};
