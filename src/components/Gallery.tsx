import React, { useState } from 'react';
import ContentCard from './ContentCard';
import { tateContent } from '../data/content';
import { TateContent } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [brotherFilter, setBrotherFilter] = useState<string>('all');

  const filteredContent = tateContent.filter(content => {
    const categoryMatch = filter === 'all' || content.category === filter;
    const brotherMatch = brotherFilter === 'all' || content.brother === brotherFilter;
    return categoryMatch && brotherMatch;
  });

  const categories = ['all', 'business', 'lifestyle', 'mindset', 'fitness', 'videos'];
  const brothers = ['all', 'andrew', 'tristan', 'both'];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore the <span className="text-amber-500">Tate Universe</span>
        </h2>

        <div className="mb-8 flex flex-col md:flex-row justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-0">
            {brothers.map(brother => (
              <button
                key={brother}
                onClick={() => setBrotherFilter(brother)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  brotherFilter === brother 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {brother === 'all' ? 'All' : 
                 brother === 'both' ? 'Both Brothers' :
                 brother.charAt(0).toUpperCase() + brother.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content: TateContent) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
        
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No content matches your current filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
