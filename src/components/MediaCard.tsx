
import React from 'react';
import { Link } from 'react-router-dom';

interface MediaCardProps {
  id: string;
  title: string;
  coverImage: string;
  basePath: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ id, title, coverImage, basePath }) => {
  return (
    <Link to={`${basePath}/${id}`} className="block card-hover">
      <div className="media-card bg-black/40 hover:bg-black/30 transition-all">
        <div className="relative h-full w-full">
          <img 
            src={coverImage} 
            alt={title} 
            className="object-cover w-full h-full rounded-lg" 
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
            <h3 className="text-white text-lg font-semibold truncate">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
