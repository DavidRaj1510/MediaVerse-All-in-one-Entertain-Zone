
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { magazines } from '../../data/magazines';

const MagazineDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const magazine = magazines.find(magazine => magazine.id === id);
  
  if (!magazine) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Magazine not found</h1>
            <Link to="/magazines" className="text-magazines hover:underline">
              Back to Magazines
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Create encoded search query for external sites
  const encodedTitle = encodeURIComponent(magazine.title);
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/magazines" className="inline-flex items-center text-magazines hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to Magazines</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={magazine.coverImage}
                alt={magazine.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-magazines">{magazine.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Publisher</h2>
              <p className="text-white text-xl">{magazine.publisher}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{magazine.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-2">More Information</h2>
              <p className="text-gray-300">Information about {magazine.title} is currently being loaded. Please check back shortly.</p>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Read</h2>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={magazine.readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-magazines hover:bg-magazines/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Read on Issuu</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://issuu.com/search?q=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#F26F21] hover:bg-[#F26F21]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find More on Issuu</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.magzter.com/search/${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#FF0000] hover:bg-[#FF0000]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Magzter</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.zinio.com/search/${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#007DB7] hover:bg-[#007DB7]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Zinio</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a 
                  href={`https://www.scribd.com/search?query=${encodedTitle}&content_type=magazines`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1A7BBA] hover:bg-[#1A7BBA]/80 text-white py-2 px-4 rounded-md transition-all"
                >
                  <span>Find on Scribd</span>
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

export default MagazineDetailPage;
