
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { FileDown } from 'lucide-react';

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

  const resumeUrl = "https://drive.google.com/file/d/1ED36ZD0VUF6_6d0a3NnmS7du1PMUS4ui/view?usp=sharing";

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-portfolio-blue-medium blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-portfolio-accent blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 w-70 h-70 rounded-full bg-portfolio-blue-dark blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                Adebayo <br /> 
                <span className="text-portfolio-accent neon-text animate-pulse">Abdul-Salam</span>
              </h1>
              <p className="text-base sm:text-lg text-portfolio-gray-medium mb-6 max-w-md mx-auto">
                Creative Data Scientist specializing in building exceptional digital experiences 
                with a focus on clean design and efficient code.
              </p>
              <div className="flex space-x-4 mt-6 justify-center">
                <a 
                  href="#projects" 
                  className="neon-button text-sm px-4 py-2 sm:px-6 sm:py-3 sm:text-base"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="neon-button-alt text-sm px-4 py-2 sm:px-6 sm:py-3 sm:text-base"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-accent hover:text-portfolio-blue-light transition-colors duration-300"
                >
                  <FileDown size={18} className="mr-2" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 animate-scale-in">
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
        <div className="container mx-auto px-4 sm:px-6">
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
        </div>
      </footer>
    </>
  );
};

export default Index;
