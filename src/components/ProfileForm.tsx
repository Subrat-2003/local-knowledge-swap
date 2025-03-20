
import { useState } from 'react';
import { Plus, X, Check, MapPin, UserPlus, BadgeCheck, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { skillCategories as categories, availableSkills } from '@/data/skillsData';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const [offeredSkills, setOfferedSkills] = useState<string[]>([]);
  const [desiredSkills, setDesiredSkills] = useState<string[]>([]);
  const [newOfferedSkill, setNewOfferedSkill] = useState('');
  const [newDesiredSkill, setNewDesiredSkill] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Technology');
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const addOfferedSkill = () => {
    if (newOfferedSkill && offeredSkills.length < 5) {
      setOfferedSkills([...offeredSkills, `${selectedCategory}: ${newOfferedSkill}`]);
      setNewOfferedSkill('');
      
      toast({
        title: "Skill added",
        description: "Your skill has been added to your profile.",
        variant: "default"
      });
    }
  };
  
  const addDesiredSkill = () => {
    if (newDesiredSkill && desiredSkills.length < 5) {
      setDesiredSkills([...desiredSkills, `${selectedCategory}: ${newDesiredSkill}`]);
      setNewDesiredSkill('');
      
      toast({
        title: "Learning interest added",
        description: "Your learning interest has been added to your profile.",
        variant: "default"
      });
    }
  };
  
  const removeOfferedSkill = (index: number) => {
    setOfferedSkills(offeredSkills.filter((_, i) => i !== index));
  };
  
  const removeDesiredSkill = (index: number) => {
    setDesiredSkills(desiredSkills.filter((_, i) => i !== index));
  };
  
  const handleVerification = () => {
    setIsVerified(true);
    toast({
      title: "Profile verified",
      description: "Your profile has been verified successfully.",
    });
  };
  
  const handleSaveProfile = () => {
    // Validate required fields
    if (!name || !email || !location) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields before saving.",
        variant: "destructive"
      });
      return;
    }
    
    // Show saving state
    setIsSaving(true);
    
    // Simulate saving to backend
    setTimeout(() => {
      // Here we would connect to a backend to save the profile
      const profileData = {
        name,
        email,
        location,
        bio,
        isVerified,
        offeredSkills,
        desiredSkills,
        dateCreated: new Date().toISOString()
      };
      
      // Store in local storage for persistence between page refreshes
      localStorage.setItem('userProfile', JSON.stringify(profileData));
      
      setIsSaving(false);
      
      toast({
        title: "Profile saved successfully",
        description: "Your skills are now visible in the marketplace.",
      });
      
      // Redirect to discover page to see skills
      navigate('/discover');
    }, 1500);
  };
  
  const handleOfferedKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addOfferedSkill();
    }
  };
  
  const handleDesiredKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addDesiredSkill();
    }
  };
  
  return (
    <div className="glass-card rounded-xl p-6 md:p-8 max-w-3xl w-full mx-auto animate-appear">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Create Profile</h2>
        {isVerified ? (
          <div className="flex items-center text-sm text-green-600">
            <BadgeCheck size={16} className="mr-1.5" />
            Verified Profile
          </div>
        ) : (
          <Button variant="outline" size="sm" onClick={handleVerification}>
            <BadgeCheck size={14} className="mr-1.5" />
            Verify Profile
          </Button>
        )}
      </div>
      
      <div className="space-y-8">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name <span className="text-destructive">*</span></label>
              <Input 
                placeholder="Enter your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1.5">Email <span className="text-destructive">*</span></label>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1.5">Location <span className="text-destructive">*</span></label>
            <div className="relative">
              <Input 
                placeholder="Enter your location" 
                className="pl-9"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              You'll be matched with others within a 25-mile radius
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Bio <span className="text-muted-foreground text-xs">({bio.length}/200)</span>
            </label>
            <Textarea 
              placeholder="Briefly tell us about yourself..." 
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 200))}
              className="resize-none"
              rows={3}
            />
          </div>
        </div>
        
        {/* Skills Offered */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Skills You're Offering</h3>
          <p className="text-sm text-muted-foreground">
            Add up to 5 skills that you can teach or share with others
          </p>
          
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {offeredSkills.map((skill, index) => (
              <div 
                key={`offered-${index}`}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-secondary text-sm"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeOfferedSkill(index)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                  aria-label={`Remove ${skill}`}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          
          {offeredSkills.length < 5 && (
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <div className="flex flex-1 gap-2">
                <Input
                  placeholder="Add a skill you can teach..."
                  value={newOfferedSkill}
                  onChange={(e) => setNewOfferedSkill(e.target.value)}
                  onKeyDown={handleOfferedKeyDown}
                />
                <Button size="icon" type="button" onClick={addOfferedSkill} aria-label="Add skill">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Skills Desired */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Skills You Want to Learn</h3>
          <p className="text-sm text-muted-foreground">
            Add up to 5 skills that you're interested in learning
          </p>
          
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {desiredSkills.map((skill, index) => (
              <div 
                key={`desired-${index}`}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-primary/10 text-sm"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeDesiredSkill(index)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                  aria-label={`Remove ${skill}`}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          
          {desiredSkills.length < 5 && (
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <div className="flex flex-1 gap-2">
                <Input
                  placeholder="Add a skill you want to learn..."
                  value={newDesiredSkill}
                  onChange={(e) => setNewDesiredSkill(e.target.value)}
                  onKeyDown={handleDesiredKeyDown}
                />
                <Button size="icon" type="button" onClick={addDesiredSkill} aria-label="Add skill">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Save Button */}
        <div className="pt-4 border-t flex flex-col sm:flex-row gap-3 justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Your profile will be visible to other users in your area
          </p>
          <Button 
            className="w-full sm:w-auto" 
            onClick={handleSaveProfile}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                Saving Profile
              </>
            ) : (
              <>
                <Save size={16} className="mr-2" />
                Save Profile
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
