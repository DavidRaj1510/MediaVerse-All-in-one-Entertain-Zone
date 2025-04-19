
import React, { useState } from 'react';
import { PlaySquare } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import MediaCard from '../../components/MediaCard';
import { movies } from '../../data/movies';

const MoviesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center mb-10 text-movies">
          <PlaySquare className="h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold">Movies</h1>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Discover popular movies across streaming platforms. Click on any title to view more details and find
          where to watch them.
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search movies by title or director..."
            className="search-input focus:ring-movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredMovies.map(movie => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImage={movie.coverImage}
              basePath="/movies"
            />
          ))}
          
          {filteredMovies.length === 0 && (
            <div className="col-span-6 text-center py-20">
              <p className="text-gray-400">No movies found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
