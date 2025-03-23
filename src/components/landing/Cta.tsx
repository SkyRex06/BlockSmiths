
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Cta = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-navy-dark opacity-95 z-0"></div>
      
      {/* Animated network lines */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="network-line opacity-20" 
            style={{
              top: `${20 + i * 12}%`,
              left: '0',
              width: '100%',
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="heading-lg mb-6">Start Your Secure Voting Journey Today</h2>
          <p className="text-xl mb-8 text-white/80">
            Join the revolution in enterprise voting and decision-making with blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-brand-dark hover:bg-white/90 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
