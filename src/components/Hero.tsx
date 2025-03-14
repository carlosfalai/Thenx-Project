import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center md:text-left md:max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="block">Andrew & Tristan Tate</span>
            <span className="block text-amber-500">Mindset. Business. Lifestyle.</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl">
            Explore the world of the Tate brothers - from business ventures and mindset principles to lifestyle choices and official resources.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#gallery" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center"
            >
              Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#official" 
              className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
            >
              Official Links
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
