
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Abdul-Salam15',
    icon: <Github size={20} />
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/adebayo-abdul-salam',
    icon: <Linkedin size={20} />
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/adebayo_salam',
    icon: <Twitter size={20} />
  }
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-portfolio-gray-dark border border-portfolio-gray-light hover:border-portfolio-accent hover:text-portfolio-accent transition-all duration-300"
          aria-label={`Visit ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
