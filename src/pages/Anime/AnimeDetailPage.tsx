
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Youtube } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { anime } from '../../data/anime';

const AnimeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const animeItem = anime.find(item => item.id === id);
  
  if (!animeItem) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Anime not found</h1>
            <Link to="/anime" className="text-anime hover:underline">
              Back to Anime
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Create encoded search query for external sites
  const encodedTitle = encodeURIComponent(animeItem.title);
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/anime" className="inline-flex items-center text-anime hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to Anime</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={animeItem.coverImage}
                alt={animeItem.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-anime">{animeItem.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Studio</h2>
              <p className="text-white text-xl">{animeItem.studio}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{animeItem.description}</p>
            </div>
            
            {animeItem.youtubeId && (
              <div className="mb-6">
                <h2 className="text-lg text-gray-400 mb-3">Preview</h2>
                <div className="aspect-video w-full max-w-3xl rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${animeItem.youtubeId}`}
                    title={`${animeItem.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-2">More Information</h2>
              <p className="text-gray-300">Information about {animeItem.title} is currently being loaded. Please check back shortly.</p>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Watch</h2>
              <div className="flex flex-wrap gap-3">
                {animeItem.crunchyrollLink && (
                  <a 
                    href={animeItem.crunchyrollLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#F47521] hover:bg-[#F47521]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Crunchyroll</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {animeItem.youtubeLink && (
                  <a 
                    href={animeItem.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FF0000] hover:bg-[#FF0000]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on YouTube</span>
                    <Youtube size={16} className="ml-2" />
                  </a>
                )}
                
                {animeItem.hiAnimeLink && (
                  <a 
                    href={animeItem.hiAnimeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#6A64F1] hover:bg-[#6A64F1]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on HiAnime</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                <a 
                  href={`https://gogoanime.cl/search.html?keyword=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#6B7280] hover:bg-[#6B7280]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on GogoAnime</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://9anime.to/filter?keyword=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#292524] hover:bg-[#292524]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on 9anime</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://animepahe.com/search?q=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#EF4444] hover:bg-[#EF4444]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on AnimePahe</span>
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

export default AnimeDetailPage;
