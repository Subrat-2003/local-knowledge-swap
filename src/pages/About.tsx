
import { useEffect } from 'react';
import { Check, Users, Target, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const objectives = [
    "Deploy smart dustbins across major urban centers, achieving a 70% adoption rate within five years.",
    "Reduce landfill waste by 60% in participating cities through efficient segregation and processing.",
    "Generate renewable energy from 80% of collected waste, contributing to the local power grid.",
    "Engage and educate communities, achieving a 90% user satisfaction rate with our services.",
    "Implement sensor-based notification system in smart dustbins to optimize waste collection routes.",
    "Establish direct partnerships with factories to sell segregated waste, ensuring resource recovery.",
    "Minimize human intervention in waste collection by utilizing automated systems."
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-green-50 dark:bg-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoWaste Innovations</h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing urban waste management with cutting-edge technology and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl border border-green-100 dark:border-green-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-6">
                <Target className="text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To revolutionize urban waste management by integrating cutting-edge technologies, fostering community engagement, and promoting sustainable practices that convert waste into valuable resources.
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl border border-green-100 dark:border-green-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-6">
                <Rocket className="text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                To lead the global transition towards smart, efficient, and sustainable waste management systems that contribute to a circular economy and a healthier planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Objectives</h2>
            <p className="text-muted-foreground">
              Through innovation and collaboration, we aim to achieve these core objectives in waste management.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                    <Check className="text-green-600 dark:text-green-400" size={14} />
                  </div>
                  <p className="text-muted-foreground">{objective}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the dedicated professionals driving innovation in waste management technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Emily Chen</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-sm text-muted-foreground">
                Environmental engineer with 15+ years of experience in sustainable waste management solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Raj Patel</h3>
              <p className="text-sm text-muted-foreground mb-2">Chief Technology Officer</p>
              <p className="text-sm text-muted-foreground">
                IoT specialist with extensive background in sensor technologies and AI integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Maria Rodriguez</h3>
              <p className="text-sm text-muted-foreground mb-2">Chief Operations Officer</p>
              <p className="text-sm text-muted-foreground">
                Supply chain expert specializing in logistics optimization and sustainable operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
