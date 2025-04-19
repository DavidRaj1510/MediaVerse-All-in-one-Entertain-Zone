
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { novels } from '../../data/novels';

const NovelsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredNovels = novels.filter(novel => 
    novel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    novel.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-novels">
          <BookOpen className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Novels</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Find bestselling novels and literary gems. Click on any title to view more details and find
          where to read them.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search novels by title or author..."
            className="search-input focus:ring-novels"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredNovels.map(novel => (
            <MediaCard
              key={novel.id}
              id={novel.id}
              title={novel.title}
              coverImage={novel.coverImage}
              basePath="/novels"
            />
          ))}
          
          {filteredNovels.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No novels found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NovelsPage;
