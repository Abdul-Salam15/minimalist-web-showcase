
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-portfolio-blue-medium blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-portfolio-accent blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 w-70 h-70 rounded-full bg-portfolio-blue-dark blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
                Adebayo <br /> 
                <span className="text-portfolio-accent neon-text animate-pulse">Abdul-Salam</span>
              </h1>
              <p className="text-xl text-portfolio-gray-medium mb-8 max-w-md">
                Creative developer specializing in building exceptional digital experiences 
                with a focus on clean design and efficient code.
              </p>
              <div className="flex space-x-4 mt-8">
                <a 
                  href="#projects" 
                  className="neon-button"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="neon-button-alt"
                >
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-60 h-60 md:w-80 md:h-80 animate-scale-in">
                <div className="absolute inset-0 rounded-full bg-portfolio-blue-medium/20 neon-glow-blue overflow-hidden">
                  <img 
                    src="/lovable-uploads/66d67004-7453-420e-a4b6-d03de40b2591.png" 
                    alt="Adebayo Abdul-Salam"
                    className="w-full h-full object-cover rounded-full opacity-90 mix-blend-luminosity"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-24 h-24 rounded-full bg-portfolio-accent opacity-40 blur-xl"></div>
                <div className="absolute left-0 top-0 w-32 h-32 rounded-full bg-portfolio-blue-medium opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <div className="animate-on-scroll">
        <ProjectsSection />
      </div>
      
      {/* Contact Section */}
      <div className="animate-on-scroll">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="bg-portfolio-card-bg py-8 border-t border-portfolio-neon-border/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-portfolio-gray-medium text-sm">
              © {new Date().getFullYear()} Adebayo Abdul-Salam. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-portfolio-gray-medium text-sm">
                GitHub: <a href="https://github.com/Abdul-Salam15" className="text-portfolio-blue-light hover:text-portfolio-accent transition-colors">@Abdul-Salam15</a>
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-portfolio-neon-border/20 text-center">
            <p className="text-portfolio-gray-medium text-xs">
              <strong>Deployment Guide:</strong> Deploy using{' '}
              <a href="https://pages.github.com/" className="text-portfolio-blue-light hover:text-portfolio-accent transition-colors">GitHub Pages</a>{' '}
              (push to gh-pages branch) or{' '}
              <a href="https://www.netlify.com/" className="text-portfolio-blue-light hover:text-portfolio-accent transition-colors">Netlify</a>{' '}
              (connect repository and set build command to "npm run build").
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
