import React from 'react';
import { Crown, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Crown className="h-8 w-8 text-amber-500 mr-2" />
            <span className="font-bold text-xl">Tate Brothers Hub</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            <a href="#home" className="hover:text-amber-400 transition-colors mb-2 md:mb-0">Home</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors mb-2 md:mb-0">Gallery</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors mb-2 md:mb-0">Projects</a>
            <a href="#videos" className="hover:text-amber-400 transition-colors mb-2 md:mb-0">Videos</a>
            <a href="#official" className="hover:text-amber-400 transition-colors">Official Links</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center">
          <p className="text-gray-400 text-sm text-center">
            This is an unofficial fan site. All trademarks and copyrights belong to their respective owners.
          </p>
          <p className="flex items-center text-gray-400 text-sm mt-4">
            Made with <Heart className="h-4 w-4 text-amber-500 mx-1" /> for educational purposes only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
