import React, { useState, useEffect } from 'react';
import { Sparkle, List, X, ArrowRight, Speedometer, CaretRight, GithubLogo } from '@phosphor-icons/react';

export default function Navbar({ onPredictClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3.5' : 'bg-transparent py-5 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <button onClick={() => scrollTo('hero')} className="flex items-center group text-left focus:outline-none">
            <img src="/logo.png" alt="AutoPredict Logo" className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('hero')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors py-1 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollTo('prediction-section')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors py-1 relative group">
              Predict
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors py-1 relative group">
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollTo('stats')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors py-1 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/Rishabh-kumar17/AutoPredict" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="GitHub Repository"
            >
              <GithubLogo weight="fill" className="w-6 h-6" />
            </a>
            <button
              onClick={() => {
                if (onPredictClick) onPredictClick();
                else scrollTo('prediction-section');
              }}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Predict My Car</span>
              <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a 
              href="https://github.com/Rishabh-kumar17/AutoPredict" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="GitHub Repository"
            >
              <GithubLogo weight="fill" className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 transition-all animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollTo('hero')} className="text-left text-base font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center justify-between">
              <span>Home</span>
              <CaretRight weight="bold" className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => scrollTo('prediction-section')} className="text-left text-base font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center justify-between">
              <span>Predict</span>
              <CaretRight weight="bold" className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="text-left text-base font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center justify-between">
              <span>How It Works</span>
              <CaretRight weight="bold" className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => scrollTo('stats')} className="text-left text-base font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center justify-between">
              <span>About</span>
              <CaretRight weight="bold" className="w-4 h-4 text-slate-400" />
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  if (onPredictClick) onPredictClick();
                  else scrollTo('prediction-section');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl bg-blue-600 shadow-md"
              >
                <span>Predict My Car →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}