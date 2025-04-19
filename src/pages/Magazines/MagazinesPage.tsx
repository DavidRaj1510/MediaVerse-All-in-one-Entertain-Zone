
import React, { useState } from 'react';
import { Newspaper } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { magazines } from '../../data/magazines';

const MagazinesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMagazines = magazines.filter(magazine => 
    magazine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    magazine.publisher.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-magazines">
          <Newspaper className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Magazines</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Browse top magazines across various topics. Click on any title to view more details and find
          where to read them.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search magazines by title or publisher..."
            className="search-input focus:ring-magazines"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredMagazines.map(magazine => (
            <MediaCard
              key={magazine.id}
              id={magazine.id}
              title={magazine.title}
              coverImage={magazine.coverImage}
              basePath="/magazines"
            />
          ))}
          
          {filteredMagazines.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No magazines found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MagazinesPage;
