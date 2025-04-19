
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import History from '@/components/Profile/History';
import Settings from '@/components/Profile/Settings';
import EditProfile from '@/components/Profile/EditProfile';
import RecentlyViewed from '@/components/Profile/RecentlyViewed';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface RecentItem {
  id: string;
  type: string;
  title: string;
  imageUrl?: string;
  timestamp: number;
}

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [viewHistory, setViewHistory] = useState<RecentItem[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('edit');

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/auth');
        return;
      }
      setUser(user);

      // Get history from local storage
      const storedHistory = localStorage.getItem(`viewHistory-${user.id}`);
      if (storedHistory) {
        try {
          const parsedHistory = JSON.parse(storedHistory);
          setViewHistory(parsedHistory);
        } catch (e) {
          console.error('Error parsing view history:', e);
          setViewHistory([]);
        }
      } else {
        setViewHistory([]);
      }
      
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  // Don't render anything during loading to prevent flickering
  if (loading) return (
    <Layout>
      <div className="container mx-auto px-6 py-10 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-xl">Loading profile...</div>
      </div>
    </Layout>
  );

  if (!user) return null;

  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Profile</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-black/40">
            <TabsTrigger value="edit">Edit Profile</TabsTrigger>
            <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="transition-opacity duration-300">
            <EditProfile />
          </TabsContent>
          
          <TabsContent value="recent" className="transition-opacity duration-300">
            <RecentlyViewed items={viewHistory} />
          </TabsContent>
          
          <TabsContent value="history" className="transition-opacity duration-300">
            <History />
          </TabsContent>
          
          <TabsContent value="settings" className="transition-opacity duration-300">
            <Settings />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default UserProfilePage;
