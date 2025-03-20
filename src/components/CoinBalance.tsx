
import { useEffect, useState } from 'react';
import { Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

type CoinBalanceProps = {
  balance?: number;
  className?: string;
};

const CoinBalance = ({ balance = 300, className }: CoinBalanceProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Simulate balance change animation
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [balance]);

  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all",
        "bg-secondary/60 text-foreground backdrop-blur-sm",
        isAnimating && "scale-110",
        className
      )}
    >
      <Coins size={16} className="mr-1.5 text-amber-500" />
      <span className={cn(
        "transition-all duration-500",
        isAnimating && "text-amber-500"
      )}>
        {balance}
      </span>
    </div>
  );
};

export default CoinBalance;
