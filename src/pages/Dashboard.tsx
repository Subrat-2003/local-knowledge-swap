
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Truck, BarChart3, MapPin, Recycle, Calendar, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('User');

  // Authentication check
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    
    if (loggedInStatus !== 'true') {
      navigate('/signin');
      return;
    }
    
    setIsLoggedIn(true);
    
    // Get user profile
    const userProfileString = localStorage.getItem('userProfile');
    if (userProfileString) {
      const userProfile = JSON.parse(userProfileString);
      setUserName(userProfile.name || 'User');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [navigate]);

  // Mock data for charts
  const pieData = [
    { name: 'Plastic', value: 35 },
    { name: 'Paper', value: 25 },
    { name: 'Organic', value: 20 },
    { name: 'Metal', value: 10 },
    { name: 'Glass', value: 10 },
  ];
  
  const lineData = [
    { month: 'Jan', collection: 40, recycled: 24 },
    { month: 'Feb', collection: 45, recycled: 28 },
    { month: 'Mar', collection: 55, recycled: 35 },
    { month: 'Apr', collection: 60, recycled: 40 },
    { month: 'May', collection: 65, recycled: 45 },
    { month: 'Jun', collection: 75, recycled: 55 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const upcomingCollections = [
    { id: 1, location: 'Central Park Area', date: '2023-06-15', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, location: 'Downtown District', date: '2023-06-17', time: '09:30 AM', status: 'Scheduled' },
    { id: 3, location: 'Westside Residential', date: '2023-06-20', time: '11:15 AM', status: 'Pending' }
  ];

  const recentActivity = [
    { id: 1, action: 'Waste Collection', location: 'North District', date: '2023-06-10', amount: '120kg' },
    { id: 2, action: 'Recycling Processed', location: 'South District', date: '2023-06-08', amount: '85kg' },
    { id: 3, action: 'E-waste Disposed', location: 'East District', date: '2023-06-05', amount: '30kg' },
    { id: 4, action: 'Collection Request', location: 'West District', date: '2023-06-03', amount: 'Pending' }
  ];

  if (!isLoggedIn) return null;
  
  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, {userName}</h1>
          <p className="text-muted-foreground">
            Here's an overview of your waste management activities and insights
          </p>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Waste Collected</p>
                  <h3 className="text-2xl font-bold">1,250 kg</h3>
                  <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                  <Trash2 className="text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Recycling Rate</p>
                  <h3 className="text-2xl font-bold">68.5%</h3>
                  <p className="text-xs text-green-600 mt-1">+5.2% from last month</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                  <Recycle className="text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Collection Points</p>
                  <h3 className="text-2xl font-bold">24</h3>
                  <p className="text-xs text-green-600 mt-1">+2 new points</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                  <MapPin className="text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">CO2 Reduction</p>
                  <h3 className="text-2xl font-bold">850 kg</h3>
                  <p className="text-xs text-green-600 mt-1">Saved this quarter</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                  <Truck className="text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs for different dashboard views */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Waste Composition Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Waste Composition</CardTitle>
                  <CardDescription>Breakdown of waste types collected</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Collection Trend Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Collection Trends</CardTitle>
                  <CardDescription>Six-month waste collection and recycling trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="collection" 
                          stroke="#16a34a" 
                          strokeWidth={2}
                          name="Total Collected (kg)"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="recycled" 
                          stroke="#0891b2" 
                          strokeWidth={2}
                          name="Recycled (kg)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest waste management actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start p-3 rounded-lg bg-secondary/30">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                          <Recycle className="text-green-600 dark:text-green-400 h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{activity.action}</h4>
                          <div className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground mr-1" />
                            <p className="text-xs text-muted-foreground">{activity.location}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
                            <p className="text-xs font-medium">{activity.amount}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Activity</Button>
                </CardFooter>
              </Card>
              
              {/* Upcoming Collections */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Collections</CardTitle>
                  <CardDescription>Scheduled waste collection dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingCollections.map((collection) => (
                      <div key={collection.id} className="flex items-start p-3 rounded-lg bg-secondary/30">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                          <Calendar className="text-green-600 dark:text-green-400 h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{collection.location}</h4>
                          <div className="flex items-center mt-1">
                            <p className="text-xs text-muted-foreground">
                              {collection.date} at {collection.time}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              collection.status === 'Scheduled' 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {collection.status}
                            </span>
                            <Button variant="ghost" size="sm" className="h-7 text-xs">
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Collections</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="collections">
            <Card>
              <CardHeader>
                <CardTitle>Collection Schedule</CardTitle>
                <CardDescription>View and manage your waste collection schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  Collection schedule details will be displayed here. This feature is under development.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>In-depth analysis of your waste management data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  Advanced analytics features will be displayed here. This feature is under development.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                      <Settings className="text-green-600 dark:text-green-400 h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{userName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {localStorage.getItem('userEmail')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <Button className="w-full justify-start">Edit Profile</Button>
                    <Button variant="outline" className="w-full justify-start">Notification Settings</Button>
                    <Button variant="outline" className="w-full justify-start">Privacy Settings</Button>
                    <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Dashboard;
