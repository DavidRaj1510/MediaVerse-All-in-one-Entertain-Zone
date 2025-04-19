
import React, { useState } from 'react';
import { Book } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { comics } from '../../data/comics';

const ComicsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredComics = comics.filter(comic => 
    comic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comic.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comic.publisher.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-comics">
          <Book className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Comics</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Explore popular comics and graphic novels. Click on any title to view more details and find
          where to read them.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search comics by title, author or publisher..."
            className="search-input focus:ring-comics"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredComics.map(comic => (
            <MediaCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              coverImage={comic.coverImage}
              basePath="/comics"
            />
          ))}
          
          {filteredComics.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No comics found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ComicsPage;
