
import { Sparkles, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Skill } from '@/data/skillsData';

type SkillMatchCardProps = {
  skill: Skill;
  matchPercentage: number;
  distance: string;
  className?: string;
};

const SkillMatchCard = ({ skill, matchPercentage, distance, className }: SkillMatchCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl bg-gradient-to-br from-primary to-primary/70">
            {skill.userAvatar ? (
              <img 
                src={skill.userAvatar} 
                alt={skill.userName || ''} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              skill.userName ? skill.userName.charAt(0) : "?"
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold flex items-center">
              {skill.name}
              <div className="ml-auto flex items-center text-sm font-medium">
                <Sparkles size={14} className="mr-1 text-amber-500" />
                <span className="text-primary">{matchPercentage}% Match</span>
              </div>
            </h3>
            {skill.userName && (
              <p className="text-sm text-muted-foreground">
                by {skill.userName}
              </p>
            )}
          </div>
        </div>
        
        <p className="mt-4 text-sm text-muted-foreground">
          {skill.description}
        </p>
        
        <div className="mt-4 flex flex-wrap items-center text-xs text-muted-foreground gap-x-3 gap-y-1">
          {skill.location && (
            <span className="flex items-center">
              <MapPin size={12} className="mr-1" />
              {skill.location} ({distance})
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
        
        <div className="mt-4 flex items-center justify-between">
          <span className="skill-chip text-xs">
            {skill.category}
          </span>
          
          <Button size="sm">
            Request Exchange
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillMatchCard;
