import React from 'react';
import { ExternalLink } from 'lucide-react';
import { TateContent } from '../types';

interface ContentCardProps {
  content: TateContent;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const getBadgeColor = (brother: string) => {
    switch(brother) {
      case 'andrew': return 'bg-blue-600';
      case 'tristan': return 'bg-green-600';
      case 'both': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'business': return 'bg-amber-500';
      case 'lifestyle': return 'bg-pink-500';
      case 'mindset': return 'bg-indigo-500';
      case 'fitness': return 'bg-emerald-500';
      case 'videos': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={content.imageUrl} 
          alt={content.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 p-2 flex gap-2">
          <span className={`${getBadgeColor(content.brother)} text-white text-xs font-bold px-2 py-1 rounded capitalize`}>
            {content.brother === 'both' ? 'Both' : content.brother}
          </span>
          <span className={`${getCategoryColor(content.category)} text-white text-xs font-bold px-2 py-1 rounded capitalize`}>
            {content.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{content.title}</h3>
        <p className="text-gray-700 mb-4">{content.description}</p>
        {content.link && (
          <a 
            href={content.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            Visit <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
