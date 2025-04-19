
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';

interface RecentItem {
  id: string;
  type: string;
  title: string;
  imageUrl?: string;
  timestamp: number;
}

const RecentlyViewed = ({ items }: { items: RecentItem[] }) => {
  const navigate = useNavigate();

  const handleClearRecentlyViewed = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Clear local storage
        localStorage.removeItem(`viewHistory-${user.id}`);
        localStorage.setItem(`viewHistory-${user.id}`, JSON.stringify([]));
        
        // Force refresh the page to show empty list
        window.location.reload();
        toast.success('Recently viewed items cleared');
      }
    } catch (error: any) {
      console.error('Error clearing recently viewed:', error);
      toast.error(error.message || 'Failed to clear recently viewed');
    }
  };

  // Get only the most recent 10 items
  const recentItems = items.slice(0, 10);

  return (
    <Card className="bg-black/40 border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">Recently Viewed</CardTitle>
        {recentItems.length > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleClearRecentlyViewed}
            className="text-red-400 hover:text-red-300 border-red-400 hover:border-red-300"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {recentItems.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p>No recently viewed items</p>
              <p className="text-sm mt-2">Items you view will appear here</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {recentItems.map((item) => (
                <div
                  key={`${item.id}-${item.timestamp}`}
                  className="cursor-pointer group"
                  onClick={() => navigate(`/${item.type}s/${item.id}`)}
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'none',
                        backgroundColor: !item.imageUrl ? '#2a2a2a' : 'transparent'
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium text-center px-2">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400 truncate">
                    {new Date(item.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentlyViewed;
