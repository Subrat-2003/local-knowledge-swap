
import EcoHero from '@/components/EcoHero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <EcoHero />
      <ProblemSolution />
      <HowItWorks />
      <Stats />
      
      {/* Route Optimization Feature Highlight */}
      <section className="py-16 bg-green-50 dark:bg-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-700 mb-4">
                <Route className="mr-1 h-3.5 w-3.5" />
                <span>Intelligent Routing</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Route Optimization Technology
              </h2>
              <p className="text-muted-foreground mb-6">
                Our advanced route mapping system uses real-time data to optimize waste collection, 
                reducing fuel consumption and operational costs while maximizing efficiency.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2">
                    <ArrowRight className="h-3 w-3 text-green-600" />
                  </div>
                  Real-time route suggestions based on bin fill levels
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2">
                    <ArrowRight className="h-3 w-3 text-green-600" />
                  </div>
                  High-density waste collection area identification
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2">
                    <ArrowRight className="h-3 w-3 text-green-600" />
                  </div>
                  Dynamic route adjustments to avoid traffic and delays
                </li>
              </ul>
              <Link to="/route-optimization">
                <Button className="bg-green-600 hover:bg-green-700">
                  Explore Route Optimization
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618755496799-93264a048dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Route Optimization" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 bg-gradient-to-b from-black/5 via-black/5 to-black/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default HomePage;
