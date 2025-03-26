
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { User, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "City Environmental Officer",
      content: "EcoWaste Innovations has transformed how our city handles waste. The smart dustbins have significantly reduced collection costs while improving recycling rates.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sustainability Director",
      content: "The data analytics provided by EcoWaste's system has given us unprecedented insights into our waste patterns, allowing us to make better decisions for our community.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Residential Community Manager",
      content: "Our residents have embraced the smart dustbins with enthusiasm. The user-friendly design and incentive system for electronic waste has increased participation rates dramatically.",
      rating: 4
    }
  ];
  
  return (
    <section id="testimonials-section" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Partners Say</h2>
          <p className="text-muted-foreground">
            Discover how our smart waste management solutions are making a difference for communities.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            style={{ height: '280px' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute w-full transition-all duration-500 p-8 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800",
                  isVisible ? "opacity-100" : "opacity-0",
                  index === activeIndex 
                    ? "translate-x-0 scale-100 z-10" 
                    : index === (activeIndex - 1 + testimonials.length) % testimonials.length
                      ? "-translate-x-full scale-95 opacity-0"
                      : "translate-x-full scale-95 opacity-0"
                )}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-200 dark:bg-green-700 flex items-center justify-center mr-4">
                    <User className="text-green-700 dark:text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all",
                  index === activeIndex
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
