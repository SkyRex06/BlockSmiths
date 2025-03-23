
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { 
  Card, CardContent, CardHeader, CardTitle, 
  CardDescription, CardFooter 
} from '@/components/ui/card';
import { 
  Vote, Users, Clock, Trophy, CheckCircle2, 
  ArrowRight, Filter, BarChart3, AlertTriangle
} from 'lucide-react';
import { toast } from 'sonner';
import Footer from '@/components/landing/Footer';

const Voting = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ongoing');
  const [elections, setElections] = useState({
    ongoing: [
      {
        id: 1,
        title: "Platform Upgrade Proposal",
        organization: "BLOCKSMITHS Community",
        description: "Vote on the proposed updates to the BLOCKSMITHS platform including new UI features and token utility enhancements.",
        totalVotes: 583,
        timeLeft: "2 days, 5 hours",
        tokenReward: 50,
        hasVoted: false,
        options: [
          { id: 1, name: "Approve All Changes", votes: 324 },
          { id: 2, name: "Approve UI Only", votes: 156 },
          { id: 3, name: "Reject All Changes", votes: 103 }
        ]
      },
      {
        id: 2,
        title: "New Governance Model",
        organization: "DAO Collective",
        description: "Choose between three options for our updated DAO governance structure to improve community decision making.",
        totalVotes: 347,
        timeLeft: "4 days, 12 hours",
        tokenReward: 75,
        hasVoted: true,
        votedFor: "Hybrid Council Model",
        options: [
          { id: 1, name: "Direct Democracy Model", votes: 98 },
          { id: 2, name: "Hybrid Council Model", votes: 187 },
          { id: 3, name: "Delegated Voting", votes: 62 }
        ]
      },
      {
        id: 3,
        title: "Treasury Fund Allocation",
        organization: "DecentraVote Inc.",
        description: "Decide how to allocate this quarter's community treasury funds among proposed development projects.",
        totalVotes: 432,
        timeLeft: "1 day, 18 hours",
        tokenReward: 100,
        hasVoted: false,
        options: [
          { id: 1, name: "Ecosystem Growth", votes: 214 },
          { id: 2, name: "Security Audits", votes: 135 },
          { id: 3, name: "Marketing & Partnerships", votes: 83 }
        ]
      }
    ],
    upcoming: [
      {
        id: 4,
        title: "Community Grants Selection",
        organization: "BLOCKSMITHS Foundation",
        description: "Vote for the next batch of community projects to receive funding from the grants program.",
        startTime: "In 3 days",
        duration: "7 days",
        tokenReward: 80,
        options: [
          { id: 1, name: "Educational Content Creation" },
          { id: 2, name: "Accessibility Improvements" },
          { id: 3, name: "Developer Tools" }
        ]
      },
      {
        id: 5,
        title: "Protocol Parameter Adjustment",
        organization: "TechDAO",
        description: "Technical vote on adjusting key protocol parameters for improved performance and security.",
        startTime: "In 5 days",
        duration: "4 days",
        tokenReward: 120,
        options: [
          { id: 1, name: "Increase Block Size" },
          { id: 2, name: "Reduce Transaction Fees" },
          { id: 3, name: "Enhance Cryptographic Security" }
        ]
      }
    ],
    past: [
      {
        id: 6,
        title: "Brand Redesign",
        organization: "BLOCKSMITHS Marketing",
        description: "Select the new visual identity for the BLOCKSMITHS platform rebrand.",
        endDate: "Ended 2 weeks ago",
        totalVotes: 892,
        tokenReward: 60,
        hasVoted: true,
        votedFor: "Modern Minimalist",
        result: "Modern Minimalist",
        options: [
          { id: 1, name: "Modern Minimalist", votes: 512 },
          { id: 2, name: "Bold Futuristic", votes: 267 },
          { id: 3, name: "Classic Professional", votes: 113 }
        ]
      },
      {
        id: 7,
        title: "Partnership Decision",
        organization: "Strategic Council",
        description: "Vote on which strategic partnership BLOCKSMITHS should pursue next.",
        endDate: "Ended 1 month ago",
        totalVotes: 753,
        tokenReward: 40,
        hasVoted: true,
        votedFor: "Fintech Integration",
        result: "Fintech Integration",
        options: [
          { id: 1, name: "Fintech Integration", votes: 389 },
          { id: 2, name: "Gaming Platform", votes: 201 },
          { id: 3, name: "Government Solutions", votes: 163 }
        ]
      }
    ]
  });

  const [selectedElection, setSelectedElection] = useState(null);
  const [votingOption, setVotingOption] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleVoteClick = (electionId, optionId) => {
    setVotingOption(optionId);
    // Get the election from the ongoing elections
    const election = elections.ongoing.find(e => e.id === electionId);
    setSelectedElection(election);
  };

  const handleSubmitVote = () => {
    if (!selectedElection || !votingOption) return;
    
    setIsVoting(true);
    
    // Simulate voting process
    setTimeout(() => {
      // Update the elections state to mark this election as voted
      const updatedElections = {...elections};
      const electionIndex = updatedElections.ongoing.findIndex(e => e.id === selectedElection.id);
      
      if (electionIndex >= 0) {
        // Find the option name that was voted for
        const option = selectedElection.options.find(o => o.id === votingOption);
        const optionName = option ? option.name : 'Unknown option';
        
        // Update the election
        updatedElections.ongoing[electionIndex] = {
          ...updatedElections.ongoing[electionIndex],
          hasVoted: true,
          votedFor: optionName,
          totalVotes: updatedElections.ongoing[electionIndex].totalVotes + 1,
          options: updatedElections.ongoing[electionIndex].options.map(o => 
            o.id === votingOption ? {...o, votes: o.votes + 1} : o
          )
        };
        
        setElections(updatedElections);
        
        // Show success toast
        toast.success(`Vote successful! You earned ${selectedElection.tokenReward} BVS tokens!`);
        
        // Reset states
        setSelectedElection(null);
        setVotingOption(null);
        setIsVoting(false);
      }
    }, 1500);
  };

  const renderElectionCards = (electionList) => {
    return electionList.map((election) => (
      <Card key={election.id} className="glass-card border-accent/10 hover:border-accent/30 transition-colors duration-300 mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{election.title}</CardTitle>
              <p className="text-xs text-foreground/60 mt-1">{election.organization}</p>
            </div>
            
            {activeTab === 'ongoing' && election.hasVoted ? (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-500 flex items-center">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Voted
              </span>
            ) : activeTab === 'ongoing' ? (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent flex items-center">
                <Trophy className="h-3 w-3 mr-1" />
                {election.tokenReward} BVS
              </span>
            ) : activeTab === 'upcoming' ? (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                Coming Soon
              </span>
            ) : (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-foreground/70 flex items-center">
                <BarChart3 className="h-3 w-3 mr-1" />
                Completed
              </span>
            )}
          </div>
          <CardDescription className="mt-2">
            {election.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {/* Election details */}
          <div className="flex flex-wrap items-center justify-between text-xs text-foreground/70 mb-4">
            {activeTab === 'ongoing' && (
              <>
                <div className="flex items-center mr-4 mb-2">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{election.totalVotes} votes</span>
                </div>
                
                <div className="flex items-center mr-4 mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{election.timeLeft} left</span>
                </div>
              </>
            )}
            
            {activeTab === 'upcoming' && (
              <>
                <div className="flex items-center mr-4 mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Starts: {election.startTime}</span>
                </div>
                
                <div className="flex items-center mr-4 mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Duration: {election.duration}</span>
                </div>
              </>
            )}
            
            {activeTab === 'past' && (
              <>
                <div className="flex items-center mr-4 mb-2">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{election.totalVotes} total votes</span>
                </div>
                
                <div className="flex items-center mr-4 mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{election.endDate}</span>
                </div>
              </>
            )}
            
            {(activeTab === 'upcoming' || activeTab === 'past') && (
              <div className="flex items-center mb-2">
                <Trophy className="h-3 w-3 mr-1" />
                <span>Reward: {election.tokenReward} BVS</span>
              </div>
            )}
          </div>
          
          {/* Voting options */}
          <div className="space-y-3">
            {election.options.map((option) => (
              <div 
                key={option.id}
                className={`p-3 border ${
                  election.hasVoted && election.votedFor === option.name
                    ? 'border-green-500/30 bg-green-500/5'
                    : activeTab === 'past' && election.result === option.name
                    ? 'border-accent/30 bg-accent/5'
                    : 'border-accent/10'
                } rounded-lg relative ${
                  activeTab === 'ongoing' && !election.hasVoted ? 'hover:border-accent/30 cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (activeTab === 'ongoing' && !election.hasVoted) {
                    handleVoteClick(election.id, option.id);
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {activeTab === 'ongoing' && !election.hasVoted ? (
                      <div className={`w-4 h-4 rounded-full border ${
                        votingOption === option.id && selectedElection?.id === election.id
                          ? 'border-accent bg-accent/20'
                          : 'border-accent/40'
                      } mr-2`}>
                        {votingOption === option.id && selectedElection?.id === election.id && (
                          <div className="w-2 h-2 bg-accent rounded-full m-0.5"></div>
                        )}
                      </div>
                    ) : election.hasVoted && election.votedFor === option.name ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    ) : activeTab === 'past' && election.result === option.name ? (
                      <Trophy className="h-4 w-4 text-accent mr-2" />
                    ) : (
                      <div className="w-4 h-4 mr-2"></div>
                    )}
                    <span className="font-medium">{option.name}</span>
                  </div>
                  
                  {(activeTab === 'ongoing' || activeTab === 'past') && option.votes !== undefined && (
                    <span className="text-xs text-foreground/70">
                      {option.votes} votes
                    </span>
                  )}
                </div>
                
                {(activeTab === 'ongoing' || activeTab === 'past') && option.votes !== undefined && (
                  <div className="mt-2 w-full bg-muted/50 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${
                        election.hasVoted && election.votedFor === option.name
                          ? 'bg-green-500'
                          : activeTab === 'past' && election.result === option.name
                          ? 'bg-accent'
                          : 'bg-primary/50'
                      }`}
                      style={{ 
                        width: `${Math.round((option.votes / election.totalVotes) * 100)}%` 
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-4">
          {activeTab === 'ongoing' && !election.hasVoted ? (
            <Button 
              className="w-full"
              disabled={selectedElection?.id === election.id}
              onClick={() => setSelectedElection(election)}
            >
              Cast Your Vote
              <Vote className="ml-2 h-4 w-4" />
            </Button>
          ) : activeTab === 'ongoing' && election.hasVoted ? (
            <Button variant="outline" className="w-full">
              View Detailed Results
              <BarChart3 className="ml-2 h-4 w-4" />
            </Button>
          ) : activeTab === 'upcoming' ? (
            <Button variant="outline" className="w-full">
              Set Reminder
              <Clock className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" className="w-full">
              View Full Analysis
              <BarChart3 className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark to-navy-dark/90">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container px-6 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-teal-light bg-clip-text text-transparent">
              BLOCKSMITHS Voting System
            </h1>
            <p className="text-foreground/70 max-w-2xl">
              Cast your vote on important proposals, earn BVS tokens as rewards, and help shape the future of decentralized governance.
            </p>
          </div>
          
          {/* Voting modal */}
          {selectedElection && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <Card className="glass-card border-accent/20 w-full max-w-md">
                <CardHeader>
                  <CardTitle className="text-xl">Cast Your Vote</CardTitle>
                  <CardDescription>
                    {selectedElection.title}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg border border-accent/10 bg-accent/5">
                      <div className="flex items-center text-sm mb-2">
                        <Trophy className="h-4 w-4 text-accent mr-2" />
                        <span>You will earn <span className="font-bold">{selectedElection.tokenReward} BVS</span> tokens for voting</span>
                      </div>
                      
                      <div className="flex items-start text-xs text-foreground/70">
                        <AlertTriangle className="h-3 w-3 text-yellow-500 mr-2 mt-0.5" />
                        <span>Your vote will be recorded on the blockchain and cannot be changed after submission.</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium mb-2">Select one option:</h3>
                      
                      {selectedElection.options.map((option) => (
                        <div 
                          key={option.id}
                          className={`p-3 border ${
                            votingOption === option.id
                              ? 'border-accent bg-accent/10'
                              : 'border-accent/10'
                          } rounded-lg hover:border-accent/30 cursor-pointer`}
                          onClick={() => setVotingOption(option.id)}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border ${
                              votingOption === option.id
                                ? 'border-accent bg-accent/20'
                                : 'border-accent/40'
                            } mr-2`}>
                              {votingOption === option.id && (
                                <div className="w-2 h-2 bg-accent rounded-full m-0.5"></div>
                              )}
                            </div>
                            <span>{option.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between space-x-4">
                  <Button 
                    variant="outline" 
                    className="w-1/2"
                    onClick={() => {
                      setSelectedElection(null);
                      setVotingOption(null);
                    }}
                  >
                    Cancel
                  </Button>
                  
                  <Button 
                    className="w-1/2"
                    disabled={!votingOption || isVoting}
                    onClick={handleSubmitVote}
                  >
                    {isVoting ? (
                      <div className="flex items-center">
                        <div className="h-4 w-4 rounded-full border-2 border-accent border-t-transparent animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit Vote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
          
          {/* Tab navigation */}
          <div className="flex border-b border-accent/20 mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm relative ${
                activeTab === 'ongoing' 
                  ? 'text-accent' 
                  : 'text-foreground/60 hover:text-foreground/80'
              }`}
              onClick={() => setActiveTab('ongoing')}
            >
              Ongoing Elections
              {activeTab === 'ongoing' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </button>
            
            <button
              className={`px-4 py-2 font-medium text-sm relative ${
                activeTab === 'upcoming' 
                  ? 'text-accent' 
                  : 'text-foreground/60 hover:text-foreground/80'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Elections
              {activeTab === 'upcoming' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </button>
            
            <button
              className={`px-4 py-2 font-medium text-sm relative ${
                activeTab === 'past' 
                  ? 'text-accent' 
                  : 'text-foreground/60 hover:text-foreground/80'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Elections
              {activeTab === 'past' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </button>
          </div>
          
          {/* Filter options */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-foreground/70">
              Showing <span className="font-medium text-foreground">{elections[activeTab].length}</span> {activeTab} elections
            </div>
            
            <Button variant="outline" size="sm" className="text-xs">
              <Filter className="h-3 w-3 mr-1" />
              Filter Options
            </Button>
          </div>
          
          {/* Election cards */}
          <div>
            {renderElectionCards(elections[activeTab])}
          </div>
          
          {/* Pagination */}
          {elections[activeTab].length > 0 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="sm" className="mr-2">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-accent/10">
                1
              </Button>
              <Button variant="outline" size="sm" className="ml-2">
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Voting;
