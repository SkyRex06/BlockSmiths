
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, BarChart3, Wallet, CreditCard, Gift } from 'lucide-react';

const Hero = () => {
  const networkRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!networkRef.current) return;
    
    // Create network animations
    const networkEl = networkRef.current;
    const width = networkEl.offsetWidth;
    const height = networkEl.offsetHeight;
    
    // Create nodes with random positions
    const nodeCount = 12; // Adjust based on screen size
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'network-node';
      
      // Random position with margins
      const x = 40 + Math.random() * (width - 80);
      const y = 40 + Math.random() * (height - 80);
      
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      
      // Random animation delay
      node.style.animationDelay = `${Math.random() * 2}s`;
      
      nodes.push({ element: node, x, y });
      networkEl.appendChild(node);
    }
    
    // Create connection lines between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) continue; // Only connect some nodes
        
        const node1 = nodes[i];
        const node2 = nodes[j];
        
        // Calculate line position and angle
        const dx = node2.x - node1.x;
        const dy = node2.y - node1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > width / 3) continue; // Don't connect distant nodes
        
        const line = document.createElement('div');
        line.className = 'network-line';
        
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        line.style.width = `${distance}px`;
        line.style.left = `${node1.x}px`;
        line.style.top = `${node1.y + 1}px`; // +1 to align with center of node
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = 'left center';
        
        networkEl.appendChild(line);
      }
    }
    
    // Clean up animation
    return () => {
      while (networkEl.firstChild) {
        networkEl.removeChild(networkEl.firstChild);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-20 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div 
        ref={networkRef} 
        className="absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
      ></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="stagger-child">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20">
              <p className="text-accent-foreground text-sm font-medium">
                Web3-Powered Voting Platform
              </p>
            </div>
            
            <h1 className="hero-text mb-6 opacity-0 animate-fade-in">
              <span className="gradient-text">Vote. Earn. Finance.</span> <br />
              Decentralized Ecosystem
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl opacity-0 animate-fade-in-delayed">
              BLOCKSMITHS combines secure blockchain voting with a vote-to-earn token economy, 
              loans, and digital marketplace in one revolutionary platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-delayed">
              <Button size="lg" className="text-md px-8 py-6">
                Start Voting Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-md px-8 py-6">
                Explore Platform
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 opacity-0 animate-fade-in-delayed">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-accent mr-2" />
                <span className="text-sm md:text-base font-medium">Secure Voting</span>
              </div>
              <div className="flex items-center">
                <Wallet className="h-6 w-6 text-accent mr-2" />
                <span className="text-sm md:text-base font-medium">Earn BVS Tokens</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-accent mr-2" />
                <span className="text-sm md:text-base font-medium">Token-Backed Loans</span>
              </div>
              <div className="flex items-center">
                <Gift className="h-6 w-6 text-accent mr-2" />
                <span className="text-sm md:text-base font-medium">Redeem Rewards</span>
              </div>
              <div className="flex items-center col-span-2 sm:col-span-1">
                <Lock className="h-6 w-6 text-accent mr-2" />
                <span className="text-sm md:text-base font-medium">Secure & Private</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="glass-card p-6 md:p-8 shadow-lg opacity-0 animate-scale-in">
              <img 
                src="https://placehold.co/600x400/195190/FFFFFF/png?text=BLOCKSMITHS+Dashboard" 
                alt="BLOCKSMITHS Dashboard" 
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 glass-card py-3 px-4 shadow-lg float-1">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium">Vote Verified</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card py-3 px-4 shadow-lg float-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                <span className="text-sm font-medium">+50 BVS Earned</span>
              </div>
            </div>

            <div className="absolute top-1/3 -right-12 glass-card py-3 px-4 shadow-lg float-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-teal-light mr-2"></div>
                <span className="text-sm font-medium">Loan Eligible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
