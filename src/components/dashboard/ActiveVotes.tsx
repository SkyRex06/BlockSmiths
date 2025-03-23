
import { 
  Card, CardContent, CardHeader, CardTitle, 
  CardDescription, CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Vote, Users, Info, Check, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActiveVotes = () => {
  const activeElections = [
    {
      id: 1,
      title: "Platform Upgrade Proposal",
      description: "Vote on the proposed updates to the BLOCKSMITHS platform",
      totalVotes: 583,
      timeLeft: "2 days, 5 hours",
      tokenReward: 50,
      hasVoted: false
    },
    {
      id: 2,
      title: "New Governance Model",
      description: "Choose between three options for our updated DAO governance structure",
      totalVotes: 347,
      timeLeft: "4 days, 12 hours",
      tokenReward: 75,
      hasVoted: true
    },
    {
      id: 3,
      title: "Treasury Fund Allocation",
      description: "Decide how to allocate this quarter's community treasury funds",
      totalVotes: 432,
      timeLeft: "1 day, 18 hours",
      tokenReward: 100,
      hasVoted: false
    }
  ];

  return (
    <section id="active-votes" className="relative overflow-hidden">
      <Card className="glass-card border-accent/10 h-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-xl font-bold">Active Elections</CardTitle>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
              <Vote className="inline-block h-3 w-3 mr-1" />
              {activeElections.length} Ongoing
            </span>
          </div>
          <CardDescription>
            Cast your vote and earn BVS tokens as rewards
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {activeElections.map((election) => (
            <div 
              key={election.id} 
              className="p-4 border border-accent/10 rounded-lg hover:border-accent/20 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{election.title}</h3>
                {election.hasVoted && (
                  <span className="text-xs font-medium flex items-center text-green-500">
                    <Check className="h-3 w-3 mr-1" />
                    Voted
                  </span>
                )}
              </div>
              
              <p className="text-sm text-foreground/70 mb-4">
                {election.description}
              </p>
              
              <div className="flex items-center justify-between mb-4 text-xs">
                <div className="flex items-center text-foreground/60">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{election.totalVotes} votes</span>
                </div>
                
                <div className="flex items-center text-foreground/60">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{election.timeLeft} left</span>
                </div>
                
                <div className="flex items-center text-accent">
                  <Trophy className="h-3 w-3 mr-1" />
                  <span>{election.tokenReward} BVS</span>
                </div>
              </div>
              
              {!election.hasVoted ? (
                <Link to="/voting">
                  <Button size="sm" className="w-full">
                    Cast Vote (Earn {election.tokenReward} BVS)
                  </Button>
                </Link>
              ) : (
                <Link to="/voting">
                  <Button size="sm" variant="outline" className="w-full">
                    View Results
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Link to="/voting">
            <Button variant="outline" size="sm" className="text-xs">
              View Past Elections
            </Button>
          </Link>
          
          <span className="text-xs text-foreground/60 flex items-center">
            <Info className="h-3 w-3 mr-1" />
            Voting is verified on blockchain
          </span>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ActiveVotes;
