
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Features from '../components/Features';
import ProgramIntroduction from '../components/ProgramIntroduction';

const Index = () => {
  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <ProgramIntroduction />
    </div>
  );
};

export default Index;
