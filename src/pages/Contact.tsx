
import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-green-50 dark:bg-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our smart waste management solutions? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-4">
                  <Phone className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">Mon-Fri: 9am-5pm EST</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-4">
                  <Mail className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ecowaste.com</p>
                <p className="text-muted-foreground">support@ecowaste.com</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-4">
                  <MapPin className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Office</h3>
                <p className="text-muted-foreground">123 Green Street</p>
                <p className="text-muted-foreground">Eco City, EC 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                <TabsTrigger value="schedule">Schedule a Demo</TabsTrigger>
              </TabsList>
              
              <TabsContent value="contact" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="What's this about?" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Your message" 
                          rows={4} 
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send size={16} className="mr-2" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                  
                  <div className="h-full min-h-[300px] rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215177732619!2d-73.9855426!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635187427791!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy"
                      title="Map"
                    ></iframe>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Schedule a product demo</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="demo-name">Name</Label>
                        <Input 
                          id="demo-name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="demo-email">Email</Label>
                        <Input 
                          id="demo-email" 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input 
                          id="organization" 
                          placeholder="Your company or municipality" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="demo-type">Product of Interest</Label>
                        <select 
                          id="demo-type"
                          className="w-full p-2 rounded-md border border-input bg-background"
                        >
                          <option value="dustbins">Smart Dustbins</option>
                          <option value="vehicles">Collection Vehicles</option>
                          <option value="software">Management Software</option>
                          <option value="complete">Complete Solution</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="demo-message">Additional Information</Label>
                        <Textarea 
                          id="demo-message" 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your needs" 
                          rows={4} 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Request Demo"}
                      </Button>
                    </form>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                      alt="Product Demo" 
                      className="rounded-lg mb-6"
                    />
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-2">What to expect in a demo</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-green-600 dark:text-green-400">1</span>
                          </div>
                          <p className="text-sm">Personalized product overview based on your needs</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-green-600 dark:text-green-400">2</span>
                          </div>
                          <p className="text-sm">Live demonstration of our smart dustbin technology</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-green-600 dark:text-green-400">3</span>
                          </div>
                          <p className="text-sm">Q&A session with our technical specialists</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-green-600 dark:text-green-400">4</span>
                          </div>
                          <p className="text-sm">Custom proposal tailored to your specific requirements</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
