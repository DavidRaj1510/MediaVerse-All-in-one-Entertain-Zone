import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Book, Film, Tv, BookOpen, Newspaper, PlaySquare, LogIn, User, MonitorPlay, Gamepad2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const NavItem = ({ 
  to, 
  icon: Icon, 
  label, 
  color 
}: { 
  to: string; 
  icon: React.ElementType; 
  label: string; 
  color: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 nav-item-hover nav-item-${color}`}
      style={{ color: isActive ? `var(--tw-${color})` : 'inherit' }}
    >
      <Icon className={`h-5 w-5 ${isActive ? `text-${color}` : ''}`} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    // Check initial session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="w-full bg-[#141414] py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#e50914]">MediaVerse</Link>
        
        <nav className="flex items-center gap-6">
          <NavItem to="/comics" icon={Book} label="Comics" color="comics" />
          <NavItem to="/anime" icon={Tv} label="Anime" color="anime" />
          <NavItem to="/novels" icon={BookOpen} label="Novels" color="novels" />
          <NavItem to="/kdramas" icon={MonitorPlay} label="K-Dramas" color="kdramas" />
          <NavItem to="/magazines" icon={Newspaper} label="Magazines" color="magazines" />
          <NavItem to="/cartoons" icon={Film} label="Cartoons" color="cartoons" />
          <NavItem to="/movies" icon={PlaySquare} label="Movies" color="movies" />
          <NavItem to="/games" icon={Gamepad2} label="Games" color="games" />

          {user ? (
            <Link 
              to="/profile" 
              className="flex items-center gap-2 text-[#e50914] hover:text-red-400 transition-colors duration-300"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          ) : (
            <Link 
              to="/auth" 
              className="flex items-center gap-2 text-white bg-[#e50914] hover:bg-[#f40612] py-1 px-4 rounded transition-colors duration-300"
            >
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
