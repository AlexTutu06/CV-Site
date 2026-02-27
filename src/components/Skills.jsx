import React from 'react';

const Skills = ({ items }) => {
  if (!items) return null;

  return (
    <section id="skills" style={{ marginTop: '40px' }}>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid"> 
        {items.map((skill, index) => (
          <div className="skill-box" key={index}>
            <span className="icon-wrapper" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span className="skill-text">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;