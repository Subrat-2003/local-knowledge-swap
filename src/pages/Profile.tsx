
import { useState, useEffect } from 'react';
import { ChevronLeft, User, Calendar, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileForm from '@/components/ProfileForm';
import CoinBalance from '@/components/CoinBalance';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
            <h1 className="text-3xl font-bold">Your Profile</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <CoinBalance balance={300} />
            <Button variant="outline" size="sm">
              <Settings size={16} className="mr-1.5" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              <LogOut size={16} className="mr-1.5" />
              Sign Out
            </Button>
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
              Profile
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
              <ProfileForm />
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

export default Profile;
