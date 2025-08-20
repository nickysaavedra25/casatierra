import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollProvider } from './contexts/ScrollContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Location from './components/Location';
import Articles from './components/Articles';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollAnimations from './components/ScrollAnimations';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollAnimations />
          <Header />
          <main>
            <Hero />
            <Services />
            <Contact />
            <Location />
            <Articles />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;