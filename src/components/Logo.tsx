
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="h-8 w-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <Sparkles size={20} className="text-white" />
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-400 rounded-full animate-pulse" />
      </div>
      <div className="ml-2 font-bold text-lg">
        <span className="text-primary">Skill</span>
        <span className="text-muted-foreground">Exchange</span>
      </div>
    </div>
  );
};

export default Logo;
