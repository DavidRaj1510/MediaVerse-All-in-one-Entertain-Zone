
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookmarkMinus, Star, Clock, User, Settings, Moon, Sun, Gamepad2, Film, Book, Tv, Newspaper, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface FavoriteItem {
  id: string;
  type: 'comic' | 'anime' | 'novel' | 'magazine' | 'cartoon' | 'movie' | 'game' | 'kdrama';
  title: string;
  imageUrl?: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [activeTab, setActiveTab] = useState('profile');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [viewHistory, setViewHistory] = useState<{id: string, type: string, title: string, timestamp: number}[]>([]);
  const [notifications, setNotifications] = useState<{id: string, message: string, read: boolean, timestamp: number}[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current user
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);

      if (data.user) {
        // Load search history
        const storedHistory = localStorage.getItem(`searchHistory-${data.user.id}`);
        if (storedHistory) {
          setSearchHistory(JSON.parse(storedHistory));
        }

        // Load favorites
        const storedFavorites = localStorage.getItem(`favorites-${data.user.id}`);
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
        
        // Load view history
        const storedViewHistory = localStorage.getItem(`viewHistory-${data.user.id}`);
        if (storedViewHistory) {
          setViewHistory(JSON.parse(storedViewHistory));
        } else {
          // Generate some sample view history if none exists
          const sampleHistory = [
            {id: 'inception', type: 'movie', title: 'Inception', timestamp: Date.now() - 3600000},
            {id: 'jujutsu-kaisen', type: 'anime', title: 'Jujutsu Kaisen', timestamp: Date.now() - 7200000},
            {id: 'one-piece', type: 'comic', title: 'One Piece', timestamp: Date.now() - 86400000}
          ];
          setViewHistory(sampleHistory);
          localStorage.setItem(`viewHistory-${data.user.id}`, JSON.stringify(sampleHistory));
        }
        
        // Load notifications
        const storedNotifications = localStorage.getItem(`notifications-${data.user.id}`);
        if (storedNotifications) {
          setNotifications(JSON.parse(storedNotifications));
        } else {
          // Generate sample notifications
          const sampleNotifications = [
            {id: '1', message: 'Welcome to MediaVerse!', read: false, timestamp: Date.now()},
            {id: '2', message: 'New anime releases are now available', read: false, timestamp: Date.now() - 86400000},
            {id: '3', message: 'Don\'t forget to complete your profile', read: true, timestamp: Date.now() - 172800000}
          ];
          setNotifications(sampleNotifications);
          localStorage.setItem(`notifications-${data.user.id}`, JSON.stringify(sampleNotifications));
        }
        
        // Load theme preference
        const storedTheme = localStorage.getItem(`theme-${data.user.id}`);
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
          setTheme(storedTheme);
          document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else {
          // Default to dark theme if not set
          document.documentElement.classList.add('dark');
        }
      }
    };

    fetchUser();
  }, []);

  const clearHistory = () => {
    if (user) {
      localStorage.removeItem(`searchHistory-${user.id}`);
      setSearchHistory([]);
      toast.success('Search history cleared');
    }
  };

  const removeFromFavorites = (id: string) => {
    if (user) {
      const updatedFavorites = favorites.filter(item => item.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem(`favorites-${user.id}`, JSON.stringify(updatedFavorites));
      toast.success('Removed from favorites');
    }
  };
  
  const clearViewHistory = () => {
    if (user) {
      localStorage.removeItem(`viewHistory-${user.id}`);
      setViewHistory([]);
      toast.success('View history cleared');
    }
  };
  
  const markAllNotificationsAsRead = () => {
    if (user) {
      const updatedNotifications = notifications.map(notification => ({
        ...notification,
        read: true
      }));
      setNotifications(updatedNotifications);
      localStorage.setItem(`notifications-${user.id}`, JSON.stringify(updatedNotifications));
      toast.success('All notifications marked as read');
    }
  };
  
  const deleteNotification = (id: string) => {
    if (user) {
      const updatedNotifications = notifications.filter(notification => notification.id !== id);
      setNotifications(updatedNotifications);
      localStorage.setItem(`notifications-${user.id}`, JSON.stringify(updatedNotifications));
      toast.success('Notification deleted');
    }
  };

  const toggleTheme = () => {
    if (user) {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem(`theme-${user.id}`, newTheme);
      toast.success(`Theme changed to ${newTheme} mode`);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully');
      navigate('/auth');
    }
  };

  const navigateToItem = (type: string, id: string) => {
    navigate(`/${type}s/${id}`);
  };
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
  
  const getIconForType = (type: string) => {
    switch (type) {
      case 'movie': return <Film className="h-4 w-4" />;
      case 'game': return <Gamepad2 className="h-4 w-4" />;
      case 'anime': return <Tv className="h-4 w-4" />;
      case 'comic': return <Book className="h-4 w-4" />;
      case 'novel': return <FileText className="h-4 w-4" />;
      case 'magazine': return <Newspaper className="h-4 w-4" />;
      case 'cartoon': return <Tv className="h-4 w-4" />;
      case 'kdrama': return <Tv className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-gray-800/60 border border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl">User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="history">
                <Clock className="mr-2 h-4 w-4" />
                History
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Star className="mr-2 h-4 w-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <span className="relative">
                  <Settings className="mr-2 h-4 w-4" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  )}
                </span>
                Notifications
              </TabsTrigger>
              <TabsTrigger value="appearance">
                {theme === 'dark' ? (
                  <Moon className="mr-2 h-4 w-4" />
                ) : (
                  <Sun className="mr-2 h-4 w-4" />
                )}
                Appearance
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-4">
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4 p-4 bg-gray-700/30 rounded-lg">
                  <div className="h-24 w-24 rounded-full bg-gray-600 flex items-center justify-center text-2xl">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <h3 className="text-xl font-semibold">{user.email}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <Card className="bg-gray-700/30 border-gray-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Favorites</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{favorites.length}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-700/30 border-gray-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">View History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{viewHistory.length}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-700/30 border-gray-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{notifications.length}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <Button variant="destructive" onClick={handleSignOut} className="w-full">
                    Sign Out
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-4">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Recent Searches</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearHistory} 
                      disabled={searchHistory.length === 0}
                    >
                      Clear Search History
                    </Button>
                  </div>
                  
                  {searchHistory.length > 0 ? (
                    <div className="space-y-2">
                      {searchHistory.map((search, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-700/50 p-3 rounded-md"
                        >
                          <p>{search}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">No recent searches</p>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">View History</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearViewHistory} 
                      disabled={viewHistory.length === 0}
                    >
                      Clear View History
                    </Button>
                  </div>
                  
                  {viewHistory.length > 0 ? (
                    <div className="space-y-2">
                      {viewHistory.map((item, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-700/50 p-3 rounded-md flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            {getIconForType(item.type)}
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-400 capitalize">({item.type})</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-xs text-gray-400">{formatDate(item.timestamp)}</p>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => navigateToItem(item.type, item.id)}
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">No view history</p>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-4">
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {favorites.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-gray-700/50 rounded-lg overflow-hidden border border-gray-600 flex flex-col"
                    >
                      <div 
                        className="h-32 bg-gray-600 cursor-pointer"
                        onClick={() => navigateToItem(item.type, item.id)}
                        style={item.imageUrl ? { 
                          backgroundImage: `url(${item.imageUrl})`, 
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        } : {}}
                      >
                        {!item.imageUrl && (
                          <div className="h-full flex items-center justify-center text-lg font-bold">
                            {item.title.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="p-3 flex-grow">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400 capitalize">{item.type}</p>
                      </div>
                      <div className="p-3 border-t border-gray-600 flex justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => navigateToItem(item.type, item.id)}
                        >
                          View
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeFromFavorites(item.id)}
                        >
                          <BookmarkMinus size={16} className="text-red-400" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No favorites saved</p>
              )}
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">
                    Notifications
                    {notifications.filter(n => !n.read).length > 0 && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                        {notifications.filter(n => !n.read).length} new
                      </span>
                    )}
                  </h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={markAllNotificationsAsRead} 
                    disabled={notifications.filter(n => !n.read).length === 0}
                  >
                    Mark all as read
                  </Button>
                </div>
                
                {notifications.length > 0 ? (
                  <div className="space-y-2">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`${!notification.read ? 'bg-gray-700/80' : 'bg-gray-700/30'} p-3 rounded-md flex justify-between items-center`}
                      >
                        <div>
                          <p className={`${!notification.read ? 'font-medium' : ''}`}>{notification.message}</p>
                          <p className="text-xs text-gray-400">{formatDate(notification.timestamp)}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <BookmarkMinus size={16} className="text-red-400" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No notifications</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="appearance" className="mt-4">
              <div className="space-y-6">
                <div className="bg-gray-700/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Theme Settings</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Currently using {theme} mode</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full"
                      >
                        {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div 
                        className={`bg-white text-black p-4 rounded-lg flex items-center justify-center cursor-pointer border-2 ${theme === 'light' ? 'border-blue-500' : 'border-transparent'}`}
                        onClick={() => {
                          setTheme('light');
                          document.documentElement.classList.remove('dark');
                          if (user) localStorage.setItem(`theme-${user.id}`, 'light');
                          toast.success('Light theme applied');
                        }}
                      >
                        <Sun className="h-6 w-6 mr-2" />
                        Light
                      </div>
                      
                      <div 
                        className={`bg-gray-900 text-white p-4 rounded-lg flex items-center justify-center cursor-pointer border-2 ${theme === 'dark' ? 'border-blue-500' : 'border-transparent'}`}
                        onClick={() => {
                          setTheme('dark');
                          document.documentElement.classList.add('dark');
                          if (user) localStorage.setItem(`theme-${user.id}`, 'dark');
                          toast.success('Dark theme applied');
                        }}
                      >
                        <Moon className="h-6 w-6 mr-2" />
                        Dark
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <div className="space-y-6">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="text" 
                        disabled 
                        value={user.email} 
                        className="bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full"
                      />
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full justify-start"
                    >
                      Change Password
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">User Data</h3>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearHistory}
                      className="w-full justify-start"
                    >
                      Clear Search History
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        if (user) {
                          localStorage.removeItem(`favorites-${user.id}`);
                          setFavorites([]);
                          toast.success('All favorites cleared');
                        }
                      }}
                    >
                      Clear All Favorites
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        if (user) {
                          localStorage.removeItem(`viewHistory-${user.id}`);
                          setViewHistory([]);
                          toast.success('View history cleared');
                        }
                      }}
                    >
                      Clear View History
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        if (user) {
                          localStorage.removeItem(`notifications-${user.id}`);
                          setNotifications([]);
                          toast.success('All notifications cleared');
                        }
                      }}
                    >
                      Clear All Notifications
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-red-400">Danger Zone</h3>
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
