
import { useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import SkillCard from '@/components/SkillCard';
import { Link } from 'react-router-dom';
import { Skill } from '@/data/skillsData';

const featuredSkills: Skill[] = [
  {
    id: '1',
    name: 'Guitar Lessons for Beginners',
    category: 'Music',
    description: 'Learn the basics of guitar playing with simple techniques for complete beginners.',
    location: 'Chicago',
    duration: '1 hour',
    rating: 4.8,
    userName: 'David Chen'
  },
  {
    id: '2',
    name: 'French Cooking Basics',
    category: 'Cooking',
    description: 'Master the foundation of French cuisine with simple ingredients and techniques.',
    location: 'Seattle',
    duration: '2 hours',
    rating: 4.9,
    userName: 'Marie Dubois'
  },
  {
    id: '3',
    name: 'Photography Fundamentals',
    category: 'Arts & Crafts',
    description: 'Learn composition, lighting, and camera settings to take better photos.',
    location: 'Austin',
    duration: '1.5 hours',
    rating: 4.7,
    userName: 'James Wilson'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
      
      {/* Featured Skills Section */}
      <section className="py-20 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of the amazing skills being shared in communities near you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSkills.map((skill) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                className="h-full"
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/discover">
              <Button className="gap-2">
                Explore All Skills
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process to start sharing and learning skills in your community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/profile" className="block w-full">
              <div className="glass-card rounded-xl p-6 text-center h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-primary">1</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up and list the skills you can offer and the ones you want to learn.
                </p>
              </div>
            </Link>
            
            <Link to="/discover" className="block w-full">
              <div className="glass-card rounded-xl p-6 text-center h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-primary">2</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Match & Connect</h3>
                <p className="text-muted-foreground">
                  Our system will match you with people in your area based on your skills.
                </p>
              </div>
            </Link>
            
            <Link to="/exchange" className="block w-full">
              <div className="glass-card rounded-xl p-6 text-center h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-primary">3</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Exchange & Grow</h3>
                <p className="text-muted-foreground">
                  Schedule sessions, exchange skills using coins, and build your community.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/profile">
              <Button className="gap-2">
                Join Now
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from people who have already started their skill exchange journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="glass-card rounded-xl p-6">
              <p className="text-lg italic mb-4">
                "I've always wanted to learn photography but courses were too expensive. 
                Through SkillShare, I exchanged my Spanish language skills for photography lessons.
                It's been an amazing experience!"
              </p>
              <footer className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                  M
                </div>
                <div>
                  <cite className="font-medium not-italic">Maria Rodriguez</cite>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </footer>
            </blockquote>
            
            <blockquote className="glass-card rounded-xl p-6">
              <p className="text-lg italic mb-4">
                "I taught web development to someone in my neighborhood while learning 
                woodworking in return. The platform made it easy to find the perfect match
                and schedule our sessions."
              </p>
              <footer className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                  T
                </div>
                <div>
                  <cite className="font-medium not-italic">Thomas Johnson</cite>
                  <p className="text-sm text-muted-foreground">Boston, MA</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Sharing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community today and begin exchanging skills with people near you.
            No money needed—just your knowledge and willingness to learn.
          </p>
          <Link to="/profile">
            <Button size="lg" className="px-8 h-12 text-base">Create Your Profile</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
