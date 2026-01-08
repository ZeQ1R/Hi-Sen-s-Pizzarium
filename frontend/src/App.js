import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from './components/ui/sonner';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Menu from './components/sections/Menu';
import Services from './components/sections/Services';
import Amenities from './components/sections/Amenities';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Services />
          <Amenities />
          <Gallery />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;
