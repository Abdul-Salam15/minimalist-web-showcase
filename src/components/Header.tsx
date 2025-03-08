
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import useScrollTo from '@/utils/useScrollTo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useScrollTo();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 py-4 sm:py-6 px-4 sm:px-8 z-50 transition-all duration-300 ease-in-out backdrop-blur-sm",
        isScrolled ? "bg-portfolio-dark-bg/90 border-b border-portfolio-neon-border/20 py-3 sm:py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <a 
            href="#"
            className="text-xl font-medium text-white hover:text-portfolio-accent transition-colors duration-300"
          >
            AA
          </a>
          
          <ul className="hidden md:flex space-x-10">
            <li>
              <button 
                onClick={() => scrollTo('projects', { offset: 100 })} 
                className="nav-link text-portfolio-gray-dark"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollTo('contact', { offset: 100 })} 
                className="nav-link text-portfolio-gray-dark"
              >
                Contact
              </button>
            </li>
          </ul>
          
          {/* Mobile navigation */}
          <div className="md:hidden flex items-center">
            <div className="space-x-6">
              <button 
                onClick={() => scrollTo('projects', { offset: 80 })} 
                className="nav-link text-portfolio-gray-dark text-sm"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollTo('contact', { offset: 80 })} 
                className="nav-link text-portfolio-gray-dark text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
