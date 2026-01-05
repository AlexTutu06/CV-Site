import './App.css';
import { SiCplusplus, SiLinux, SiNodedotjs, SiPostgresql, SiJavascript, SiReact, SiHtml5 } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from './assets/Poza_Profil.jpeg'
function App() {
  return (
    <div className="container">
      {/* LEFT SIDE */}
      <aside className="left-column">
        
    {}
    <img 
      src="{profileImg}" 
      alt="Alexandru Tutu" 
      className="profile-pic" 
    />
        <div>
          <h1 style={{fontSize: '3rem', margin: 0}}>Tuțu Alexandru</h1>
          <h2 style={{color: 'var(--text-main)', fontSize: '1.2rem'}}>Aspiring Back-End Developer</h2>
          <p className="description">
            I enjoy working on back-end systems and I'm currently expanding my full-stack knowledge.
          </p>
          
          <nav className="nav-menu">
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#experience" className="nav-link">EXPERIENCE</a>
            <a href="#education" className="nav-link">EDUCATION</a>
            <a href="#skills" className="nav-link">SKILLS</a>
          </nav>
        </div>
        <div className="social-links">
  <a 
    href="https://github.com/AlexTutu06" 
    target="_blank" 
    rel="noreferrer" 
    className="social-icon"
  >
    <FaGithub />
  </a>
  <a 
    href="https://www.linkedin.com/in/alexandru-tu%C8%9Bu-8782702aa/" 
    target="_blank" 
    rel="noreferrer" 
    className="social-icon"
  >
    <FaLinkedin />
  </a>
</div>
      </aside>

      {/* RIGHT SIDE */}
      <main className="right-column">
        
        <section id="about">
          <p style={{color: 'var(--text-secondary)'}}>
            I am a Computer Science student focused on creating efficient back-end architectures. 
            My experience in volunteer work allowed me to work with Node.js and Git, 
            while my academic background gave me a solid understanding of C++, SQL and Linux systems.
          </p>
        </section>

        <section id="experience">
          <div className="card">
            <div className="date">2023 — PRES</div>
            <div className="content">
              <h3>Back-End Developer Volunteer · SISC</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                Designed and maintained REST APIs. Managed relational databases within a Laragon environment,
                 ensuring efficient data storage and retrieval, utilizing Yaak for rigorous API testing. 
              </p>
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="card">
            <div className="date">2023 — 2027</div>
            <div className="content">
              <h3>B.Sc. in Computer Science</h3>
              <h4 style={{color: 'var(--text-secondary)', fontWeight: '400'}}>Bucharest University of Economic Studies (ASE) </h4>
              <h5 style={{color: 'var(--text-secondary)', fontWeight: '400'}}>Specialization: Economic Informatics </h5>
              <p style={{fontSize: '0.85rem'}}>Key courses: Algorithms, OOP (C++), Operating Systems, Databases.</p>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="skills-grid">
            <div className="skill-item"><SiCplusplus color="#00599C"/> <span>C/C++</span></div>
            <div className="skill-item"><SiLinux color="#FCC624"/> <span>Linux/Bash</span></div>
            <div className="skill-item"><SiNodedotjs color="#339933"/> <span>Node.js</span></div>
            <div className="skill-item"><SiPostgresql color="#4169E1"/> <span>SQL</span></div>
            <div className="skill-item"><SiJavascript color="#F7DF1E"/> <span>JavaScript</span></div>
            <div className="skill-item"><SiHtml5 color="#cb7616ff"/> <span>HTML</span></div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
