
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Employee Attrition Prediction',
    description: 'A machine learning model using logistic regression to predict employee attrition, helping organizations identify risk factors and implement retention strategies.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    techStack: [
      { name: 'Python' },
      { name: 'Jupyter Notebook' },
      { name: 'Pandas' },
      { name: 'Scikit-learn' },
      { name: 'Matplotlib' }
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
        
        <div className="flex justify-center mt-16">
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
