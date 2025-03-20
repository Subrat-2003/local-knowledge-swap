
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Skill } from './SkillCard';

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
        "glass-card rounded-xl overflow-hidden card-hover",
        className
      )}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl bg-gradient-to-br from-primary to-primary/70">
              {skill.userAvatar ? (
                <img 
                  src={skill.userAvatar} 
                  alt={skill.userName} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                skill.userName.charAt(0)
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
              <p className="text-sm font-medium text-muted-foreground">
                by {skill.userName}
              </p>
            </div>
          </div>
          
          <div>
            <div className="text-center">
              <div className="relative w-14 h-14">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle 
                    cx="18" cy="18" r="16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-secondary"
                  />
                  <circle 
                    cx="18" cy="18" r="16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="100" 
                    strokeDashoffset={100 - matchPercentage} 
                    className="text-primary" 
                    transform="rotate(-90 18 18)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  {matchPercentage}%
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Match</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="skill-chip text-xs">{skill.category}</span>
          <span className="flex items-center text-xs text-muted-foreground">
            <MapPin size={12} className="mr-1" />
            {distance} away
          </span>
          <span className="flex items-center text-xs text-muted-foreground">
            <Clock size={12} className="mr-1" />
            {skill.duration}
          </span>
          <span className="flex items-center text-xs text-muted-foreground">
            <Star size={12} className="mr-1 text-amber-500" />
            {skill.rating}
          </span>
        </div>
        
        <p className="mt-3 text-sm text-muted-foreground">
          {skill.description}
        </p>
        
        <div className="mt-5 flex justify-between items-center">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Calendar size={14} />
            View Availability
          </Button>
          
          <Button size="sm">Request Exchange</Button>
        </div>
      </div>
    </div>
  );
};

export default SkillMatchCard;
