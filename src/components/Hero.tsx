import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-none">
            CREATIVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              DEVELOPER
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and bold design thinking
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300 group"
            >
              <Github size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300 group"
            >
              <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300 group"
            >
              <Mail size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;