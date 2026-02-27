import React from 'react';

const Experience = ({ items }) => {
  return (
    <section id="experience" style={{ marginTop: '90px' }}>
      <h2 className="section-title">Experience</h2>
      {items.map((job, index) => (
        <div className="card" key={index}>
          <div className="date">{job.period}</div>
          <div className="card-content">
            <h3>
              <a href={job.link} className="card-link" target="_blank" rel="noreferrer">
                <span>
                  {job.title} — <span className="accent-text">{job.company}</span>
                </span>
              </a>
            </h3>
            <p className="card-description">{job.description}</p>
            
            {job.tags && job.tags.length > 0 && (
              <div className="tags" style={{ marginTop: '15px' }}>
                {job.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;