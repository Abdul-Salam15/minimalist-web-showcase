
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface TechItem {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  techStack: TechItem[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demoLink,
  codeLink,
  techStack
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col card-hover rounded-lg overflow-hidden bg-white shadow-sm animate-fade-in">
      <div className={`relative aspect-video overflow-hidden ${!imageLoaded ? 'img-loading' : ''}`}>
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end justify-between p-4">
          <div>
            <h3 className="text-white font-semibold text-xl mb-2 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">{title}</h3>
          </div>
          <div className="flex space-x-3">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full text-portfolio-gray-dark hover:bg-portfolio-accent hover:text-white transition-colors duration-300"
              aria-label="View Demo"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full text-portfolio-gray-dark hover:bg-portfolio-accent hover:text-white transition-colors duration-300"
              aria-label="View Code"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-portfolio-gray-dark">{title}</h3>
        <p className="text-portfolio-gray-medium mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap">
            {techStack.map((tech) => (
              <span key={tech.name} className="chip">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
