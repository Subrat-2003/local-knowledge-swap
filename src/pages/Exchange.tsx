
import { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2, CircleX, Calendar as CalendarIcon, Send, MapPin, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CoinBalance from '@/components/CoinBalance';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogDescription 
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

type ExchangeRequest = {
  id: string;
  skillName: string;
  userName: string;
  userAvatar?: string;
  status: 'pending' | 'confirmed' | 'declined';
  date?: string;
  time?: string;
  location?: string;
  message?: string;
  coins: number;
  addedToCalendar?: boolean;
};

const dummyRequests: ExchangeRequest[] = [
  {
    id: '1',
    skillName: 'Guitar Lessons for Beginners',
    userName: 'David Chen',
    status: 'pending',
    date: 'September 25, 2023',
    time: '3:00 PM - 4:00 PM',
    location: 'Central Park, Gazebo Area',
    message: 'I would love to learn some basic chords and strumming patterns to get started with playing guitar.',
    coins: 50
  },
  {
    id: '2',
    skillName: 'French Cooking Basics',
    userName: 'Marie Dubois',
    status: 'confirmed',
    date: 'September 27, 2023',
    time: '6:00 PM - 8:00 PM',
    location: 'Community Kitchen, 123 Main St',
    message: 'Looking forward to learning how to make some classic French dishes!',
    coins: 50
  },
  {
    id: '3',
    skillName: 'Digital Photography',
    userName: 'James Wilson',
    status: 'declined',
    message: 'I want to improve my photography skills for my travel blog.',
    coins: 50
  }
];

// Custom CoinsIcon component to replace the conflicting imported Coins
const CoinsIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
};

const Exchange = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('received');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [requests, setRequests] = useState<ExchangeRequest[]>(dummyRequests);
  const [selectedRequest, setSelectedRequest] = useState<ExchangeRequest | null>(null);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if we should show the "sent" tab based on URL params
    const searchParams = new URLSearchParams(location.search);
    const showSent = searchParams.get('tab') === 'sent';
    const requestedSkill = searchParams.get('skill');
    
    if (showSent) {
      setActiveTab('sent');
      if (requestedSkill) {
        setSelectedSkill(requestedSkill);
      }
    }
  }, [location]);
  
  useEffect(() => {
    if (selectedDate) {
      const times = [
        '9:00 AM - 10:00 AM',
        '10:30 AM - 11:30 AM',
        '1:00 PM - 2:00 PM',
        '3:30 PM - 4:30 PM',
        '6:00 PM - 7:00 PM'
      ];
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
    setSelectedTime(null);
  }, [selectedDate]);
  
  const calendarDays = [
    { date: new Date(2023, 8, 20), available: true },
    { date: new Date(2023, 8, 21), available: true },
    { date: new Date(2023, 8, 22), available: false },
    { date: new Date(2023, 8, 23), available: true },
    { date: new Date(2023, 8, 24), available: true },
    { date: new Date(2023, 8, 25), available: true },
    { date: new Date(2023, 8, 26), available: false },
    { date: new Date(2023, 8, 27), available: true },
    { date: new Date(2023, 8, 28), available: true },
    { date: new Date(2023, 8, 29), available: false },
    { date: new Date(2023, 8, 30), available: true },
  ];
  
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAcceptRequest = (requestId: string) => {
    // Update the request status
    const updatedRequests = requests.map(req => 
      req.id === requestId ? { ...req, status: 'confirmed' as const } : req
    );
    setRequests(updatedRequests);
    
    toast({
      title: "Request Accepted",
      description: "The skill exchange has been confirmed.",
    });
  };
  
  const handleDeclineRequest = (requestId: string) => {
    const updatedRequests = requests.map(req => 
      req.id === requestId ? { ...req, status: 'declined' as const } : req
    );
    setRequests(updatedRequests);
    
    toast({
      title: "Request Declined",
      description: "The skill exchange request has been declined.",
    });
  };

  const handleDeleteRequest = (requestId: string) => {
    const updatedRequests = requests.filter(req => req.id !== requestId);
    setRequests(updatedRequests);
    
    toast({
      title: "Request Deleted",
      description: "The request has been removed from your list.",
    });
  };

  const handleViewDetails = (request: ExchangeRequest) => {
    setSelectedRequest(request);
  };

  const handleAddToCalendar = (requestId: string) => {
    // Update the request to mark it as added to calendar
    const updatedRequests = requests.map(req => 
      req.id === requestId ? { ...req, addedToCalendar: true } : req
    );
    setRequests(updatedRequests);
    
    toast({
      title: "Added to Calendar",
      description: "The skill exchange session has been added to your calendar.",
    });
  };

  const handleSendRequest = () => {
    if (!selectedSkill) {
      toast({
        title: "Missing information",
        description: "Please select a skill you want to learn.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a date and time for the exchange.",
        variant: "destructive"
      });
      return;
    }

    // Create a new request
    const newRequest = {
      id: `new-${Date.now()}`,
      skillName: selectedSkill,
      userName: "You",
      status: 'pending' as const,
      date: selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      time: selectedTime,
      message: message,
      coins: 50
    };

    // Add the new request to the list
    setRequests([...requests, newRequest]);

    // Clear form fields
    setSelectedSkill('');
    setSelectedDate(null);
    setSelectedTime(null);
    setMessage('');

    // Show success toast
    toast({
      title: "Request Sent",
      description: "Your skill exchange request has been sent successfully.",
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Skill Exchanges</h1>
            <p className="text-lg text-muted-foreground">
              Manage your skill exchange requests and sessions
            </p>
          </div>
          
          <CoinBalance balance={300} className="md:h-10 md:px-4" />
        </div>
        
        <Tabs
          defaultValue="received"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-md mb-8">
            <TabsTrigger value="received" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Received
            </TabsTrigger>
            <TabsTrigger value="sent" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Sent
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Completed
            </TabsTrigger>
          </TabsList>
          
          <div className="animate-fade-in">
            <TabsContent value="received" className="mt-0 space-y-6">
              {requests.filter(req => req.userName !== "You").map((request) => (
                <div 
                  key={request.id} 
                  className="glass-card rounded-xl p-5 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl bg-gradient-to-br from-primary to-primary/70">
                        {request.userAvatar ? (
                          <img 
                            src={request.userAvatar} 
                            alt={request.userName} 
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          request.userName.charAt(0)
                        )}
                      </div>
                      
                      <div>
                        <h2 className="text-lg font-semibold">{request.skillName}</h2>
                        <p className="text-sm text-muted-foreground mb-1">
                          From {request.userName}
                        </p>
                        
                        {request.status === 'pending' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending Response
                          </span>
                        )}
                        
                        {request.status === 'confirmed' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Confirmed
                          </span>
                        )}
                        
                        {request.status === 'declined' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Declined
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-center">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Exchange Fee</p>
                        <div className="flex items-center text-amber-500 font-medium">
                          <CoinsIcon size={16} className="mr-1" />
                          {request.coins}
                        </div>
                      </div>
                      
                      {request.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-destructive"
                            onClick={() => handleDeclineRequest(request.id)}
                          >
                            <CircleX size={14} className="mr-1" />
                            Decline
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleAcceptRequest(request.id)}
                          >
                            <CheckCircle2 size={14} className="mr-1" />
                            Accept
                          </Button>
                        </div>
                      )}
                      
                      {request.status === 'confirmed' && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm"
                              onClick={() => handleViewDetails(request)}
                            >
                              <Calendar size={14} className="mr-1" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle>Exchange Details</DialogTitle>
                              <DialogDescription>
                                Skill exchange session information
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">{request.skillName}</h3>
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle2 size={12} className="mr-1" />
                                  Confirmed
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-br from-primary to-primary/70">
                                  {request.userName.charAt(0)}
                                </div>
                                <span>{request.userName}</span>
                              </div>
                              <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                                <div className="flex items-center gap-2">
                                  <Calendar size={16} className="text-primary" />
                                  <span className="font-medium">Date:</span>
                                  <span>{request.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock size={16} className="text-primary" />
                                  <span className="font-medium">Time:</span>
                                  <span>{request.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin size={16} className="text-primary" />
                                  <span className="font-medium">Location:</span>
                                  <span>{request.location}</span>
                                </div>
                              </div>
                              {request.message && (
                                <div>
                                  <h4 className="text-sm font-medium mb-1">Message:</h4>
                                  <p className="text-sm text-muted-foreground">{request.message}</p>
                                </div>
                              )}
                              <div className="flex items-center justify-between pt-2 border-t">
                                <div className="flex items-center text-amber-500 font-medium">
                                  <CoinsIcon size={16} className="mr-1" />
                                  {request.coins} coins
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleAddToCalendar(request.id)}
                                  disabled={request.addedToCalendar}
                                >
                                  {request.addedToCalendar ? "Added to Calendar" : "Add to Calendar"}
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                      
                      {(request.status === 'declined' || request.status === 'confirmed') && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-destructive"
                          onClick={() => handleDeleteRequest(request.id)}
                        >
                          <Trash2 size={14} className="mr-1" />
                          Delete
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {request.message && (
                    <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-sm">
                      <p className="text-xs font-medium mb-1">Message:</p>
                      <p>{request.message}</p>
                    </div>
                  )}
                  
                  {request.date && request.time && (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1.5 text-muted-foreground" />
                        <span>{request.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1.5 text-muted-foreground" />
                        <span>{request.time}</span>
                      </div>
                      {request.location && (
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1.5 text-muted-foreground" />
                          <span>{request.location}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {requests.filter(req => req.userName !== "You").length === 0 && (
                <div className="glass-card rounded-xl p-6 text-center">
                  <CalendarIcon size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h2 className="text-xl font-medium mb-2">No Exchange Requests</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    You don't have any skill exchange requests yet. Explore skills to connect with others!
                  </p>
                  <Button>Find Skills to Exchange</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="sent" className="mt-0">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">New Exchange Request</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Send a request to exchange skills with someone in your community
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1.5">Skill You Want to Learn</label>
                    <Input 
                      placeholder="Search for a skill or person..." 
                      value={selectedSkill} 
                      onChange={(e) => setSelectedSkill(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Select a Date</label>
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <Button variant="ghost" size="icon">
                            <ChevronLeft size={16} />
                          </Button>
                          <h3 className="text-sm font-medium">September 2023</h3>
                          <Button variant="ghost" size="icon">
                            <ChevronRight size={16} />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1">
                          {calendarDays.map((day, i) => (
                            <Button
                              key={i}
                              variant="ghost"
                              size="sm"
                              className={cn(
                                "h-10 w-10 p-0 rounded-full",
                                !day.available && "opacity-50 cursor-not-allowed",
                                day.date.toDateString() === selectedDate?.toDateString() && 
                                  "bg-primary text-primary-foreground"
                              )}
                              disabled={!day.available}
                              onClick={() => handleSelectDate(day.date)}
                            >
                              {day.date.getDate()}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Select Time Slot {!selectedDate && "(Select a date first)"}
                      </label>
                      <div className="border rounded-lg p-4 h-[161px] overflow-y-auto">
                        {availableTimes.length > 0 ? (
                          <div className="space-y-2">
                            {availableTimes.map((time, i) => (
                              <Button
                                key={i}
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left",
                                  selectedTime === time && "border-primary bg-primary/10"
                                )}
                                onClick={() => setSelectedTime(time)}
                              >
                                <Clock size={14} className="mr-2" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <p className="text-muted-foreground text-sm">
                              {selectedDate ? "No available times" : "Select a date to see available times"}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1.5">
                      Message <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <Textarea 
                      placeholder="Explain why you're interested in learning this skill..."
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Exchange Fee: </span>
                      <span className="font-medium">50 Coins</span>
                    </div>
                    
                    <Button onClick={handleSendRequest}>
                      <Send size={14} className="mr-1.5" />
                      Send Request
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Your Sent Requests</h3>
                
                <div className="space-y-6">
                  {requests.filter(req => req.userName === "You").map((request) => (
                    <div 
                      key={request.id} 
                      className="glass-card rounded-xl p-5 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h2 className="text-lg font-semibold">{request.skillName}</h2>
                          <p className="text-sm text-muted-foreground mb-1">
                            Sent by You
                          </p>
                          
                          {request.status === 'pending' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Awaiting Response
                            </span>
                          )}
                          
                          {request.status === 'confirmed' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Confirmed
                            </span>
                          )}
                          
                          {request.status === 'declined' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Declined
                            </span>
                          )}
                        </div>
                        
                        <div className="flex gap-2 items-center">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Exchange Fee</p>
                            <div className="flex items-center text-amber-500 font-medium">
                              <CoinsIcon size={16} className="mr-1" />
                              {request.coins}
                            </div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-destructive"
                            onClick={() => handleDeleteRequest(request.id)}
                          >
                            <Trash2 size={14} className="mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      
                      {request.message && (
                        <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-sm">
                          <p className="text-xs font-medium mb-1">Message:</p>
                          <p>{request.message}</p>
                        </div>
                      )}
                      
                      {request.date && request.time && (
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1.5 text-muted-foreground" />
                            <span>{request.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1.5 text-muted-foreground" />
                            <span>{request.time}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {requests.filter(req => req.userName === "You").length === 0 && (
                    <p className="text-muted-foreground text-center p-4">
                      You haven't sent any exchange requests yet. Use the form above to request a skill exchange.
                    </p>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <div className="glass-card rounded-xl p-10 text-center">
                <CalendarIcon size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-medium mb-2">No Completed Exchanges Yet</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Once you complete skill exchange sessions, they will appear here with 
                  ratings and reviews.
                </p>
                <Button>Find Skills to Exchange</Button>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Exchange;
