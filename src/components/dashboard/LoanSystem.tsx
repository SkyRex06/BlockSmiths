
import { useState } from 'react';
import { 
  Card, CardContent, CardHeader, CardTitle, 
  CardDescription, CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Shield, BarChart3, ArrowRight } from 'lucide-react';

const LoanSystem = () => {
  const [creditScore] = useState(86);
  const [maxLoanAmount] = useState(1225);
  const [loanAmount, setLoanAmount] = useState(500);
  
  const maxLoanPercentage = Math.min(creditScore / 100, 0.95);
  const totalTokens = 2450;
  const calculatedMaxAmount = Math.floor(totalTokens * maxLoanPercentage);
  
  const handleLoanChange = (e) => {
    const value = parseInt(e.target.value);
    setLoanAmount(isNaN(value) ? 0 : Math.min(value, maxLoanAmount));
  };
  
  return (
    <section id="loan-system" className="relative overflow-hidden">
      <Card className="glass-card border-accent/10 h-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-xl font-bold">Token-Backed Loans</CardTitle>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-teal-dark/20 text-teal-light">
              <CreditCard className="inline-block h-3 w-3 mr-1" />
              New Feature
            </span>
          </div>
          <CardDescription>
            Get instant loans based on your BVS token holdings and reputation
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 rounded-lg border border-accent/10">
              <div className="flex justify-between mb-2">
                <h3 className="text-sm font-medium">Your Credit Score</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
                  {creditScore > 80 ? 'Excellent' : creditScore > 60 ? 'Good' : 'Average'}
                </span>
              </div>
              
              <div className="w-full bg-muted/50 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full" 
                  style={{ width: `${creditScore}%` }}
                >
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-foreground/70">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              
              <div className="mt-4 text-xs text-foreground/70 flex items-start">
                <Shield className="h-4 w-4 text-accent mr-2 shrink-0 mt-0.5" />
                <p>
                  Your score is calculated based on your voting history, 
                  token balance, and platform activity.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-accent/10">
              <h3 className="text-sm font-medium mb-4">Apply for a BVS-Backed Loan</h3>
              
              <div className="mb-4">
                <Label htmlFor="loan-amount" className="text-xs mb-1 flex justify-between">
                  <span>Loan Amount (BVS)</span>
                  <span>Max: {maxLoanAmount} BVS</span>
                </Label>
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={handleLoanChange}
                  min="0"
                  max={maxLoanAmount}
                  className="text-sm"
                />
              </div>
              
              <div className="mb-4">
                <Label className="text-xs mb-1">Term Length</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">30 Days</Button>
                  <Button variant="outline" size="sm" className="text-xs bg-primary/5">60 Days</Button>
                  <Button variant="outline" size="sm" className="text-xs">90 Days</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <p className="text-foreground/70 mb-1">Interest Rate</p>
                  <p className="font-medium">5% (APR)</p>
                </div>
                <div>
                  <p className="text-foreground/70 mb-1">Required Collateral</p>
                  <p className="font-medium">{Math.ceil(loanAmount * 1.2)} BVS</p>
                </div>
                <div>
                  <p className="text-foreground/70 mb-1">Repayment Amount</p>
                  <p className="font-medium">{Math.ceil(loanAmount * 1.05)} BVS</p>
                </div>
                <div>
                  <p className="text-foreground/70 mb-1">Funding Time</p>
                  <p className="font-medium">Instant</p>
                </div>
              </div>
              
              <Button className="w-full">
                Apply for Loan
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" className="text-xs">
            Loan History
          </Button>
          
          <Button variant="outline" size="sm" className="text-xs">
            <BarChart3 className="h-3 w-3 mr-1" />
            Credit Analytics
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoanSystem;
