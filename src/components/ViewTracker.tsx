
import { useEffect } from 'react';
import { addToHistory } from './Profile/History';

interface ViewTrackerProps {
  id: string;
  type: string;
  title: string;
  imageUrl?: string;
}

const ViewTracker: React.FC<ViewTrackerProps> = ({ id, type, title, imageUrl }) => {
  useEffect(() => {
    // Record this view when the component mounts
    const recordView = async () => {
      await addToHistory({ id, type, title, imageUrl });
    };
    
    recordView();
  }, [id, type, title, imageUrl]);
  
  // This component doesn't render anything
  return null;
};

export default ViewTracker;
