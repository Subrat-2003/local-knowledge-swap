
import { useState, useEffect } from 'react';
import { ArrowRight, Recycle, Leaf, BarChart3, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const EcoHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-green-500/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-500/5 blur-3xl opacity-60"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto w-full text-center">
        <span className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary animate-appear",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <Leaf size={14} className="mr-1.5 text-green-600" />
          Sustainable Waste Management Solutions
        </span>
        
        <h1 className={cn(
          "mt-6 font-bold tracking-tight animate-appear stagger-1",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          Revolutionizing Urban<br />
          <span className="text-green-600">Waste Management</span>
        </h1>
        
        <p className={cn(
          "mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-appear stagger-2",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          EcoWaste Innovations integrates cutting-edge IoT and AI technologies for efficient 
          waste segregation and sustainable management, reducing landfill dependency and 
          promoting environmental conservation.
        </p>
        
        <div className={cn(
          "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-appear stagger-3",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <Link to="/products">
            <Button size="lg" className="px-8 gap-2 text-base h-12 bg-green-600 hover:bg-green-700">
              Explore Our Solutions
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="px-8 text-base h-12 border-green-600 text-green-600 hover:bg-green-50">
              Contact Us
            </Button>
          </Link>
        </div>
        
        <div className={cn(
          "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-appear stagger-4",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <Recycle size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Smart Segregation</h3>
            <p className="text-muted-foreground text-sm">
              Our smart dustbins automatically identify and segregate waste into dry, wet, and electronic categories.
            </p>
          </div>
          
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <Cpu size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">IoT Integration</h3>
            <p className="text-muted-foreground text-sm">
              Sensors track fill levels and optimize collection routes, reducing fuel consumption and operational costs.
            </p>
          </div>
          
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <BarChart3 size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Data Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Real-time monitoring and analytics help optimize waste management processes and resource recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoHero;
