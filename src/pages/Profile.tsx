
import { useState, useEffect } from 'react';
import { ChevronLeft, User, Calendar, Settings, LogOut, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileForm from '@/components/ProfileForm';
import CoinBalance from '@/components/CoinBalance';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if user is logged in
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      
      // Get user profile data
      const profileData = localStorage.getItem('userProfile');
      if (profileData) {
        setUserProfile(JSON.parse(profileData));
      }
    }
  }, []);
  
  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUserProfile(null);
    
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
    
    navigate('/');
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-2"
              onClick={() => window.history.back()}
            >
              <ChevronLeft size={16} className="mr-1" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">{isLoggedIn ? 'My Profile' : 'Create Profile'}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <CoinBalance balance={300} />
            <Button variant="outline" size="sm">
              <Settings size={16} className="mr-1.5" />
              Settings
            </Button>
            {isLoggedIn && (
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={handleSignOut}>
                <LogOut size={16} className="mr-1.5" />
                Sign Out
              </Button>
            )}
          </div>
        </div>
        
        <Tabs
          defaultValue="profile"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-md mb-8">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <User size={16} className="mr-1.5" />
              {isLoggedIn ? 'My Profile' : 'Create Profile'}
            </TabsTrigger>
            <TabsTrigger value="availability" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Calendar size={16} className="mr-1.5" />
              Availability
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Calendar size={16} className="mr-1.5" />
              History
            </TabsTrigger>
          </TabsList>
          
          <div className="animate-fade-in">
            <TabsContent value="profile" className="mt-0">
              {isLoggedIn && userProfile ? (
                <div className="glass-card rounded-xl p-6 md:p-8 max-w-3xl w-full mx-auto animate-appear">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">My Profile</h2>
                    {userProfile.isVerified && (
                      <div className="flex items-center text-sm text-green-600">
                        <BadgeCheck size={16} className="mr-1.5" />
                        Verified Profile
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-8">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Basic Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-1">Full Name</p>
                          <p className="p-2.5 border rounded-md bg-secondary/20">{userProfile.name}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-1">Email</p>
                          <p className="p-2.5 border rounded-md bg-secondary/20">{userProfile.email}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-1">Location</p>
                        <p className="p-2.5 border rounded-md bg-secondary/20 flex items-center">
                          <MapPin className="text-muted-foreground h-4 w-4 mr-2" />
                          {userProfile.location}
                        </p>
                      </div>
                      
                      {userProfile.bio && (
                        <div>
                          <p className="text-sm font-medium mb-1">Bio</p>
                          <p className="p-2.5 border rounded-md bg-secondary/20">{userProfile.bio}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Skills Offered */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Skills You're Offering</h3>
                      
                      <div className="flex flex-wrap gap-2 min-h-[40px]">
                        {userProfile.offeredSkills && userProfile.offeredSkills.length > 0 ? (
                          userProfile.offeredSkills.map((skill, index) => (
                            <div 
                              key={`offered-${index}`}
                              className="py-1.5 px-3 rounded-full bg-secondary text-sm"
                            >
                              <span>{skill}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground">No skills added yet</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Skills Desired */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Skills You Want to Learn</h3>
                      
                      <div className="flex flex-wrap gap-2 min-h-[40px]">
                        {userProfile.desiredSkills && userProfile.desiredSkills.length > 0 ? (
                          userProfile.desiredSkills.map((skill, index) => (
                            <div 
                              key={`desired-${index}`}
                              className="py-1.5 px-3 rounded-full bg-primary/10 text-sm"
                            >
                              <span>{skill}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground">No learning interests added yet</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Edit Button */}
                    <div className="pt-4 border-t flex justify-end">
                      <Button onClick={() => {
                        localStorage.removeItem('isLoggedIn');
                        window.location.reload();
                      }}>
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <ProfileForm />
              )}
            </TabsContent>
            
            <TabsContent value="availability" className="mt-0">
              <div className="glass-card rounded-xl p-6 md:p-8 max-w-3xl w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Your Availability</h2>
                <p className="text-muted-foreground mb-6">
                  Set your weekly availability to let others know when you can offer skill exchange sessions.
                </p>
                
                <div className="bg-card border rounded-lg p-6 text-center">
                  <Calendar size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Weekly Calendar</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The calendar feature will allow you to select your available time slots
                    throughout the week for skill exchange sessions.
                  </p>
                  <Button>Set Your Availability</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-0">
              <div className="glass-card rounded-xl p-6 md:p-8 max-w-3xl w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Exchange History</h2>
                <p className="text-muted-foreground mb-6">
                  View your past and upcoming skill exchange sessions.
                </p>
                
                <div className="bg-card border rounded-lg p-6 text-center">
                  <Calendar size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Session History</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You don't have any past or upcoming sessions yet.
                    Start exploring skills to begin your exchange journey.
                  </p>
                  <Button>Discover Skills</Button>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

const MapPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Profile;
