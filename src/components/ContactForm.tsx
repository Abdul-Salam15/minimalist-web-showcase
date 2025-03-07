
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    const serviceId = "service_portfolio"; // This should be replaced with your actual service ID
    const templateId = "template_contact"; // This should be replaced with your actual template ID
    const userId = "user_portfolio"; // This should be replaced with your actual user ID
    
    // Store these values for the contact form instructions
    localStorage.setItem('emailjs_service_id', serviceId || '');
    localStorage.setItem('emailjs_template_id', templateId || '');
    localStorage.setItem('emailjs_user_id', userId || '');
    
    setEmailJSInitialized(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Get EmailJS credentials from localStorage (or you can set them directly if you have them)
    const serviceId = localStorage.getItem('emailjs_service_id');
    const templateId = localStorage.getItem('emailjs_template_id');
    const userId = localStorage.getItem('emailjs_user_id');
    
    if (!serviceId || !templateId || !userId) {
      toast.error('Email service not configured. Please set up EmailJS credentials.');
      setIsSubmitting(false);
      
      // Show configuration instructions as a fallback
      toast(
        'EmailJS Setup Required',
        {
          description: 'Sign up at emailjs.com and configure your service, template, and user ID.',
          duration: 8000,
        }
      );
      return;
    }
    
    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message
    };
    
    try {
      // Send the email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again.');
      
      // Fallback to mailto link if EmailJS fails
      const mailtoLink = `mailto:asalamadebayo@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
      
      toast(
        'Alternative Option',
        {
          description: (
            <a href={mailtoLink} className="text-portfolio-blue-light underline">
              Click here to send via your email client instead
            </a>
          ),
          duration: 6000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 animate-fade-in">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray-dark mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-portfolio-gray-light focus:border-portfolio-blue-medium focus:ring-1 focus:ring-portfolio-blue-medium outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray-dark mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-portfolio-gray-light focus:border-portfolio-blue-medium focus:ring-1 focus:ring-portfolio-blue-medium outline-none transition-all"
          placeholder="Your email address"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray-dark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-portfolio-gray-light focus:border-portfolio-blue-medium focus:ring-1 focus:ring-portfolio-blue-medium outline-none transition-all resize-none"
          placeholder="Your message"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </>
        )}
      </button>
      
      {!emailJSInitialized && (
        <p className="text-sm text-portfolio-gray-medium mt-4 p-3 bg-portfolio-card-bg/30 rounded-lg">
          <strong>Setup Note:</strong> To activate the contact form, create a free account at 
          <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue-light hover:text-portfolio-accent mx-1">EmailJS</a> 
          and update the serviceId, templateId, and userId variables in this component.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
