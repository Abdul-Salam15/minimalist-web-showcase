
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'AI Chatbot Platform',
    description: 'An intelligent chatbot platform powered by natural language processing and machine learning for seamless customer interactions.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    techStack: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'React' }
    ]
  },
  {
    id: 2,
    title: 'E-commerce Application',
    description: 'A fully responsive e-commerce platform with product browsing, cart functionality, and secure checkout process.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    techStack: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' }
    ]
  },
  {
    id: 3,
    title: 'Portfolio Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for visualizing portfolio performance with interactive charts and real-time data.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    techStack: [
      { name: 'TypeScript' },
      { name: 'D3.js' },
      { name: 'Express' }
    ]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-portfolio-card-bg py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-portfolio-blue-light blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-70 h-70 rounded-full bg-portfolio-blue-dark blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
