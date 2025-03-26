
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-green-50 dark:bg-green-900/20">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                <div className="text-white font-bold text-sm">EW</div>
              </div>
              <div className="ml-2 font-bold text-lg">
                <span className="text-green-600">Eco</span>
                <span className="text-muted-foreground">Waste</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Revolutionizing urban waste management with cutting-edge technology and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Smart Dustbins
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Collection Vehicles
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Management Software
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Waste-to-Energy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Resource Recovery
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Green Street,<br />
                  Eco City, EC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-green-600 flex-shrink-0" />
                <span className="text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-green-600 flex-shrink-0" />
                <span className="text-muted-foreground">
                  info@ecowaste.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} EcoWaste Innovations. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
              Cookie Policy
            </a>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="mt-4 md:mt-0"
            onClick={scrollToTop}
          >
            <ArrowUp size={14} className="mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
