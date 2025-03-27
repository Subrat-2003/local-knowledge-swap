
import { useEffect, useState } from 'react';
import { 
  Route, 
  Truck, 
  MapPin, 
  Timer, 
  Fuel, 
  BarChart3, 
  LayoutGrid, 
  Trash2, 
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Recycle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const RouteOptimization = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [routeGenerated, setRouteGenerated] = useState(false);
  const [fuelSaved, setFuelSaved] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const { toast } = useToast();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data for high-density areas
  const highDensityAreas = [
    { id: 1, name: "Central Business District", fillLevel: 87, binCount: 24, priority: "High" },
    { id: 2, name: "Northern Residential Zone", fillLevel: 76, binCount: 18, priority: "Medium" },
    { id: 3, name: "Eastern Industrial Park", fillLevel: 92, binCount: 15, priority: "High" },
    { id: 4, name: "Western Marketplace", fillLevel: 65, binCount: 12, priority: "Medium" },
    { id: 5, name: "Southern Hospital Area", fillLevel: 81, binCount: 9, priority: "High" }
  ];

  // Sample route stops
  const routeStops = [
    { id: 1, location: "Central Business District - Bin Cluster 3", time: "08:00 AM", status: "Completed" },
    { id: 2, location: "Eastern Industrial Park - Main Gate", time: "09:15 AM", status: "Completed" },
    { id: 3, location: "Eastern Industrial Park - Sector B", time: "10:30 AM", status: "In Progress" },
    { id: 4, location: "Southern Hospital Area - North Entrance", time: "11:45 AM", status: "Scheduled" },
    { id: 5, location: "Western Marketplace - Food Court", time: "01:30 PM", status: "Scheduled" },
    { id: 6, location: "Northern Residential Zone - Block 7", time: "02:45 PM", status: "Scheduled" }
  ];

  // Generate optimized route
  const generateRoute = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setFuelSaved(Math.floor(Math.random() * 11) + 20); // Random between 20-30
      setTimeSaved(Math.floor(Math.random() * 16) + 25); // Random between 25-40
      setRouteGenerated(true);
      setIsLoading(false);
      
      toast({
        title: "Route Optimized",
        description: "New collection route has been generated and sent to drivers.",
      });
    }, 2000);
  };

  // Reset route
  const resetRoute = () => {
    setRouteGenerated(false);
    setFuelSaved(0);
    setTimeSaved(0);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-green-50 dark:bg-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Route Optimization</h1>
            <p className="text-xl text-muted-foreground">
              Maximize efficiency and minimize environmental impact with our AI-powered waste collection route planning.
            </p>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Smart Bins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground mt-1">12 added this month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Collection Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <div className="mt-2">
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Fill Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <div className="mt-2">
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Bins Requiring Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-red-500 mt-1">3 critical ({'>'}90% full)</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Route Generator */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Route Optimization</CardTitle>
                <CardDescription>
                  Generate optimal collection routes based on bin fill levels and priority areas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {routeGenerated ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="flex items-center text-green-600 mb-2">
                          <Fuel className="mr-2" size={20} />
                          <span className="font-bold">Fuel Savings</span>
                        </div>
                        <div className="text-3xl font-bold">{fuelSaved}%</div>
                        <p className="text-sm text-muted-foreground">Compared to previous routes</p>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-center text-blue-600 mb-2">
                          <Timer className="mr-2" size={20} />
                          <span className="font-bold">Time Savings</span>
                        </div>
                        <div className="text-3xl font-bold">{timeSaved}%</div>
                        <p className="text-sm text-muted-foreground">Reduction in collection time</p>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="font-medium px-4 py-3 bg-secondary/30">Today's Optimized Route</div>
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {routeStops.map((stop) => (
                          <div key={stop.id} className="flex items-center justify-between p-4">
                            <div className="flex items-start">
                              <div className={`mt-1 mr-3 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 
                                ${stop.status === "Completed" 
                                  ? "bg-green-100 dark:bg-green-800" 
                                  : stop.status === "In Progress" 
                                    ? "bg-amber-100 dark:bg-amber-800" 
                                    : "bg-blue-100 dark:bg-blue-800"}`}>
                                {stop.status === "Completed" ? (
                                  <Recycle size={12} className="text-green-600 dark:text-green-400" />
                                ) : stop.status === "In Progress" ? (
                                  <Truck size={12} className="text-amber-600 dark:text-amber-400" />
                                ) : (
                                  <Timer size={12} className="text-blue-600 dark:text-blue-400" />
                                )}
                              </div>
                              <div>
                                <div className="font-medium">{stop.location}</div>
                                <div className="text-sm text-muted-foreground">{stop.time}</div>
                              </div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full 
                              ${stop.status === "Completed" 
                                ? "bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400" 
                                : stop.status === "In Progress" 
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-400" 
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400"}`}>
                              {stop.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mx-auto mb-4">
                      <Route className="text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">No Active Route</h3>
                    <p className="text-muted-foreground mb-6">
                      Generate an optimized collection route based on current bin fill levels and priority areas.
                    </p>
                    <Button 
                      onClick={generateRoute} 
                      className="bg-green-600 hover:bg-green-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Generating Route..." : "Generate Optimized Route"}
                    </Button>
                  </div>
                )}
              </CardContent>
              {routeGenerated && (
                <CardFooter className="justify-between">
                  <Button variant="outline" onClick={resetRoute}>
                    Reset Route
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Send to Drivers
                  </Button>
                </CardFooter>
              )}
            </Card>
            
            {/* High Density Areas */}
            <Card>
              <CardHeader>
                <CardTitle>High-Density Areas</CardTitle>
                <CardDescription>
                  Locations with highest waste generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {highDensityAreas.map((area) => (
                    <div key={area.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{area.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full 
                          ${area.priority === "High" 
                            ? "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400" 
                            : "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-400"}`}>
                          {area.priority} Priority
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>{area.binCount} bins</span>
                        <span>Avg. fill: {area.fillLevel}%</span>
                      </div>
                      <Progress value={area.fillLevel} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Areas
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Driver Interface */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Driver Interface</h2>
            <p className="text-muted-foreground">
              Intuitive mobile application for waste collection personnel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden">
                <div className="bg-green-600 text-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">EcoWaste Driver App</h3>
                    <Timer size={20} />
                  </div>
                  <p className="text-sm">Current Route: Eastern Industrial Route</p>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center">
                      <MapPin className="text-green-600 mr-2" size={18} />
                      <span className="font-medium">Eastern Industrial Park - Sector B</span>
                    </div>
                    <ChevronRight size={18} className="text-green-600" />
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="p-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Next Location</span>
                        <span className="text-sm text-green-600 font-medium">ETA: 12 min</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="text-muted-foreground mr-2" size={14} />
                        <span className="text-sm text-muted-foreground">Southern Hospital Area - North Entrance</span>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Bins to Collect</span>
                        <span className="text-sm text-green-600 font-medium">9 bins</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center">
                          <Trash2 className="text-red-500 mr-1" size={14} />
                          <span className="text-sm text-muted-foreground">2 critical ({'>'}90%)</span>
                        </div>
                        <div className="flex items-center">
                          <AlertTriangle className="text-amber-500 mr-1" size={14} />
                          <span className="text-sm text-muted-foreground">7 normal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Navigate to Next Stop
                  </Button>
                </div>
              </Card>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Real-time Navigation and Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                    <Route className="text-green-600 dark:text-green-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Turn-by-Turn Navigation</h4>
                    <p className="text-muted-foreground">Precise directions to each collection point with traffic-aware routing</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                    <LayoutGrid className="text-green-600 dark:text-green-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Bin Status Dashboard</h4>
                    <p className="text-muted-foreground">Real-time updates on fill levels and collection priorities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-green-600 dark:text-green-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Performance Metrics</h4>
                    <p className="text-muted-foreground">Track collection efficiency, time spent, and fuel consumption</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Learn More About Driver Tools
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RouteOptimization;
