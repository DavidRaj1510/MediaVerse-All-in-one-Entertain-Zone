
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Bot, X } from 'lucide-react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  // Load search history from local storage
  useEffect(() => {
    const loadHistory = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const storedHistory = localStorage.getItem(`searchHistory-${user.id}`);
        if (storedHistory) {
          setSearchHistory(JSON.parse(storedHistory));
        }
      }
    };
    
    loadHistory();
  }, []);

  const saveToHistory = async (query: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const updatedHistory = [query, ...searchHistory].slice(0, 20); // Keep last 20 searches
      setSearchHistory(updatedHistory);
      localStorage.setItem(`searchHistory-${user.id}`, JSON.stringify(updatedHistory));
    }
  };

  const generateResponse = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      const { data, error } = await supabase.functions.invoke('generate-with-ai', {
        body: { prompt }
      });

      if (error) throw error;
      
      // Format markdown links
      let formattedText = data.generatedText;
      // Replace markdown links with HTML links
      formattedText = formattedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="text-blue-400 hover:underline">$1</a>');
      // Format headings
      formattedText = formattedText.replace(/###\s+([^\n]+)/g, '<h3 class="text-xl font-semibold text-gray-200 mt-4 mb-2">$1</h3>');
      // Format bold text
      formattedText = formattedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      // Format list items
      formattedText = formattedText.replace(/- (.+)/g, '<li class="ml-4 my-2">$1</li>');
      
      setResponse(formattedText);
      
      // Save to history
      saveToHistory(prompt);
    } catch (error: any) {
      console.error('Error generating AI response:', error);
      toast.error(error.message || 'Failed to generate response');
    } finally {
      setLoading(false);
    }
  };

  if (!expanded) {
    return (
      <Button 
        onClick={() => setExpanded(true)}
        className="fixed bottom-6 right-6 rounded-full p-3 bg-[#ea384c] hover:bg-[#c2303e] shadow-lg"
      >
        <Bot size={24} />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[350px] md:w-[450px] bg-gray-800/50 border border-gray-700 rounded-lg p-4 shadow-xl z-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bot className="text-[#ea384c]" size={24} />
          <h3 className="text-xl font-semibold text-[#ea384c]">MediaVerse AI</h3>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setExpanded(false)}>
            <X size={18} />
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <Textarea
          placeholder="Ask about any media... E.g., 'Recommend anime similar to Attack on Titan' or 'Tell me about Batman comics'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-gray-700 border-gray-600 min-h-[80px]"
          disabled={loading}
        />
      </div>
      
      <div className="flex justify-end mb-4">
        <Button 
          onClick={generateResponse} 
          disabled={loading}
          className="bg-[#ea384c] hover:bg-[#c2303e]"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Get Recommendations'
          )}
        </Button>
      </div>
      
      {response && (
        <div className="bg-gray-700 p-4 rounded-md border border-gray-600 max-h-[300px] overflow-y-auto">
          <h4 className="text-gray-300 font-medium mb-2">AI Response:</h4>
          <div 
            className="text-white space-y-2" 
            dangerouslySetInnerHTML={{ __html: response }}
          />
        </div>
      )}
    </Card>
  );
};

export default AIAssistant;
