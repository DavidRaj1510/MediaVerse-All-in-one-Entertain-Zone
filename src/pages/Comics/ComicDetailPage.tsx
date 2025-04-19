
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { comics } from '../../data/comics';

const ComicDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const comic = comics.find(comic => comic.id === id);
  
  if (!comic) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Comic not found</h1>
            <Link to="/comics" className="text-comics hover:underline">
              Back to Comics
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Create encoded search query for external sites
  const encodedTitle = encodeURIComponent(comic.title);
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/comics" className="inline-flex items-center text-comics hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to Comics</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={comic.coverImage}
                alt={comic.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-comics">{comic.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Publisher</h2>
              <p className="text-white text-xl">{comic.publisher}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Author</h2>
              <p className="text-white text-xl">{comic.author}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{comic.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-2">More Information</h2>
              <p className="text-gray-300">Information about {comic.title} is currently being loaded. Please check back shortly.</p>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Read</h2>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={comic.readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-comics hover:bg-comics/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Read Official</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                {comic.publisher.toLowerCase().includes('marvel') && (
                  <a 
                    href={`https://www.marvel.com/comics/search?title=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#ED1D24] hover:bg-[#ED1D24]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Marvel Comics</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {comic.publisher.toLowerCase().includes('dc') && (
                  <a 
                    href={`https://www.dccomics.com/comics?search=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0074E8] hover:bg-[#0074E8]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>DC Comics</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {comic.publisher.toLowerCase().includes('image') && (
                  <a 
                    href={`https://imagecomics.com/comics/series/${encodedTitle.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#000000] hover:bg-[#000000]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Image Comics</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {comic.publisher.toLowerCase().includes('shueisha') && (
                  <a 
                    href={`https://www.viz.com/search?search=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#00A0DF] hover:bg-[#00A0DF]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>VIZ Media</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                <a 
                  href={`https://www.comixology.com/search/items?search=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0F0C28] hover:bg-[#0F0C28]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>ComiXology</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://readcomiconline.li/Search/Comic?keyword=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#6A329F] hover:bg-[#6A329F]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Read Comic Online</span>
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

export default ComicDetailPage;
