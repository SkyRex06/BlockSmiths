
import { useState } from 'react';
import { 
  Card, CardContent, CardHeader, CardTitle, 
  CardDescription, CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock, BarChart3 } from 'lucide-react';

const TokenSystem = () => {
  const [balances] = useState({
    bvsTokens: 2450,
    lockedTokens: 500,
    usdValue: 245.0
  });

  const [transactions] = useState([
    {
      id: 1,
      type: "received",
      amount: 50,
      description: "Reward for voting in Platform Upgrade",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "sent",
      amount: 25,
      description: "Transfer to @johnsmith",
      time: "1 day ago"
    },
    {
      id: 3,
      type: "received",
      amount: 75,
      description: "Governance participation bonus",
      time: "3 days ago"
    }
  ]);

  return (
    <section id="token-system" className="relative overflow-hidden">
      <Card className="glass-card border-accent/10 h-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-xl font-bold">BVS Token Wallet</CardTitle>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
              <Wallet className="inline-block h-3 w-3 mr-1" />
              Active
            </span>
          </div>
          <CardDescription>
            Manage your earned BVS tokens and transactions
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg border border-accent/10 text-center">
              <p className="text-xs text-foreground/70 mb-1">Available Balance</p>
              <p className="text-xl font-bold mb-1">
                {balances.bvsTokens} <span className="text-xs font-normal">BVS</span>
              </p>
              <p className="text-xs text-foreground/70">≈ ${balances.usdValue.toFixed(2)}</p>
            </div>
            
            <div className="p-4 rounded-lg border border-accent/10 text-center">
              <p className="text-xs text-foreground/70 mb-1">Locked Tokens</p>
              <p className="text-xl font-bold mb-1">
                {balances.lockedTokens} <span className="text-xs font-normal">BVS</span>
              </p>
              <p className="text-xs text-foreground/70">For active loans</p>
            </div>
            
            <div className="p-4 rounded-lg border border-accent/10 text-center">
              <p className="text-xs text-foreground/70 mb-1">BVS Price</p>
              <p className="text-xl font-bold mb-1">
                $0.10 <span className="text-xs font-normal">USD</span>
              </p>
              <p className="text-xs text-green-500 flex items-center justify-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +3.5% today
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="send-address" className="text-xs mb-1">Send Tokens</Label>
              <div className="flex gap-2">
                <Input
                  id="send-address"
                  placeholder="Username or address"
                  className="text-sm h-9"
                />
                <Button size="sm" variant="outline" className="shrink-0 h-9">
                  Send
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="receive-address" className="text-xs mb-1">Receive Tokens</Label>
              <div className="flex gap-2">
                <Input
                  id="receive-address"
                  value="0x1a2b...3c4d"
                  readOnly
                  className="text-sm h-9 bg-muted"
                />
                <Button size="sm" variant="outline" className="shrink-0 h-9">
                  Copy
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Recent Transactions</h4>
            <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
              {transactions.map((tx) => (
                <div 
                  key={tx.id}
                  className="flex justify-between items-center p-2 rounded border border-accent/5 text-sm"
                >
                  <div className="flex items-center">
                    {tx.type === "received" ? (
                      <ArrowDownLeft className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-accent mr-2" />
                    )}
                    <div>
                      <p className="font-medium">{tx.description}</p>
                      <p className="text-xs text-foreground/60 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {tx.time}
                      </p>
                    </div>
                  </div>
                  <div className={tx.type === "received" ? "text-green-500" : "text-foreground"}>
                    {tx.type === "received" ? "+" : "-"}{tx.amount} BVS
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" className="text-xs">
            View All Transactions
          </Button>
          
          <Button variant="outline" size="sm" className="text-xs">
            <BarChart3 className="h-3 w-3 mr-1" />
            Token Analytics
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default TokenSystem;
