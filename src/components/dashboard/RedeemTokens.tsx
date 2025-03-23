
import { useState } from 'react';
import { 
  Card, CardContent, CardHeader, CardTitle, 
  CardDescription, CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Gift, CreditCard, Tag, ShoppingCart } from 'lucide-react';

const RedeemTokens = () => {
  const [redeemItems] = useState([
    {
      id: 1,
      name: "Amazon Gift Card",
      description: "$25 Amazon Gift Card",
      image: "https://placehold.co/100x100/195190/FFFFFF/png?text=Amazon",
      price: 250,
      category: "gift cards"
    },
    {
      id: 2,
      name: "Spotify Premium",
      description: "1 Month Subscription",
      image: "https://placehold.co/100x100/195190/FFFFFF/png?text=Spotify",
      price: 150,
      category: "subscriptions"
    },
    {
      id: 3,
      name: "Netflix Basic",
      description: "1 Month Subscription",
      image: "https://placehold.co/100x100/195190/FFFFFF/png?text=Netflix",
      price: 200,
      category: "subscriptions"
    },
    {
      id: 4,
      name: "BLOCKSMITHS Merch",
      description: "Limited Edition T-Shirt",
      image: "https://placehold.co/100x100/195190/FFFFFF/png?text=Merch",
      price: 350,
      category: "merchandise"
    }
  ]);

  return (
    <section id="redeem-tokens" className="relative overflow-hidden">
      <Card className="glass-card border-accent/10 h-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-xl font-bold">Redeem BVS Tokens</CardTitle>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-brand-light/20 text-brand-light">
              <ShoppingBag className="inline-block h-3 w-3 mr-1" />
              Marketplace
            </span>
          </div>
          <CardDescription>
            Exchange your earned BVS tokens for real-world rewards
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Button size="sm" variant="outline" className="text-xs bg-primary/5">
              All Items
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <Gift className="h-3 w-3 mr-1" />
              Gift Cards
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <CreditCard className="h-3 w-3 mr-1" />
              Subscriptions
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              Merchandise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {redeemItems.map((item) => (
              <div 
                key={item.id}
                className="flex border border-accent/10 rounded-lg p-3 hover:border-accent/20 transition-colors"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-3"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-xs text-foreground/70 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-accent">
                      {item.price} BVS
                    </span>
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Redeem
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="bg-accent/10 text-accent px-4 py-3 rounded-lg text-center">
              <h4 className="text-sm font-medium mb-1">Current BVS Token Value</h4>
              <p className="text-xs">1 BVS ≈ $0.10 USD in redemption value</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" className="text-xs">
            View All Rewards
          </Button>
          
          <Button variant="outline" size="sm" className="text-xs">
            <ShoppingCart className="h-3 w-3 mr-1" />
            My Cart (0)
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default RedeemTokens;
