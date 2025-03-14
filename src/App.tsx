import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Videos from './components/Videos';
import OfficialLinks from './components/OfficialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Projects />
      <Videos />
      <OfficialLinks />
      <Footer />
    </div>
  );
}

export default App;
