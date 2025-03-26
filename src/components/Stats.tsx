
import { useEffect, useState } from 'react';
import { Users, Recycle, Leaf, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    cities: 0,
    landfillReduction: 0,
    energyGeneration: 0,
    satisfaction: 0
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  // Animate counts when section becomes visible
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    
    const targetCounts = {
      cities: 25,
      landfillReduction: 60,
      energyGeneration: 80,
      satisfaction: 90
    };
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        setCounts(targetCounts);
        clearInterval(timer);
        return;
      }
      
      const progress = currentStep / steps;
      
      setCounts({
        cities: Math.round(targetCounts.cities * progress),
        landfillReduction: Math.round(targetCounts.landfillReduction * progress),
        energyGeneration: Math.round(targetCounts.energyGeneration * progress),
        satisfaction: Math.round(targetCounts.satisfaction * progress)
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);
  
  return (
    <section id="stats-section" className="py-16 bg-green-50 dark:bg-green-900/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className={cn(
            "text-center",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{counts.cities}+</div>
            <p className="text-muted-foreground">Urban Centers</p>
          </div>
          
          <div className={cn(
            "text-center",
            isVisible ? "animate-fade-in stagger-1" : "opacity-0"
          )}>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mx-auto mb-4">
              <Recycle className="text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{counts.landfillReduction}%</div>
            <p className="text-muted-foreground">Landfill Reduction</p>
          </div>
          
          <div className={cn(
            "text-center",
            isVisible ? "animate-fade-in stagger-2" : "opacity-0"
          )}>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{counts.energyGeneration}%</div>
            <p className="text-muted-foreground">Energy Generation</p>
          </div>
          
          <div className={cn(
            "text-center",
            isVisible ? "animate-fade-in stagger-3" : "opacity-0"
          )}>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{counts.satisfaction}%</div>
            <p className="text-muted-foreground">User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
