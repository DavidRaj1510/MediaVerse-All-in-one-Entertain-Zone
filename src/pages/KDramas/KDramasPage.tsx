
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { kdramas } from '../../data/kdramas';
import { MonitorPlay } from 'lucide-react';

const KDramasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredKDramas = kdramas.filter(kdrama => 
    kdrama.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    kdrama.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-kdramas">
          <MonitorPlay className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">K-Dramas</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Explore popular Korean dramas. Click on any title to view more details and find
          where to watch episodes.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input 
            type="text"
            placeholder="Search K-Dramas by title or studio..."
            className="search-input focus:ring-kdramas w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredKDramas.map(kdrama => (
            <MediaCard 
              key={kdrama.id}
              id={kdrama.id}
              title={kdrama.title}
              coverImage={kdrama.coverImage}
              basePath="/kdramas"
            />
          ))}
          
          {filteredKDramas.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No K-Dramas found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default KDramasPage;
