import React from 'react';

const ProjectCard = ({ items }) => {
  if (!items) return null;

  return (
    <div className="card">
      <div className="date">{items.period}</div>
      <div className="card-content">
       <h3>
          <a 
            href={items.link ? items.link : undefined} 
            className="card-link" 
            target="_blank" 
            rel="noreferrer"
          >
            <span> {items.title} </span>
          </a>
        </h3>
        <p className="card-description">{items.description}</p>
        
        <div className="tags">
          {items.tags?.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;