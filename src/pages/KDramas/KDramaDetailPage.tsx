
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { kdramas } from '../../data/kdramas';

const KDramaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const kdrama = kdramas.find(kdrama => kdrama.id === id);
  
  if (!kdrama) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">K-Drama not found</h1>
            <Link to="/kdramas" className="text-kdramas hover:underline">
              Back to K-Dramas
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/kdramas" className="inline-flex items-center text-kdramas hover:underline mb-8">
          <ChevronLeft size={20} />
          <span>Back to K-Dramas</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 media-card max-w-xs mx-auto">
              <img
                src={kdrama.coverImage}
                alt={kdrama.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold mb-2 text-kdramas">{kdrama.title}</h1>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Studio</h2>
              <p className="text-white text-xl">{kdrama.studio}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400">Description</h2>
              <p className="text-white">{kdrama.description}</p>
            </div>
            
            {kdrama.youtubeId && (
              <div className="mb-6">
                <h2 className="text-lg text-gray-400 mb-2">Preview</h2>
                <div className="relative aspect-video max-w-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${kdrama.youtubeId}`}
                    title={`${kdrama.title} trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="text-lg text-gray-400 mb-2">More Information</h2>
              <p className="text-gray-300">Information about {kdrama.title} is currently being loaded. Please check back shortly.</p>
            </div>
            
            <div>
              <h2 className="text-lg text-gray-400 mb-3">Where to Watch</h2>
              <div className="flex flex-wrap gap-3">
                {kdrama.vikiLink && (
                  <a 
                    href={kdrama.vikiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FF5E00] hover:bg-[#FF5E00]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Viki</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {kdrama.kocowaLink && (
                  <a 
                    href={kdrama.kocowaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#1E63E5] hover:bg-[#1E63E5]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Kocowa</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {kdrama.tubitvLink && (
                  <a 
                    href={kdrama.tubitvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#F63561] hover:bg-[#F63561]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Tubi</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {kdrama.asiancrushLink && (
                  <a 
                    href={kdrama.asiancrushLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#EB2427] hover:bg-[#EB2427]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on AsianCrush</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {kdrama.ondemandkoreaLink && (
                  <a 
                    href={kdrama.ondemandkoreaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#00A8E1] hover:bg-[#00A8E1]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on OnDemandKorea</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {kdrama.youtubeLink && (
                  <a 
                    href={kdrama.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FF0000] hover:bg-[#FF0000]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {kdrama.dramacoolLink && (
                  <a 
                    href={kdrama.dramacoolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#36393E] hover:bg-[#36393E]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on Dramacool</span>
                    <ExternalLink size={16} className="ml-2" />
                    <span className="ml-1 text-xs text-gray-300">(Unofficial)</span>
                  </a>
                )}
                
                {kdrama.kissasianLink && (
                  <a 
                    href={kdrama.kissasianLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#36393E] hover:bg-[#36393E]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on KissAsian</span>
                    <ExternalLink size={16} className="ml-2" />
                    <span className="ml-1 text-xs text-gray-300">(Unofficial)</span>
                  </a>
                )}
                
                {kdrama.newasianlinkLink && (
                  <a 
                    href={kdrama.newasianlinkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#36393E] hover:bg-[#36393E]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on NewAsianTV</span>
                    <ExternalLink size={16} className="ml-2" />
                    <span className="ml-1 text-xs text-gray-300">(Unofficial)</span>
                  </a>
                )}
                
                {kdrama.myasiantvLink && (
                  <a 
                    href={kdrama.myasiantvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#36393E] hover:bg-[#36393E]/80 text-white py-2 px-4 rounded-md transition-all"
                  >
                    <span>Watch on MyAsianTV</span>
                    <ExternalLink size={16} className="ml-2" />
                    <span className="ml-1 text-xs text-gray-300">(Unofficial)</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KDramaDetailPage;
