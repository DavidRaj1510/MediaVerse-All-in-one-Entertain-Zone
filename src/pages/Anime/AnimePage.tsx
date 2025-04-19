
import React, { useState } from 'react';
import { Tv } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { anime } from '../../data/anime';

const AnimePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAnime = anime.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-anime">
          <Tv className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Anime</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Discover popular anime series. Click on any title to view more details and find
          where to watch episodes.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search anime by title or studio..."
            className="search-input focus:ring-anime"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredAnime.map(item => (
            <MediaCard
              key={item.id}
              id={item.id}
              title={item.title}
              coverImage={item.coverImage}
              basePath="/anime"
            />
          ))}
          
          {filteredAnime.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No anime found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AnimePage;
