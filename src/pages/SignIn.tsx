
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      // Check for demo account
      if (email === 'demo@ecowaste.com' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in",
        });
        
        navigate('/dashboard');
        return;
      }
      
      // Check if user exists in localStorage
      const userProfileString = localStorage.getItem('userProfile');
      if (userProfileString) {
        const userProfile = JSON.parse(userProfileString);
        if (userProfile.email === email && userProfile.password === password) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in",
          });
          
          navigate('/dashboard');
          return;
        }
      }
      
      setError('Invalid email or password');
      setIsLoading(false);
    }, 1500);
  };

  const handleDemoSignIn = () => {
    setEmail('demo@ecowaste.com');
    setPassword('password');
    
    setTimeout(() => {
      handleSignIn({
        preventDefault: () => {}
      } as React.FormEvent);
    }, 500);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Sign In</h1>
                <p className="text-muted-foreground">
                  Welcome back! Please sign in to your account
                </p>
              </div>
              
              {error && (
                <div className="flex items-center p-4 mb-6 bg-red-50 text-red-600 rounded-lg">
                  <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="#" className="text-xs text-green-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-800 px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleDemoSignIn}
                    disabled={isLoading}
                  >
                    Use Demo Account
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link to="/signup" className="text-green-600 hover:underline font-medium">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
