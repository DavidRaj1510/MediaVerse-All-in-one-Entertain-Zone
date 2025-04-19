
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Film, Tv, BookOpen, Newspaper, PlaySquare } from 'lucide-react';

interface MediaCategoryProps {
  icon: React.ElementType;
  color: string;
  title: string;
  path: string;
}

const MediaCategory: React.FC<MediaCategoryProps> = ({ icon: Icon, color, title, path }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
      style={{ backgroundColor: `${color}22` }}
      onClick={() => navigate(path)}
    >
      <Icon size={48} style={{ color }} />
      <h3 className="mt-2 text-lg font-bold" style={{ color }}>{title}</h3>
    </div>
  );
};

const SimplifiedMediaNav: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      <MediaCategory 
        icon={Book} 
        color="#FF3A3A" 
        title="Comics" 
        path="/comics"
      />
      <MediaCategory 
        icon={Tv} 
        color="#3A57FF" 
        title="Anime" 
        path="/anime"
      />
      <MediaCategory 
        icon={BookOpen} 
        color="#FFA53A" 
        title="Novels" 
        path="/novels"
      />
      <MediaCategory 
        icon={Newspaper} 
        color="#3AFFC5" 
        title="Magazines" 
        path="/magazines"
      />
      <MediaCategory 
        icon={Film} 
        color="#C53AFF" 
        title="Cartoons" 
        path="/cartoons"
      />
      <MediaCategory 
        icon={PlaySquare} 
        color="#FFD43A" 
        title="Movies" 
        path="/movies"
      />
    </div>
  );
};

export default SimplifiedMediaNav;
