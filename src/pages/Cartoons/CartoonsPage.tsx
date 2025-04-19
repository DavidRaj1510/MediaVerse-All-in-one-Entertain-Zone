
import React, { useState } from 'react';
import { Film } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { cartoons } from '../../data/cartoons';

const CartoonsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCartoons = cartoons.filter(cartoon => 
    cartoon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cartoon.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-cartoons">
          <Film className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Cartoons</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Enjoy classic and modern animated cartoons. Click on any title to view more details and find
          where to watch episodes.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search cartoons by title or studio..."
            className="search-input focus:ring-cartoons"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredCartoons.map(cartoon => (
            <MediaCard
              key={cartoon.id}
              id={cartoon.id}
              title={cartoon.title}
              coverImage={cartoon.coverImage}
              basePath="/cartoons"
            />
          ))}
          
          {filteredCartoons.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No cartoons found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartoonsPage;
