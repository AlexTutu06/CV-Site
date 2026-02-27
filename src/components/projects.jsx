import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ items }) => {
  return (
    <section id="projects" style={{ marginTop: '40px' }}>
      <h2 className="section-title">Projects</h2>
      {items.map((project, index) => (
        <ProjectCard key={index} items={project} />
      ))}
    </section>
  );
};

export default Projects;