
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // This is where you would normally send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
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
    </form>
  );
};

export default ContactForm;
