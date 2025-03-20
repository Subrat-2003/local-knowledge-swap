
import { Facebook, Github, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">Skill<span className="text-foreground">Share</span></h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              A community platform for exchanging skills and knowledge without monetary transactions.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://twitter.com" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div className="space-y-4">
            <h3 className="text-base font-medium mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/discover">Discover Skills</FooterLink></li>
              <li><FooterLink href="/exchange">Skill Exchange</FooterLink></li>
              <li><FooterLink href="/profile">My Profile</FooterLink></li>
              <li><FooterLink href="/how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/community-guidelines">Community Guidelines</FooterLink></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-base font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/team">Our Team</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/press">Press</FooterLink></li>
              <li><FooterLink href="/blog">Blog</FooterLink></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-base font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/help-center">Help Center</FooterLink></li>
              <li><FooterLink href="/faqs">FAQs</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="/contact">Contact Support</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-10"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} SkillShare. All rights reserved.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center">
              <MapPin size={14} className="mr-2 text-muted-foreground/70" />
              <span>123 Community Ave, San Francisco, CA</span>
            </div>
            
            <div className="flex items-center">
              <Phone size={14} className="mr-2 text-muted-foreground/70" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center">
              <Mail size={14} className="mr-2 text-muted-foreground/70" />
              <span>hello@skillshare.community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
