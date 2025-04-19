
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Film } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { movies } from '../../data/movies';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(movie => movie.id === id);
  
  if (!movie) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Movie not found</h1>
            <Link to="/movies" className="text-movies hover:underline">
              Back to Movies
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Create encoded search query for external sites
  const encodedTitle = encodeURIComponent(movie.title);
  
  // Generate YouTube trailer URL based on movie title only (since releaseYear might not exist)
  const youtubeTrailerUrl = `https://www.youtube.com/embed/search?q=${encodeURIComponent(movie.title + ' official trailer')}`;
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/movies" className="inline-flex items-center text-movies hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to Movies</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={movie.coverImage}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-movies">{movie.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Director</h2>
              <p className="text-white text-xl">{movie.director}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{movie.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-3">Official Trailer</h2>
              <div className="mt-3 bg-black/30 rounded-lg p-4">
                <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={youtubeTrailerUrl}
                    title={`${movie.title} Official Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Watch</h2>
              <div className="flex flex-wrap gap-3">
                {movie.netflixLink && (
                  <a 
                    href={movie.netflixLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#E50914] hover:bg-[#E50914]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Netflix</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {movie.primeLink && (
                  <a 
                    href={movie.primeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#00A8E1] hover:bg-[#00A8E1]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Prime Video</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {movie.ibommaLink && (
                  <a 
                    href={movie.ibommaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FF9933] hover:bg-[#FF9933]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on iBOMMA</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                <a 
                  href={`https://www.justwatch.com/us/search?q=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#FFC107] hover:bg-[#FFC107]/80 text-black py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on JustWatch</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.disneyplus.com/search?q=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0063e5] hover:bg-[#0063e5]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Disney+</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.max.com/search?q=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#5921CF] hover:bg-[#5921CF]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>HBO Max</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://tubitv.com/search/${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#FF5252] hover:bg-[#FF5252]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Tubi TV</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://moviesjoy.plus/search/${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>MoviesJoy</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetailPage;
