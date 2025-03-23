
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Vote, BarChart } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Set Up an Election',
    description: 'Create and configure your election with custom options, questions, and security settings.',
    icon: Settings,
    color: 'bg-brand-light',
  },
  {
    id: 2,
    title: 'Invite Voters',
    description: 'Securely invite participants via email or generate secure access codes.',
    icon: Users,
    color: 'bg-teal-light',
  },
  {
    id: 3,
    title: 'Secure Blockchain Voting',
    description: 'Participants cast votes that are securely recorded on the blockchain.',
    icon: Vote,
    color: 'bg-accent',
  },
  {
    id: 4,
    title: 'View Results Instantly',
    description: 'Access real-time results and analytics as votes are being cast.',
    icon: BarChart,
    color: 'bg-brand-accent',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our streamlined process makes blockchain voting accessible for organizations of any size.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Interactive cards */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`glass-card p-6 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  activeStep === step.id 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'opacity-80 hover:opacity-100'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-start">
                  <div className={`${step.color} p-3 rounded-xl mr-4`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-primary mr-2">
                        Step {step.id}
                      </span>
                      <div className="h-px bg-muted-foreground/30 flex-grow"></div>
                    </div>
                    <h3 className="heading-sm mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Illustration */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-navy-light to-navy-dark p-1">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              {activeStep === 1 && (
                <img 
                  src="https://placehold.co/600x400/195190/FFFFFF/png?text=Election+Setup" 
                  alt="Election Setup" 
                  className="w-full h-full object-cover rounded-xl" 
                />
              )}
              {activeStep === 2 && (
                <img 
                  src="https://placehold.co/600x400/1D9EB4/FFFFFF/png?text=Invite+Voters" 
                  alt="Invite Voters" 
                  className="w-full h-full object-cover rounded-xl" 
                />
              )}
              {activeStep === 3 && (
                <img 
                  src="https://placehold.co/600x400/51A7F9/FFFFFF/png?text=Blockchain+Voting" 
                  alt="Blockchain Voting" 
                  className="w-full h-full object-cover rounded-xl" 
                />
              )}
              {activeStep === 4 && (
                <img 
                  src="https://placehold.co/600x400/0E3B68/FFFFFF/png?text=View+Results" 
                  alt="View Results" 
                  className="w-full h-full object-cover rounded-xl" 
                />
              )}
            </div>
            
            {/* Step indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeStep === step.id ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`View step ${step.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
