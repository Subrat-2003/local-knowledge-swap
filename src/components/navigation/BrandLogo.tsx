
import { Link } from 'react-router-dom';
import { Recycle } from 'lucide-react';

export const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <div className="relative">
          <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
            <Recycle size={20} className="text-white" />
          </div>
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-400 rounded-full animate-pulse" />
        </div>
        <div className="ml-2 font-bold text-lg">
          <span className="text-green-600">Eco</span>
          <span className="text-muted-foreground">Waste</span>
        </div>
      </div>
    </Link>
  );
};
