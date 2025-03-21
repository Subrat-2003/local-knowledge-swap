import { useState } from 'react';
import { Sparkles, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Skill } from '@/data/skillsData';
import { useNavigate } from 'react-router-dom';

type SkillCardProps = {
  skill: Skill;
  isOffered?: boolean;
  className?: string;
};

const SkillCard = ({ skill, isOffered = true, className }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleRequestExchange = () => {
    navigate(`/exchange?tab=sent&skill=${encodeURIComponent(skill.name)}`);
  };
  
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden card-hover relative",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-3 right-3 z-10">
        <div className="skill-chip text-xs animate-appear">
          {isOffered ? 'Offering' : 'Seeking'}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div 
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl",
              "bg-gradient-to-br from-primary to-primary/70 transition-transform duration-300",
              isHovered && "scale-110"
            )}
          >
            {skill.userAvatar ? (
              <img 
                src={skill.userAvatar} 
                alt={skill.userName} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              skill.userName ? skill.userName.charAt(0) : "?"
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1 flex items-center">
              {skill.name}
            </h3>
            {skill.userName && (
              <p className="text-sm font-medium text-muted-foreground mb-1">
                by {skill.userName}
              </p>
            )}
            <div className="flex items-center text-xs text-muted-foreground space-x-3">
              {skill.location && (
                <span className="flex items-center">
                  <MapPin size={12} className="mr-1" />
                  {skill.location}
                </span>
              )}
              {skill.duration && (
                <span className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  {skill.duration}
                </span>
              )}
              {skill.rating && (
                <span className="flex items-center">
                  <Star size={12} className="mr-1 text-amber-500" />
                  {skill.rating}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-muted-foreground">
          {skill.description}
        </p>
        
        <div className="mt-5 space-x-2 flex justify-between items-center">
          <span className="skill-chip text-xs">
            {skill.category}
          </span>
          
          <Button 
            size="sm" 
            className={cn(
              "transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-80"
            )}
            onClick={handleRequestExchange}
          >
            <Sparkles size={14} className="mr-1" />
            {isOffered ? 'Request Exchange' : 'Offer Help'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
