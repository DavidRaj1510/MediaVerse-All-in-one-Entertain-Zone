
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { novels } from '../../data/novels';

const NovelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const novel = novels.find(novel => novel.id === id);
  
  if (!novel) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Novel not found</h1>
            <Link to="/novels" className="text-novels hover:underline">
              Back to Novels
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Create encoded search query for external sites
  const encodedTitle = encodeURIComponent(novel.title);
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/novels" className="inline-flex items-center text-novels hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to Novels</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={novel.coverImage}
                alt={novel.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-novels">{novel.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Author</h2>
              <p className="text-white text-xl">{novel.author}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{novel.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-2">More Information</h2>
              <p className="text-gray-300">Information about {novel.title} is currently being loaded. Please check back shortly.</p>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Read</h2>
              <div className="flex flex-wrap gap-3">
                {novel.readLink && (
                  <a 
                    href={novel.readLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-novels hover:bg-novels/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Read Online</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                <a 
                  href={`https://www.gutenberg.org/ebooks/search/?query=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#36454F] hover:bg-[#36454F]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Project Gutenberg</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.goodreads.com/search?q=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#553B08] hover:bg-[#553B08]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Goodreads</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.royalroad.com/fictions/search?keyword=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0062cc] hover:bg-[#0062cc]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on RoyalRoad</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.webnovel.com/search?keywords=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#ff6b00] hover:bg-[#ff6b00]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on WebNovel</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.wattpad.com/search/${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#FF6600] hover:bg-[#FF6600]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Wattpad</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://archiveofourown.org/works/search?work_search[query]=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#990000] hover:bg-[#990000]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Archive of Our Own</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.scribblehub.com/?s=${encodedTitle}&post_type=fictionposts`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#87CEEB] hover:bg-[#87CEEB]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Scribble Hub</span>
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

export default NovelDetailPage;
