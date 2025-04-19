
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Youtube, ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { cartoons } from '../../data/cartoons';

const CartoonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cartoon = cartoons.find(cartoon => cartoon.id === id);
  
  if (!cartoon) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Cartoon not found</h1>
            <Link to="/cartoons" className="text-cartoons hover:underline">
              Back to Cartoons
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Create encoded search query for external sites
  const encodedTitle = encodeURIComponent(cartoon.title);
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/cartoons" className="inline-flex items-center text-cartoons hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to Cartoons</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={cartoon.coverImage}
                alt={cartoon.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-cartoons">{cartoon.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Studio</h2>
              <p className="text-white text-xl">{cartoon.studio}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{cartoon.description}</p>
            </div>
            
            {cartoon.youtubeId && (
              <div className="mb-6">
                <h2 className="text-lg text-gray-400 mb-3">Preview</h2>
                <div className="aspect-video w-full max-w-3xl rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${cartoon.youtubeId}`}
                    title={`${cartoon.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-2">More Information</h2>
              <p className="text-gray-300">Information about {cartoon.title} is currently being loaded. Please check back shortly.</p>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Watch</h2>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={cartoon.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#FF0000] hover:bg-[#FF0000]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on YouTube</span>
                  <Youtube size={16} className="ml-2" />
                </a>
                
                {cartoon.studio.toLowerCase().includes('cartoon network') && (
                  <a 
                    href={`https://www.cartoonnetwork.com/search/index.html?q=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#00a6eb] hover:bg-[#00a6eb]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Cartoon Network</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {cartoon.studio.toLowerCase().includes('disney') && (
                  <a 
                    href="https://www.disneyplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0070e0] hover:bg-[#0070e0]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Disney+</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {cartoon.studio.toLowerCase().includes('nickelodeon') && (
                  <a 
                    href={`https://www.nick.com/search?q=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FF6600] hover:bg-[#FF6600]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Nickelodeon</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                <a 
                  href={`https://www.wco.tv/search?keyword=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#3B82F6] hover:bg-[#3B82F6]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on WCO.tv</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://kimcartoon.li/Search?s=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#10B981] hover:bg-[#10B981]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on KimCartoon</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href="https://pluto.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#6366F1] hover:bg-[#6366F1]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Watch on Pluto TV</span>
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

export default CartoonDetailPage;
