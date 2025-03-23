
import { useState } from 'react';

interface PriceToggleProps {
  onChange: (isYearly: boolean) => void;
}

const PriceToggle = ({ onChange }: PriceToggleProps) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    onChange(!isYearly);
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <span className={`text-lg mr-3 ${!isYearly ? 'font-medium text-foreground' : 'text-foreground/70'}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-accent/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span
          className={`${
            isYearly ? 'translate-x-6 bg-white' : 'translate-x-1 bg-white'
          } inline-block h-4 w-4 transform rounded-full transition-transform duration-200`}
        />
      </button>
      <span className={`text-lg ml-3 ${isYearly ? 'font-medium text-foreground' : 'text-foreground/70'}`}>
        Yearly
        <span className="ml-1.5 inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
          Save 20%
        </span>
      </span>
    </div>
  );
};

export default PriceToggle;
