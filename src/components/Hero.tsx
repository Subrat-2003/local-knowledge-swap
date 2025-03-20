
import { useState, useEffect } from 'react';
import { ArrowRight, Users, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl opacity-60"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto w-full text-center">
        <span className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary animate-appear",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <Sparkles size={14} className="mr-1.5 text-primary" />
          Share knowledge. Grow together.
        </span>
        
        <h1 className={cn(
          "mt-6 font-bold tracking-tight animate-appear stagger-1",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          Exchange Skills,<br />
          <span className="text-primary">Build Community</span>
        </h1>
        
        <p className={cn(
          "mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-appear stagger-2",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          Join a local platform where you can share your expertise and learn new skills 
          from others in your community — all without any monetary exchange.
        </p>
        
        <div className={cn(
          "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-appear stagger-3",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <Link to="/profile">
            <Button size="lg" className="px-8 gap-2 text-base h-12">
              Join the Community
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/discover">
            <Button size="lg" variant="outline" className="px-8 text-base h-12">
              Explore Skills
            </Button>
          </Link>
        </div>
        
        <div className={cn(
          "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-appear stagger-4",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Community Connection</h3>
            <p className="text-muted-foreground text-sm">
              Meet people in your area who share your interests and passion for learning.
            </p>
          </div>
          
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Skill Growth</h3>
            <p className="text-muted-foreground text-sm">
              Learn new skills and share your knowledge in a supportive environment.
            </p>
          </div>
          
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Virtual Currency</h3>
            <p className="text-muted-foreground text-sm">
              Exchange skills using our coin system—no real money needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
