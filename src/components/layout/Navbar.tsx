
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, Home, Vote, Wallet, ShoppingBag, 
  CreditCard, LayoutDashboard, User, LogOut 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Vote', href: '/voting', icon: Vote },
    { name: 'Wallet', href: '#token-system', icon: Wallet },
    { name: 'Marketplace', href: '#redeem-tokens', icon: ShoppingBag },
    { name: 'Loans', href: '#loan-system', icon: CreditCard },
    { name: 'Dashboard', href: '#dashboard', icon: LayoutDashboard },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foreground">
              <span className="text-brand-accent">BLOCK</span>SMITHS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`nav-link flex items-center ${isActive(link.href) ? 'nav-link-active' : ''}`}
                >
                  <link.icon className="h-4 w-4 mr-1" />
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="ml-8 flex space-x-4">
              <Button variant="outline" className="px-5">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button className="px-5">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link flex items-center py-2 px-4 text-lg ${
                  isActive(link.href) ? 'nav-link-active' : ''
                }`}
              >
                <link.icon className="h-5 w-5 mr-2" />
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
