
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface HistoryItem {
  id: string;
  type: string;
  title: string;
  imageUrl?: string;
  timestamp: number;
}

// Create a utility function to add items to history
export const addToHistory = async (item: Omit<HistoryItem, 'timestamp'>) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  
  const historyItem = {
    ...item,
    timestamp: Date.now()
  };
  
  // Get existing history from localStorage
  const storedHistory = localStorage.getItem(`viewHistory-${user.id}`);
  let history: HistoryItem[] = [];
  
  if (storedHistory) {
    try {
      history = JSON.parse(storedHistory);
    } catch (e) {
      console.error('Error parsing view history:', e);
    }
  }
  
  // Check if item already exists
  const existingItemIndex = history.findIndex(h => h.id === item.id && h.type === item.type);
  
  if (existingItemIndex !== -1) {
    // Remove existing item (will be added at the beginning)
    history.splice(existingItemIndex, 1);
  }
  
  // Add new item at the beginning
  history.unshift(historyItem);
  
  // Limit history to 50 items
  if (history.length > 50) {
    history = history.slice(0, 50);
  }
  
  // Save to localStorage
  localStorage.setItem(`viewHistory-${user.id}`, JSON.stringify(history));
  
  return historyItem;
};

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      
      // Get history from local storage
      const storedHistory = localStorage.getItem(`viewHistory-${user.id}`);
      if (storedHistory) {
        try {
          const parsedHistory = JSON.parse(storedHistory);
          setHistory(parsedHistory);
        } catch (e) {
          console.error('Error parsing view history:', e);
          setHistory([]);
        }
      } else {
        // Initialize with empty array if no history
        setHistory([]);
        localStorage.setItem(`viewHistory-${user.id}`, JSON.stringify([]));
      }
      
      setLoading(false);
    };
    
    fetchHistory();
  }, []);
  
  const handleClearHistory = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    
    // Clear from local storage
    localStorage.removeItem(`viewHistory-${user.id}`);
    localStorage.setItem(`viewHistory-${user.id}`, JSON.stringify([]));
    
    toast.success('Watch history cleared');
    setHistory([]);
  };

  const navigateToItem = (type: string, id: string) => {
    navigate(`/${type}s/${id}`);
  };
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  };

  return (
    <Card className="bg-black/40 border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">Watch History</CardTitle>
        {history.length > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleClearHistory}
            className="text-red-400 hover:text-red-300 border-red-400 hover:border-red-300"
          >
            Clear History
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-pulse text-gray-400">Loading history...</div>
            </div>
          ) : history.length > 0 ? (
            <div className="space-y-4">
              {history.map((item) => (
                <div 
                  key={`${item.id}-${item.timestamp}`}
                  className="flex items-start space-x-4 p-3 bg-gray-800/40 rounded-md hover:bg-gray-800/60 transition-colors"
                >
                  <div 
                    className="w-16 h-20 rounded bg-gray-700 flex-shrink-0 bg-cover bg-center"
                    style={{
                      backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'none',
                    }}
                  />
                  <div className="flex-grow">
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400 capitalize">{item.type}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDate(item.timestamp)}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="ml-2"
                    onClick={() => navigateToItem(item.type, item.id)}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400">
              <p>Your watch history will appear here</p>
              <p className="text-sm mt-2">Browse some content to build your history</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default History;
