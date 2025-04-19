import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Film, Tv, BookOpen, Newspaper, PlaySquare, MonitorPlay, Gamepad2, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import MediaCarousel from '../components/MediaCarousel';
import AIAssistant from '../components/AIAssistant';
import { supabase } from '@/integrations/supabase/client';

const Index: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-[#141414]">
        {/* Hero section */}
        <div className="netflix-gradient min-h-[700px] relative flex items-center">
          <div className="container mx-auto px-6 py-32 z-10">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Explore Anime, movies, Games and more
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Explore an immersive universe of comics, anime, novels, magazines, cartoons, and games. Find your favourite category and explore your favorites.
              </p>
              
              {!user && (
                <div className="mt-8">
                  <p className="text-xl text-gray-300 mb-4">Ready to explore? Enter your email to create or restart your membership.</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="netflix-input flex-grow"
                    />
                    <Link 
                      to="/auth" 
                      className="netflix-button flex items-center justify-center whitespace-nowrap"
                    >
                      Get Started <ChevronRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              )}
              
              {user && (
                <div className="mt-8">
                  <Link 
                    to="/profile" 
                    className="netflix-button flex items-center"
                  >
                    View Your Profile <ChevronRight className="ml-2" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Media Carousel Section */}
        <div className="bg-[#141414] py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8">Explore Media Universe</h2>
            <MediaCarousel />
          </div>
        </div>

        {/* Categories Section - Netflix style */}
        <div className="bg-[#141414] py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8">Popular Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Book, title: "Comics", path: "/comics", color: "comics", desc: "Explore popular comics and graphic novels." },
                { icon: Tv, title: "Anime", path: "/anime", color: "anime", desc: "Discover popular anime series." },
                { icon: BookOpen, title: "Novels", path: "/novels", color: "novels", desc: "Find bestselling novels and literary gems." },
                { icon: MonitorPlay, title: "K-Dramas", path: "/kdramas", color: "kdramas", desc: "Explore popular Korean dramas." },
                { icon: Newspaper, title: "Magazines", path: "/magazines", color: "magazines", desc: "Browse top magazines across various topics." },
                { icon: Film, title: "Cartoons", path: "/cartoons", color: "cartoons", desc: "Enjoy classic and modern animated cartoons." },
                { icon: PlaySquare, title: "Movies", path: "/movies", color: "movies", desc: "Discover popular movies across streaming platforms." },
                { icon: Gamepad2, title: "Games", path: "/games", color: "games", desc: "Discover and play exciting online games." }
              ].map(({ icon: Icon, title, path, color, desc }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative group overflow-hidden rounded-lg p-6 transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-black to-${color}/30`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <Icon className={`h-8 w-8 text-${color} mb-4`} />
                    <h3 className={`text-2xl font-bold text-${color} mb-2`}>{title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <AIAssistant />
      </div>
    </Layout>
  );
};

export default Index;
