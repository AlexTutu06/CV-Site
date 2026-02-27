const About = ({ text }) => {
  if (!text) return null;

  return (
    <section id="about" className="section-about">
      <p>{text}</p>
    </section>
  );
};

export default About;