
import { Check, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Problems We Solve</h2>
          <p className="text-muted-foreground">
            Traditional waste management systems face numerous challenges that our innovative solutions address effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-appear">
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <X className="text-red-500 mr-2" size={20} />
                Inefficient Waste Segregation
              </h3>
              <p className="text-muted-foreground">
                Current systems often mix different types of waste, leading to increased landfill use and missed recycling opportunities.
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <X className="text-red-500 mr-2" size={20} />
                Labor-Intensive Collection
              </h3>
              <p className="text-muted-foreground">
                Door-to-door waste collection requires significant human resources and is often inefficient.
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <X className="text-red-500 mr-2" size={20} />
                High Fuel Consumption
              </h3>
              <p className="text-muted-foreground">
                Traditional collection methods involve visiting every household, leading to excessive fuel use and carbon emissions.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 animate-appear stagger-2">
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <Check className="text-green-600 mr-2" size={20} />
                Automated Waste Segregation
              </h3>
              <p className="text-muted-foreground">
                Our smart dustbins with three compartments enable efficient separation of dry, wet, and electronic waste at the source.
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <Check className="text-green-600 mr-2" size={20} />
                Streamlined Collection Process
              </h3>
              <p className="text-muted-foreground">
                A single driver can efficiently manage the collection process with our smart system, reducing labor requirements.
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <Check className="text-green-600 mr-2" size={20} />
                Optimized Collection Routes
              </h3>
              <p className="text-muted-foreground">
                Sensors notify drivers which areas to visit, eliminating unnecessary trips and reducing fuel consumption.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a href="/products" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
            Learn more about our solutions
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
