
import { useEffect } from 'react';
import { CheckCircle, Zap, BarChart3, Shield, Truck, Factory, Recycle, Cpu, Droplet, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Products = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smartBinFeatures = [
    { icon: Cpu, title: "IoT Integration", description: "Advanced sensors to monitor fill levels and waste composition" },
    { icon: Recycle, title: "Triple Segregation", description: "Separate compartments for dry, wet, and electronic waste" },
    { icon: Shield, title: "Secure Disposal", description: "Tamper-proof design with authorized access protocols" },
    { icon: Zap, title: "Solar Powered", description: "Integrated solar panels for sustainable operation" },
    { icon: BarChart3, title: "Real-time Analytics", description: "Continuous data transmission for monitoring and analysis" },
    { icon: Truck, title: "Collection Optimization", description: "Automated alerts for efficient pickup scheduling" }
  ];

  const dustbinSpecs = [
    { attribute: "Dimensions", value: "120cm × 80cm × 160cm" },
    { attribute: "Capacity", value: "300L (100L per compartment)" },
    { attribute: "Power Source", value: "Solar panel with battery backup" },
    { attribute: "Connectivity", value: "4G/LTE, Wi-Fi, Bluetooth" },
    { attribute: "Sensors", value: "Fill-level, weight, object recognition" },
    { attribute: "Materials", value: "Recycled plastic, steel reinforcement" },
    { attribute: "Weather Resistance", value: "IP65 rating" },
    { attribute: "User Interface", value: "LED display, mobile app integration" },
    { attribute: "Segregation Method", value: "AI-powered automatic + manual override" },
    { attribute: "Security", value: "Lock system, tamper alerts" }
  ];

  const wasteSectors = [
    { icon: Droplet, title: "Wet Waste", description: "Biodegradable materials including food waste, garden waste, and other compostable items.", color: "green" },
    { icon: Recycle, title: "Dry Waste", description: "Non-biodegradable materials like plastic, paper, glass, metal, and textiles for recycling.", color: "amber" },
    { icon: Laptop, title: "E-Waste", description: "Electronic waste including batteries, small gadgets, and other electronic components for safe disposal.", color: "red" }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-green-50 dark:bg-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Innovative Solutions</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our cutting-edge products and services designed to revolutionize waste management through technology.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Request a Demo
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Dustbin" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Dustbin Showcase */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Innovative Hybrid Smart Dustbin</h2>
            <p className="text-muted-foreground">
              Our flagship product featuring three-way automatic waste segregation technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">Three-Way Segregation System</h3>
              
              <div className="space-y-6">
                {wasteSectors.map((sector, index) => (
                  <div key={index} className={`p-4 rounded-lg border border-${sector.color}-200 bg-${sector.color}-50 dark:bg-${sector.color}-900/20 dark:border-${sector.color}-800`}>
                    <div className="flex items-start">
                      <div className={`mt-1 mr-4 w-8 h-8 rounded-full bg-${sector.color}-100 dark:bg-${sector.color}-800 flex items-center justify-center flex-shrink-0`}>
                        <sector.icon className={`text-${sector.color}-600 dark:text-${sector.color}-400`} size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{sector.title}</h4>
                        <p className="text-sm text-muted-foreground">{sector.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">View Technical Specifications</Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585142938462-65de7e711cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Smart Dustbin with Segregation" 
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-green-600 text-xs px-2 py-1 rounded-full">AI-Powered Segregation</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Attribute</TableHead>
                  <TableHead>Specification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dustbinSpecs.map((spec, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{spec.attribute}</TableCell>
                    <TableCell>{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="dustbins" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dustbins">Smart Dustbins</TabsTrigger>
              <TabsTrigger value="vehicles">Collection Vehicles</TabsTrigger>
              <TabsTrigger value="software">Management Software</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dustbins" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Dustbins</CardTitle>
                  <CardDescription>
                    IoT-enabled waste bins with automatic segregation capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {smartBinFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="text-green-600 dark:text-green-400" size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Request Pricing</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="vehicles" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Collection Vehicles</CardTitle>
                  <CardDescription>
                    Specialized vehicles with automatic loading and segregation capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1620574387735-3624a7e30d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      alt="Collection Vehicle" 
                      className="rounded-lg w-full md:w-1/2 h-auto"
                    />
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                        <p>Equipped with special clip mechanism for automatic dustbin lifting</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                        <p>Separate compartments for maintaining waste segregation</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                        <p>Optimized route planning based on dustbin fill levels</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                        <p>Fuel-efficient design to minimize carbon footprint</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                        <p>Real-time communication with central management system</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Request Information</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="software" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Waste Management Software</CardTitle>
                  <CardDescription>
                    Comprehensive platform for monitoring, analysis, and optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Management Software" 
                      className="rounded-lg w-full h-auto mb-6"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h3 className="font-medium mb-2">Real-time Monitoring</h3>
                        <p className="text-sm text-muted-foreground">
                          Track fill levels, collection status, and system performance from anywhere.
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h3 className="font-medium mb-2">Data Analytics</h3>
                        <p className="text-sm text-muted-foreground">
                          Powerful insights into waste patterns, resource recovery, and system efficiency.
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h3 className="font-medium mb-2">Route Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          AI-driven algorithms to minimize fuel consumption and collection time.
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h3 className="font-medium mb-2">Integration Capabilities</h3>
                        <p className="text-sm text-muted-foreground">
                          Seamless connection with existing city management and factory systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Schedule Demo</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Flexible Solutions for Every Need</h2>
            <p className="text-muted-foreground">
              We offer scalable packages tailored to the specific requirements of municipalities and organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold">Starter</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold">Contact Us</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Perfect for small communities just beginning their smart waste journey.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">10 Smart Dustbins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Basic Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Email Support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Quarterly Maintenance</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full block mt-6">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-green-200 dark:border-green-800 overflow-hidden scale-105 relative transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/20">
                <h3 className="text-xl font-bold">Municipal</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold">Custom Quote</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ideal for mid-sized cities looking for comprehensive waste management.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">50+ Smart Dustbins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Advanced Analytics & Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">1 Collection Vehicle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Priority Support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Monthly Maintenance</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full block mt-6">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold">Custom Solution</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete solution for large metropolitan areas with complex needs.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Unlimited Smart Dustbins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Comprehensive Management Platform</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Multiple Collection Vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Factory Partnership Program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">24/7 Dedicated Support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Custom API Integrations</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full block mt-6">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
