import './App.css';
import { About, ProfileHeader, Experience, Skills, Education, Sidebar, Projects } from './components';
import pozaMea from './assets/Poza_Profil.jpeg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCplusplus, SiLinux, SiNodedotjs, SiPostgresql, SiJavascript, SiHtml5, SiReact } from 'react-icons/si';

function App() {
  const myEducation = [
    {
      period: "2024 — PRESENT",
      title: "Bachelor's degree",
      institution: "Faculty of Economic Cybernetics, Statistics and CS, ASE Bucharest",
      description: "Focused on building a strong foundation in software development, algorithms, database management and economics."
    }
  ];
    const myExperience = [
    {
      period: "2025 — PRESENT",
      title: "Backend Developer (Volunteer)",
      company: "SISC (Sindicatul Studenților din Cibernetică)",
      description: "Designed and managed relational databases within a Laragon environment, ensuring efficient data storage and retrieval, utilizing Yaak for rigorous API testing.",
      tags: ["Git", "JavaScript", "Node.js"]
    }
  ];
  const myProjects = [
    {
      period: "2025",
      title: "Node Data EntryApp",
      description: "Developed a RESTful API from scratch using native Node.js modules, managing HTTP requests and responses without external frameworks.",
      tags: ["JavaScript", "Node"]
    },
    {
      period: "2026",
      title: "Personal Portfolio Website",
      description: "Developed a responsive, modern web application using React, implementing a sticky side-navigation and asymetrical layout.",
      tags: ["React", "Vite", "CSS", "HTML"]
    },
    {
      period: "2025",
      title: "Linux User Management CLI (Bash)",
      description: "Co-developed a CLI-based User Management system featuring secure registration, authentication (login/logout), and active session tracking.",
      link : "https://github.com/AlexTutu06/Bash-User-Management-System",
      tags: ["Bash(Linux)"]
    }

  ];
  const sidebarData = {
  profile: {
    img: pozaMea,
    name: "Tuțu Alexandru",
    role: "Aspiring Back-End Developer",
    description: "I enjoy working on back-end systems and I'm currently expanding my full-stack knowledge with React."
  },
  navigation: [
    { tinta: "#about", eticheta: "ABOUT" },
    { tinta: "#experience", eticheta: "EXPERIENCE" },
    { tinta: "#education", eticheta: "EDUCATION" },
    { tinta: "#projects", eticheta: "PROJECTS" },
    { tinta: "#skills", eticheta: "SKILLS" }
  ],
  socials: [
    { url: "https://github.com/AlexTutu06", iconita: FaGithub },
    { url: "https://www.linkedin.com/in/alexandrututu8782702aa/", iconita: FaLinkedin }
  ]
};
const mySkills = [
  { name: "C/C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Linux/Bash", icon: <SiLinux />, color: "#FCC624" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "SQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "React", icon: <SiReact/>, color: "#61dafb"},
];
const description = `I am a Computer Science student focused on creating efficient back-end architectures. My experience in volunteer work allowed me to work with Node.js and Git, while my academic background gave me a solid understanding of C++, SQL and Linux systems.`
  return (
    <div className="container">
      <Sidebar items={sidebarData} />

      <main className="right-column">
        
        <section><About text= {description}/></section>
        <section><Experience items ={myExperience}/></section>
        <section><Education items={myEducation}/></section>
        <section><Projects items={myProjects} /></section>
        <section><Skills items={mySkills} /></section>
        
            

      </main> 
    </div> 
  );
}

export default App;