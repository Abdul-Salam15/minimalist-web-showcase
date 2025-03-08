
import React from 'react';
import ContactForm from './ContactForm';
import EmailButton from './EmailButton';
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-80 h-80 rounded-full bg-portfolio-accent blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-portfolio-blue-medium blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-white text-3xl sm:text-4xl">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 sm:mt-16">
          <div className="lg:max-w-md text-center mx-auto w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Let's connect</h3>
            <p className="text-sm sm:text-base text-portfolio-gray-medium mb-6 sm:mb-8 max-w-md mx-auto">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started, or if you're looking 
              for a developer to join your team, feel free to reach out.
            </p>
            
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h4 className="text-xs sm:text-sm uppercase tracking-wider text-portfolio-gray-medium mb-2 sm:mb-3">Email</h4>
                <div className="flex justify-center">
                  <EmailButton email="asalamadebayo@gmail.com" />
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm uppercase tracking-wider text-portfolio-gray-medium mb-2 sm:mb-3">Social</h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white text-center">Send me a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
