
import { useState } from 'react';
import { Trash2, Truck, Factory, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Smart Waste Segregation",
      description: "Our smart dustbins are divided into three compartments for dry, wet, and electronic waste. Users receive monetary incentives for proper electronic waste disposal.",
      icon: Trash2,
    },
    {
      title: "Efficient Collection",
      description: "The waste vehicle, equipped with sensors and a special clip mechanism, connects to the dustbin, lifting and automatically segregating the waste into the appropriate compartments.",
      icon: Truck,
    },
    {
      title: "Direct Factory Sale",
      description: "The segregated waste is sold directly to the required factories, generating revenue and promoting resource recovery without intermediate storage.",
      icon: Factory,
    },
    {
      title: "Energy Generation",
      description: "Collected waste is converted into renewable energy using innovative technologies like hydrothermal carbonization and plasma gasification.",
      icon: Zap,
    }
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Our innovative waste management system streamlines the entire process from collection to resource recovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {activeStep === 0 && (
                <div className="animation-fade-in w-full max-w-[300px]">
                  <img 
                    src="/lovable-uploads/8a8f577f-7747-4b9b-b6d3-f7d25a8a1345.png" 
                    alt="Smart Dustbin" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              {activeStep === 1 && (
                <div className="animation-fade-in w-full max-w-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1620574387735-3624a7e30d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Waste Collection" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="animation-fade-in w-full max-w-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Factory Processing" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              {activeStep === 3 && (
                <div className="animation-fade-in w-full max-w-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Energy Generation" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-lg cursor-pointer transition-all duration-300",
                  activeStep === index 
                    ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" 
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4",
                    activeStep === index 
                      ? "bg-green-600 text-white" 
                      : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  )}>
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
