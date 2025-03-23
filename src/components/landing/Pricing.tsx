
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import PriceToggle from '@/components/ui/PriceToggle';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small organizations and teams',
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      'Up to 250 voters per election',
      '5 elections per month',
      'Basic analytics',
      'Email support',
      'Standard security',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Business',
    description: 'Ideal for medium-sized organizations',
    monthlyPrice: 249,
    yearlyPrice: 199,
    features: [
      'Up to 1,000 voters per election',
      'Unlimited elections',
      'Advanced analytics & reporting',
      'Priority email & chat support',
      'Enhanced security features',
      'Custom branding options',
    ],
    popular: true,
    cta: 'Get Business',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: 599,
    yearlyPrice: 479,
    features: [
      'Unlimited voters',
      'Unlimited elections',
      'Custom integrations',
      'Dedicated support team',
      'Advanced security & compliance',
      'Custom branding & white-labeling',
      'On-premise deployment option',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Transparent Pricing</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose the plan that fits your organization's needs
          </p>
        </div>
        
        <PriceToggle onChange={setIsYearly} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card relative overflow-hidden ${
                plan.popular 
                  ? 'ring-2 ring-accent shadow-lg' 
                  : 'hover:shadow-lg transition-all'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-5 translate-y-3">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-foreground/70 ml-2">
                    / month
                  </span>
                  {isYearly && (
                    <p className="text-sm text-accent mt-2">
                      Billed annually (${plan.yearlyPrice * 12})
                    </p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-accent shrink-0 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-foreground/70">
            Need a custom plan? <a href="#" className="text-accent font-medium underline underline-offset-4">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
