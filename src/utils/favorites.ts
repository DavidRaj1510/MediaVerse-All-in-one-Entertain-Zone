
interface FavoriteItem {
  id: string;
  type: 'comic' | 'anime' | 'novel' | 'magazine' | 'cartoon' | 'movie';
  title: string;
  imageUrl?: string;
}

export const getFavorites = (userId: string): FavoriteItem[] => {
  const storedFavorites = localStorage.getItem(`favorites-${userId}`);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const addToFavorites = (userId: string, item: FavoriteItem): boolean => {
  try {
    const favorites = getFavorites(userId);
    
    // Check if already in favorites
    if (favorites.some(fav => fav.id === item.id && fav.type === item.type)) {
      return false;
    }
    
    // Add to favorites
    const updatedFavorites = [...favorites, item];
    localStorage.setItem(`favorites-${userId}`, JSON.stringify(updatedFavorites));
    return true;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    return false;
  }
};

export const removeFromFavorites = (userId: string, itemId: string): boolean => {
  try {
    const favorites = getFavorites(userId);
    const updatedFavorites = favorites.filter(item => item.id !== itemId);
    localStorage.setItem(`favorites-${userId}`, JSON.stringify(updatedFavorites));
    return true;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    return false;
  }
};

export const isItemFavorited = (userId: string, itemId: string): boolean => {
  const favorites = getFavorites(userId);
  return favorites.some(item => item.id === itemId);
};
