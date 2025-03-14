import React from 'react';
import { officialLinks } from '../data/content';
import { ExternalLink, GraduationCap, Video, Flag, Twitter, ShoppingBag } from 'lucide-react';

const OfficialLinks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Graduation': return <GraduationCap className="h-6 w-6" />;
      case 'Video': return <Video className="h-6 w-6" />;
      case 'Flag': return <Flag className="h-6 w-6" />;
      case 'Twitter': return <Twitter className="h-6 w-6" />;
      case 'ShoppingBag': return <ShoppingBag className="h-6 w-6" />;
      default: return <ExternalLink className="h-6 w-6" />;
    }
  };

  return (
    <section id="official" className="py-16 bg-gradient-to-b from-amber-500 to-amber-600 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Official <span className="text-white">Resources</span>
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Connect with Andrew and Tristan Tate through their official platforms and resources.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officialLinks.map(link => (
            <a 
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex items-start"
            >
              <div className="bg-amber-500 p-3 rounded-full mr-4 text-white">
                {getIcon(link.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  {link.title}
                  <ExternalLink className="ml-2 h-4 w-4 text-amber-500" />
                </h3>
                <p className="text-gray-600">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialLinks;
