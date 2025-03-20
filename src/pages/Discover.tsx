import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skill } from '@/data/skillsData';
import SkillMatchCard from '@/components/SkillMatchCard';
import { availableSkills, skillCategories } from '@/data/skillsData';

type EnrichedSkill = Skill & { 
  matchPercentage: number;
  distance: string;
};

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [skillsData, setSkillsData] = useState<EnrichedSkill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<EnrichedSkill[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Transform availableSkills to include the additional properties
    const enrichedSkills = availableSkills.map(skill => ({
      ...skill,
      matchPercentage: Math.floor(Math.random() * 40) + 60, // 60-100%
      distance: `${(Math.random() * 20).toFixed(1)} miles`,
      location: skill.location || ["Chicago", "Seattle", "Austin", "Miami", "Denver", "Portland"][Math.floor(Math.random() * 6)],
      duration: skill.duration || ["30 min", "1 hour", "1.5 hours", "2 hours"][Math.floor(Math.random() * 4)],
      rating: skill.rating || Number((Math.random() * 1.5 + 3.5).toFixed(1)),
      userName: skill.userName || ["David Chen", "Marie Dubois", "James Wilson", "Sofia Martinez", "Robert Johnson", "Emma Wilson"][Math.floor(Math.random() * 6)]
    }));
    
    setSkillsData(enrichedSkills);
    setFilteredSkills(enrichedSkills);
  }, []);
  
  useEffect(() => {
    // Filter skills based on search term, location, and category
    const filtered = skillsData.filter(skill => {
      const matchesSearch = !searchTerm || 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !locationFilter || 
        skill.location.toLowerCase().includes(locationFilter.toLowerCase());
        
      const matchesCategory = !categoryFilter ||
        skill.category === categoryFilter;
      
      return matchesSearch && matchesLocation && matchesCategory;
    });
    
    setFilteredSkills(filtered);
  }, [searchTerm, locationFilter, categoryFilter, skillsData]);
  
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
            
            <div className="flex gap-2">
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {skillCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <Button 
                className="h-10 gap-2 whitespace-nowrap"
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  setCategoryFilter('');
                }}
              >
                <Filter size={16} />
                Reset Filters
              </Button>
            </div>
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
            <Button onClick={() => { setSearchTerm(''); setLocationFilter(''); setCategoryFilter(''); }}>
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
