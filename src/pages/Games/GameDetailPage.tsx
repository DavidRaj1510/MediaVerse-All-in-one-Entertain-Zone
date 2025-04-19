
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { games } from '../../data/games';
import { ArrowLeft, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);

  if (!game) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-10">
          <h1>Game not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <Link to="/games" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Games
        </Link>

        <Card className="bg-black/40 border-games/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-games" />
              <CardTitle className="text-3xl font-bold text-games">{game.title}</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              {game.studio} • {game.releaseYear} • {game.genre.join(', ')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={game.coverImage} 
                  alt={game.title}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">About</h3>
                  <p className="text-gray-300">{game.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Play On</h3>
                  <div className="grid gap-2">
                    {game.playLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start border-games/30 hover:border-games hover:text-games"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <Gamepad2 className="h-4 w-4 mr-2" />
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default GameDetailPage;
