
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Features from '../components/Features';
import ProgramIntroduction from '../components/ProgramIntroduction';
import Babysitters from '../components/Babysitters';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <ProgramIntroduction />
      <Babysitters />
      <Footer />
    </div>
  );
};

export default Index;
