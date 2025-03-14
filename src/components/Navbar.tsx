import React, { useState } from 'react';
import { Menu, X, Crown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Crown className="h-8 w-8 text-amber-500 mr-2" />
            <span className="font-bold text-xl">Tate Brothers Hub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#videos" className="hover:text-amber-400 transition-colors">Videos</a>
            <a href="#official" className="hover:text-amber-400 transition-colors">Official Links</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#videos" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Videos
            </a>
            <a 
              href="#official" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Official Links
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
