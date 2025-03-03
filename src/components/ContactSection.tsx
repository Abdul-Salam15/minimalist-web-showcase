
import React from 'react';
import ContactForm from './ContactForm';
import EmailButton from './EmailButton';
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="lg:max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-gray-dark">Let's connect</h3>
            <p className="text-portfolio-gray-medium mb-8">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started, or if you're looking 
              for a developer to join your team, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-portfolio-gray-medium mb-3">Email</h4>
                <EmailButton email="adebayo@example.com" />
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-portfolio-gray-medium mb-3">Social</h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-gray-dark">Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
