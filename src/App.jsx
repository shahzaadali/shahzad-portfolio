
import './App.css'
import ProjectCard from './ProjectCard'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Kidney Stone Detection Using CNN',
    category: 'Deep Learning · Medical Imaging',
    visualLabel: 'CNN / ULTRASOUND',
    image: '/images/kidney-stone-visual.png',
    description:
      'A deep learning project exploring the classification of ultrasound images into normal and kidney stone categories using a Convolutional Neural Network.',
    technologies: ['Python', 'CNN', 'Deep Learning'],
    githubUrl: '',
  },
  {
    id: 2,
    title: 'Face Mask Detection',
    category: 'Computer Vision',
    visualLabel: 'MASK / NO MASK',
    image: '/images/face-mask-visual.png',
    description:
  'Built a deep learning-based face mask detection system that identifies With Mask and Without Mask classes using live webcam feeds and uploaded images.',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Fake News Detection',
    category: 'Natural Language Processing',
    visualLabel: 'NLP / CLASSIFICATION',
    image: '/images/fake-news-visual.png',
    
description:
'Developed an NLP-based Fake News Detection system that analyzes user-entered news text, uses CountVectorizer for text feature extraction, and applies machine learning classification to predict whether news is Fake or Real.',

    technologies: ['Python', 'NLP', 'CountVectorizer'],
    githubUrl: '',
  },
]


const skillCategories = [
  {
    title: 'Programming & Data',
    skills: [
      'Python',
      'SQL',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      'Scikit-learn',
      'Classification',
      'Regression',
      'Data Preprocessing',
      'Model Evaluation',
    ],
  },
  {
    title: 'Deep Learning & Computer Vision',
    skills: [
      'TensorFlow',
      'Keras',
      'CNN',
      'Image Classification',
      'Computer Vision',
    ],
  },
  {
    title: 'NLP & AI Automation',
    skills: [
      'Natural Language Processing',
      'CountVectorizer',
      'AI Automation',
      'AI Agents',
      'Workflow Automation',
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'React (Basic)',
    ],
  },
]



function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Shahzad<span>.</span>
        </a>

        

      
      <div
      id="mobile-navigation"
      className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>




        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            AI ENGINEER · OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M SHAHZAD ALI</p>

          <h1>
            Building a smarter
            <br />
            future with <span>AI.</span>
          </h1>

          <p className="hero-description">
            I build practical AI solutions using Machine Learning,
            Deep Learning and Python — turning ideas into useful
            real-world applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
            
            <a
              href="/ShahzadAli_AIEngineer_Resume.pdf"
              download="ShahzadAli_AIEngineer_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume ↓
            </a>

          </div>

          <div className="hero-footer">
            <span>PYTHON</span>
            <span>MACHINE LEARNING</span>
            <span>DEEP LEARNING</span>
          </div>
        </div>

        <div className="visual-area" aria-label="AI-inspired visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="core-glow"></div>

          <div className="ai-core">
            <span>AI</span>
            <div className="core-caption">INTELLIGENCE IN MOTION</div>
          </div>

          <div className="floating-card card-top">
            <span className="mini-icon">✳</span>
            <div>
              <strong>Machine Learning</strong>
              <small>Learning from data</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="mini-icon purple">⌘</span>
            <div>
              <strong>AI Solutions</strong>
              <small>Ideas into applications</small>
            </div>
          </div>

          <div className="visual-label">EXPLORING WHAT'S POSSIBLE</div>
        </div>

        <div className="hero-index">01 / INTRODUCTION</div>
      </section>

      
<section className="next-section" id="about">
  <p className="eyebrow">GET TO KNOW ME</p>

  <h2>
    Passionate about AI.
    <br />
    Focused on real-world impact.
  </h2>

  <p>
    I'm Shahzad Ali, an aspiring AI Engineer with a
    background in Data Science and a strong interest
    in building intelligent, practical applications.
  </p>

  
<p>
  My work focuses on Machine Learning, Deep Learning,
  Computer Vision, Natural Language Processing, and
  AI Automation. I'm also exploring and building AI
  Agents to automate workflows, connect intelligent
  systems, and solve practical problems using Python
  and modern AI technologies.
</p>


  <p>
    I'm continuously learning, exploring new technologies,
    and strengthening my skills through hands-on projects.
    My goal is to contribute to meaningful AI solutions
    while growing as an AI Engineer.
  </p>
  
<div className="about-photo">
  <img
    src="/images/shahzad-profile.png"
    alt="Shahzad Ali - AI Engineer"
    loading="lazy"
  />
</div>

</section>



<section className="next-section skills-section" id="skills">
  <p className="eyebrow">MY TECHNICAL EXPERTISE</p>

  <h2>Technologies I work with.</h2>

  <p>
    My technical toolkit covers Machine Learning,
    Deep Learning, Data Science, and AI Automation.
    I continuously expand these skills through
    hands-on projects and practical experimentation.
  </p>

  <div className="skills-grid">
    {skillCategories.map((category) => (
      <div className="skill-card" key={category.title}>
        <h3>{category.title}</h3>

        <div className="skill-tags">
          {category.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>



      
<section className="next-section projects-section" id="projects">
  <p className="eyebrow">SELECTED WORK</p>

  <h2>Projects that solve problems.</h2>

  <p>
    A selection of my work in Deep Learning,
    Computer Vision and Natural Language Processing.
  </p>

  <p className="projects-disclaimer">
    Project visuals are illustrative representations
    of the applications.
  </p>

  <div className="projects-grid">
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
      />
    ))}
  </div>
</section>



<section className="next-section experience-section" id="experience">
  <p className="eyebrow">PROFESSIONAL JOURNEY</p>

  <h2>Experience & Contributions.</h2>

  <p>
    Practical experience in AI application development,
    Machine Learning, data analysis, and collaborative
    software development.
  </p>

  <div className="experience-timeline">
    <article className="experience-card">
      <span className="experience-date">
        Apr 2026 – Jun 2026
      </span>

      <h3>AI Intern</h3>
      <p className="experience-company">CodAgentic</p>

      <ul>
        <li>
          Contributed to the development of AI-based web
          applications using FastAPI, supporting application
          reliability and performance.
        </li>
        <li>
          Collaborated with the development team to build,
          test, and refine software solutions.
        </li>
      </ul>
    </article>

    <article className="experience-card">
      <span className="experience-date">
        Jun 2025 – Jul 2025
      </span>

      <h3>Machine Learning Intern</h3>
      <p className="experience-company">
        Arch Technologies · Islamabad, Pakistan
      </p>

      <ul>
        <li>
          Analyzed real-world datasets to extract insights
          supporting data-driven decisions.
        </li>
        <li>
          Performed iterative testing, quality checks, and
          performance evaluation to improve processes.
        </li>
      </ul>
    </article>
  </div>
</section>


<section className="next-section education-section" id="education">
  <p className="eyebrow">ACADEMIC BACKGROUND</p>

  <h2>Education & Learning.</h2>

  <p>
    My academic foundation in Data Science has helped
    me build knowledge in Artificial Intelligence,
    Machine Learning, and analytical problem-solving.
  </p>

  <div className="education-grid">
    <article className="education-card">
      <span className="education-label">2022 – 2026</span>

      <h3>BS Data Science</h3>

      <p className="education-university">
        Khwaja Fareed University of Engineering
        &amp; Information Technology (KFUEIT)
      </p>

      <p className="education-location">
        Rahim Yar Khan, Pakistan
      </p>

      <span className="education-cgpa">
        CGPA: 3.21 / 4.00
      </span>
    </article>

    <article className="education-card">
      <span className="education-label">2020 – 2022</span>

      <h3>Intermediate</h3>

      <p className="education-university">
        Government Khawaja Fareed Graduate College
      </p>

      <p className="education-location">
        Rahim Yar Khan, Pakistan
      </p>
    </article>

    <article className="education-card">
      <span className="education-label">2018 – 2020</span>

      <h3>Matric</h3>

      <p className="education-university">
        Government Boys High School,
        Chak No. 103/1-L
      </p>

      <p className="education-location">
        Khanpur, District Rahim Yar Khan, Pakistan
      </p>
    </article>
  </div>
</section>



<section className="next-section" id="contact">
  <p className="eyebrow">LET'S CONNECT</p>

  <h2>Have an idea? Let's talk.</h2>

  <p>
    Connect with me for AI opportunities and
    potential projects.
  </p>

  <div className="contact-buttons">
    <a
      className="primary-btn contact-btn"
      href="https://www.linkedin.com/in/shahzadali007/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Connect on LinkedIn ↗
    </a>

    <a
      className="secondary-btn contact-btn"
      href="https://github.com/shahzaadali"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore My GitHub ↗
    </a>

    <a
      className="secondary-btn contact-btn"
      href="https://mail.google.com/mail/?view=cm&fs=1&to=shahzadali.engineer%40gmail.com&su=AI%20Project%20Inquiry"
      target="_blank"
      rel="noopener noreferrer"
    >
      Send Me an Email ↗
    </a>
  </div>
</section>


      <footer className="site-footer">
        <span>Shahzad Ali · AI Engineer</span>
        <span>Built with curiosity and code.</span>
      </footer>
    </main>
  )
}

export default App
