
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import Dashboard from '@/components/dashboard/Dashboard';
import TokenSystem from '@/components/dashboard/TokenSystem';
import ActiveVotes from '@/components/dashboard/ActiveVotes';
import LoanSystem from '@/components/dashboard/LoanSystem';
import RedeemTokens from '@/components/dashboard/RedeemTokens';
import Footer from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark to-navy-dark/90">
      <Navbar />
      <Hero />
      <Dashboard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 container mx-auto mb-16">
        <ActiveVotes />
        <TokenSystem />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 container mx-auto mb-24">
        <LoanSystem />
        <RedeemTokens />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
