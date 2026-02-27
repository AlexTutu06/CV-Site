import React from 'react';

const Education = ({ items }) => {
  return (
    <section id="education" style={{ marginTop: '40px' }}>
      <h2 className="section-title">Education</h2>
      {items.map((items, index) => (
        <div className="card" key={index}>
          <div className="date">{items.period}</div>
          <div className="card-content">
            <h3>
              <a href={items.link} className="card-link" target="_blank" rel="noreferrer">
                <span>
                  {items.title} — <span className="accent-text">{items.institution}</span>
                </span>
              </a>
            </h3>
            <p className="card-description">{items.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;