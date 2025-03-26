
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90"></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Waste Management?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join the growing number of communities embracing our smart solutions for a cleaner, more sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-white/90 w-full sm:w-auto">
                Get Started
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
