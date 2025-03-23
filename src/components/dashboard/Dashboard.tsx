
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Vote, Wallet, CreditCard, ShoppingBag, 
  BarChart3, Trophy, ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats] = useState({
    votesCount: 124,
    tokensEarned: 2450,
    loanStatus: 'Eligible',
    reputationScore: 86
  });

  return (
    <section id="dashboard" className="py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-teal-light bg-clip-text text-transparent">
            Your BLOCKSMITHS Dashboard
          </h2>
          <p className="text-foreground/70">
            Vote, earn tokens, and access financial services on our decentralized platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard 
            icon={<Vote className="h-5 w-5 text-accent" />}
            title="Total Votes"
            value={stats.votesCount}
            change="+12% this month"
            positive={true}
          />
          
          <StatCard 
            icon={<Trophy className="h-5 w-5 text-accent" />}
            title="BVS Tokens Earned"
            value={stats.tokensEarned}
            change="+245 last week"
            positive={true}
          />
          
          <StatCard 
            icon={<CreditCard className="h-5 w-5 text-accent" />}
            title="Loan Status"
            value={stats.loanStatus}
            change="Based on your activity"
            positive={null}
          />
          
          <StatCard 
            icon={<BarChart3 className="h-5 w-5 text-accent" />}
            title="Reputation Score"
            value={stats.reputationScore}
            change="+3 points this month"
            positive={true}
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
          <QuickActionButton 
            icon={<Vote className="h-5 w-5" />}
            label="Start Voting"
            href="/voting"
            isRouterLink={true}
          />
          
          <QuickActionButton 
            icon={<Wallet className="h-5 w-5" />}
            label="View Wallet"
            href="#token-system"
          />
          
          <QuickActionButton 
            icon={<CreditCard className="h-5 w-5" />}
            label="Apply for Loan"
            href="#loan-system"
          />
          
          <QuickActionButton 
            icon={<ShoppingBag className="h-5 w-5" />}
            label="Redeem Tokens"
            href="#redeem-tokens"
          />
        </div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, change, positive }) => {
  return (
    <Card className="glass-card border-accent/10 hover:border-accent/20 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="p-2 rounded-md bg-accent/10">{icon}</span>
          <span className={`text-xs font-medium flex items-center ${
            positive === true ? 'text-green-500' : 
            positive === false ? 'text-red-500' : 'text-foreground/60'
          }`}>
            {positive !== null && (
              positive ? 
                <ArrowUpRight className="h-3 w-3 mr-1" /> : 
                <ArrowUpRight className="h-3 w-3 mr-1 rotate-180" />
            )}
            {change}
          </span>
        </div>
        <h3 className="text-sm font-medium text-foreground/70 mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};

// Quick Action Button Component
const QuickActionButton = ({ icon, label, href, isRouterLink = false }) => {
  const buttonContent = (
    <Button 
      variant="outline" 
      className="h-auto py-3 px-5 border-accent/20 hover:border-accent/40 hover:bg-accent/5"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  );

  return isRouterLink ? (
    <Link to={href}>{buttonContent}</Link>
  ) : (
    <a href={href}>{buttonContent}</a>
  );
};

export default Dashboard;
