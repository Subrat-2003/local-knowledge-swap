import { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2, CircleX, Calendar as CalendarIcon, Send, MapPin, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CoinBalance from '@/components/CoinBalance';
import { cn } from '@/lib/utils';

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

const Exchange = () => {
  const [activeTab, setActiveTab] = useState('received');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
              {dummyRequests.map((request) => (
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
                          <Coins size={16} className="mr-1" />
                          {request.coins}
                        </div>
                      </div>
                      
                      {request.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-destructive">
                            <CircleX size={14} className="mr-1" />
                            Decline
                          </Button>
                          <Button size="sm">
                            <CheckCircle2 size={14} className="mr-1" />
                            Accept
                          </Button>
                        </div>
                      )}
                      
                      {request.status === 'confirmed' && (
                        <Button size="sm">
                          <Calendar size={14} className="mr-1" />
                          View Details
                        </Button>
                      )}
                      
                      {request.status === 'declined' && (
                        <Button variant="outline" size="sm">
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
                    <Input placeholder="Search for a skill or person..." />
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
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Exchange Fee: </span>
                      <span className="font-medium">50 Coins</span>
                    </div>
                    
                    <Button>
                      <Send size={14} className="mr-1.5" />
                      Send Request
                    </Button>
                  </div>
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

const Coins = (props: any) => {
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

export default Exchange;

