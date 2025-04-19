
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { games } from '../../data/games';
import { Gamepad2 } from 'lucide-react';

const GamesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    game.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-games">
          <Gamepad2 className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Games</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Discover and play exciting online games. Click on any title to view more details and find where to play them.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input 
            type="text"
            placeholder="Search games by title or studio..."
            className="search-input focus:ring-games w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredGames.map(game => (
            <MediaCard 
              key={game.id}
              id={game.id}
              title={game.title}
              coverImage={game.coverImage}
              basePath="/games"
            />
          ))}
          
          {filteredGames.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No games found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GamesPage;
