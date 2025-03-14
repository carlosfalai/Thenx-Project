import React from 'react';
import { tateContent } from '../data/content';
import { Play, Video } from 'lucide-react';

const Videos: React.FC = () => {
  const videoContent = tateContent.filter(content => content.category === 'videos');

  return (
    <section id="videos" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Featured <span className="text-amber-500">Videos</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Andrew and Tristan Tate have created numerous viral videos, podcasts, and interviews. 
          Here's a selection of their most impactful content.
        </p>

        <div className="bg-black text-white p-8 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Official Rumble Channel</h3>
              <p className="text-gray-300 mb-6">
                Andrew Tate's official Rumble channel features exclusive content, interviews, and discussions on business, lifestyle, and mindset topics.
              </p>
              <a 
                href="https://rumble.com/c/TateSpeech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Video className="mr-2 h-5 w-5" />
                Visit Rumble Channel
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-amber-500 rounded-full p-4">
                      <Play className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoContent.map(video => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <img 
                  src={video.imageUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="bg-amber-500 rounded-full p-3">
                    <Play className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-700">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
