
import { ShieldCheck, LockKeyhole, Zap, BarChart2, Globe, Code } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Unmatched Security',
    description: 'Military-grade encryption and blockchain technology ensure your votes are secure and tamper-proof.',
  },
  {
    icon: LockKeyhole,
    title: 'Complete Privacy',
    description: 'Anonymous voting with zero knowledge proofs maintains voter privacy while ensuring validity.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Real-time vote counting with immediate results as soon as your election concludes.',
  },
  {
    icon: BarChart2,
    title: 'Detailed Analytics',
    description: 'Comprehensive vote analysis with custom reports and data visualization options.',
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Enable voting from anywhere in the world with multi-language support and mobile compatibility.',
  },
  {
    icon: Code,
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing systems through our robust API.',
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Enterprise-Grade Features</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            BLOCKSMITHS combines the security of blockchain with an intuitive user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-brand-main to-brand-light p-3 rounded-xl inline-block mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
