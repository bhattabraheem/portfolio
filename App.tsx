import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-24">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Chatbot />
      <footer className="text-center py-8 text-sm text-brand-muted border-t border-gray-800">
        <p>&copy; copyright 2025 {PORTFOLIO_DATA.name}. Built with React, Tailwind CSS, and the Gemini API.</p>
      </footer>
    </div>
  );
};

export default App;