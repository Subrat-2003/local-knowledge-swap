
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Password strength checker
  const getPasswordStrength = () => {
    if (!password) return 0;
    
    let score = 0;
    
    // Length check
    if (password.length >= 8) score += 1;
    
    // Uppercase, lowercase, number, and special character checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    return score;
  };

  const passwordStrength = getPasswordStrength();
  
  const getStrengthText = () => {
    if (passwordStrength <= 1) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };
  
  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (passwordStrength < 3) {
      setError('Please use a stronger password');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Check if email already exists
      const userProfileString = localStorage.getItem('userProfile');
      if (userProfileString) {
        const userProfile = JSON.parse(userProfileString);
        if (userProfile.email === email) {
          setError('An account with this email already exists');
          setIsLoading(false);
          return;
        }
      }
      
      // Save user profile
      const userProfile = {
        name,
        email,
        password, // Note: In a real app, you'd never store plain text passwords
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      toast({
        title: "Account created!",
        description: "You have successfully signed up",
      });
      
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
                <p className="text-muted-foreground">
                  Join EcoWaste Innovations to access exclusive features
                </p>
              </div>
              
              {error && (
                <div className="flex items-center p-4 mb-6 bg-red-50 text-red-600 rounded-lg">
                  <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
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
                  <Label htmlFor="password">Password</Label>
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
                  
                  {password && (
                    <div className="mt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Password strength: {getStrengthText()}</span>
                        <span className="text-xs text-muted-foreground">{passwordStrength}/5</span>
                      </div>
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getStrengthColor()}`} 
                          style={{ width: `${passwordStrength * 20}%` }}
                        ></div>
                      </div>
                      
                      <ul className="mt-2 space-y-1">
                        <li className="text-xs flex items-center">
                          <span className={`w-4 h-4 inline-flex items-center justify-center rounded-full mr-2 ${password.length >= 8 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {password.length >= 8 ? <Check size={12} /> : ''}
                          </span>
                          At least 8 characters
                        </li>
                        <li className="text-xs flex items-center">
                          <span className={`w-4 h-4 inline-flex items-center justify-center rounded-full mr-2 ${/[A-Z]/.test(password) ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {/[A-Z]/.test(password) ? <Check size={12} /> : ''}
                          </span>
                          Uppercase letter
                        </li>
                        <li className="text-xs flex items-center">
                          <span className={`w-4 h-4 inline-flex items-center justify-center rounded-full mr-2 ${/[0-9]/.test(password) ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {/[0-9]/.test(password) ? <Check size={12} /> : ''}
                          </span>
                          Number
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {confirmPassword && password !== confirmPassword && (
                    <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-gray-300 text-green-600 focus:ring-green-600"
                    required
                  />
                  <Label htmlFor="terms" className="text-xs">
                    I agree to the{" "}
                    <Link to="#" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 mt-4" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Sign Up
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-8 text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link to="/signin" className="text-green-600 hover:underline font-medium">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
