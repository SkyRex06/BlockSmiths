
import { Github, Twitter, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold">
                <span className="text-brand-accent">BLOCK</span>SMITHS
              </a>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              BLOCKSMITHS provides secure, transparent, and immutable voting
              solutions powered by blockchain technology for enterprises and organizations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Voting Platform
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  API & Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Analytics Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Security Features
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            © {new Date().getFullYear()} BLOCKSMITHS. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <a 
              href="#" 
              className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors text-sm mr-6"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@blocksmiths.io</span>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>Live Chat</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
