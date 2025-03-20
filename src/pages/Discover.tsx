
import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skill } from '@/components/SkillCard';
import SkillMatchCard from '@/components/SkillMatchCard';

const dummySkills: (Skill & { matchPercentage: number, distance: string })[] = [
  {
    id: '1',
    name: 'Guitar Lessons for Beginners',
    category: 'Music',
    description: 'Learn the basics of guitar playing with simple techniques for complete beginners.',
    location: 'Chicago',
    duration: '1 hour',
    rating: 4.8,
    userName: 'David Chen',
    matchPercentage: 92,
    distance: '2.3 miles'
  },
  {
    id: '2',
    name: 'French Cooking Basics',
    category: 'Cooking',
    description: 'Master the foundation of French cuisine with simple ingredients and techniques.',
    location: 'Seattle',
    duration: '2 hours',
    rating: 4.9,
    userName: 'Marie Dubois',
    matchPercentage: 87,
    distance: '4.1 miles'
  },
  {
    id: '3',
    name: 'Digital Photography',
    category: 'Arts & Crafts',
    description: 'Learn composition, lighting, and camera settings to take better photos.',
    location: 'Austin',
    duration: '1.5 hours',
    rating: 4.7,
    userName: 'James Wilson',
    matchPercentage: 82,
    distance: '3.5 miles'
  },
  {
    id: '4',
    name: 'Spanish Conversation Practice',
    category: 'Languages',
    description: 'Practice conversational Spanish with a fluent speaker for all levels.',
    location: 'Miami',
    duration: '1 hour',
    rating: 4.6,
    userName: 'Sofia Martinez',
    matchPercentage: 79,
    distance: '5.2 miles'
  },
  {
    id: '5',
    name: 'Basic Home Repairs',
    category: 'Home Improvement',
    description: 'Learn essential home repair skills that can save you money and time.',
    location: 'Denver',
    duration: '2 hours',
    rating: 4.9,
    userName: 'Robert Johnson',
    matchPercentage: 74,
    distance: '7.8 miles'
  },
  {
    id: '6',
    name: 'Yoga for Beginners',
    category: 'Sports & Fitness',
    description: 'Introduction to yoga basics with focus on proper alignment and breathing.',
    location: 'Portland',
    duration: '1 hour',
    rating: 4.8,
    userName: 'Emma Wilson',
    matchPercentage: 68,
    distance: '10.3 miles'
  }
];

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(dummySkills);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Filter skills based on search term and location
    const filtered = dummySkills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !locationFilter || 
        skill.location.toLowerCase().includes(locationFilter.toLowerCase());
      
      return matchesSearch && matchesLocation;
    });
    
    setFilteredSkills(filtered);
  }, [searchTerm, locationFilter]);
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Skills</h1>
          <p className="text-lg text-muted-foreground">
            Find skills to learn from people in your community
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="glass-card rounded-xl p-5 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search skills, categories..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Filter by location..."
                className="pl-9"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
            
            <Button className="h-10 gap-2">
              <Filter size={16} />
              More Filters
            </Button>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {filteredSkills.length} Matching Skills
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles size={16} className="text-primary" />
            Sorted by best match
          </div>
        </div>
        
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <SkillMatchCard
                key={skill.id}
                skill={skill}
                matchPercentage={skill.matchPercentage}
                distance={skill.distance}
                className="h-full"
              />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl p-10 text-center">
            <h3 className="text-xl font-medium mb-2">No matches found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or location filter to find more skills.
            </p>
            <Button onClick={() => { setSearchTerm(''); setLocationFilter(''); }}>
              Clear Filters
            </Button>
          </div>
        )}
        
        {filteredSkills.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">
              Load More
              <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
