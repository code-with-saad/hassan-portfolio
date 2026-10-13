export default function Home() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio to showcase my skills, projects, and experience.",
      technologies: ["Next.js", "CSS", "JavaScript"],
    },
    {
      number: "02",
      title: "E-Commerce Website",
      description:
        "A clean shopping experience with responsive product layouts and intuitive navigation.",
      technologies: ["React", "Next.js", "API"],
    },
    {
      number: "03",
      title: "Dashboard UI",
      description:
        "A sleek dashboard interface with reusable components and a user-friendly layout.",
      technologies: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            Available for opportunities
          </div>

          <p className="eyebrow">HELLO, I'M A DEVELOPER</p>

          <h1>
            I build digital
            <br />
            experiences that
            <br />
            <span>make an impact.</span>
          </h1>

          <p className="hero-description">
            I'm a passionate web developer focused on creating
            beautiful, responsive, and user-friendly websites
            that turn ideas into reality.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              Let's Talk <span>↗</span>
            </a>
          </div>

          <div className="hero-socials">
            <span>Connect with me</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-glow" />

          <div className="developer-card">
            <div className="editor-header">
              <div className="editor-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.js</span>
              <span className="editor-menu">•••</span>
            </div>

            <div className="editor-code">
              <p>
                <span className="syntax-purple">const</span>{" "}
                developer = {"{"}
              </p>
              <p className="code-indent">
                name: <span className="syntax-green">"Hassan"</span>,
              </p>
              <p className="code-indent">
                role: <span className="syntax-green">"Web Developer"</span>,
              </p>
              <p className="code-indent">
                creative: <span className="syntax-orange">true</span>,
              </p>
              <p className="code-indent">
                passion: <span className="syntax-green">"Building for the web"</span>
              </p>
              <p>{"};"}</p>
              <br />
              <p>
                <span className="syntax-purple">developer</span>.
                <span className="syntax-blue">create</span>();
              </p>
              <p>
                <span className="syntax-purple">developer</span>.
                <span className="syntax-blue">innovate</span>();
              </p>
              <p>
                <span className="syntax-purple">developer</span>.
                <span className="syntax-blue">repeat</span>();
              </p>
            </div>

            <div className="editor-footer">
              <span>● JavaScript</span>
              <span>UTF-8</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">✳</span>
            Creative Thinking
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">⚡</span>
            Clean Code
          </div>
        </div>

        <a href="#about" className="scroll-cue">
          <span />
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* ABOUT */}
      <section className="section-container section-divider" id="about">
        <div className="section-heading">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>
            Turning ideas into <span>reality.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <h3>
              I love building things for the web that are useful,
              beautiful, and easy to use.
            </h3>

            <p>
              I'm a developer who enjoys solving problems through
              thoughtful design and clean code. My goal is to build
              digital experiences that look great on every screen
              and feel effortless to use.
            </p>

            <p>
              I'm constantly learning, experimenting with new
              technologies, and improving my development skills
              one project at a time.
            </p>

            <a href="#contact" className="text-link">
              Let's work together <span>↗</span>
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <h3>03<span>+</span></h3>
              <p>Projects to showcase</p>
            </div>
            <div className="stat-box">
              <h3>08<span>+</span></h3>
              <p>Technologies explored</p>
            </div>
            <div className="stat-box">
              <h3>100<span>%</span></h3>
              <p>Commitment to learning</p>
            </div>
            <div className="stat-box">
              <h3>∞</h3>
              <p>Ideas to explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-container section-divider" id="skills">
        <div className="section-heading">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>
            Skills & <span>technologies.</span>
          </h2>
          <p className="section-description">
            The tools I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-container section-divider" id="projects">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="section-label">03 / SELECTED WORK</p>
            <h2>
              Featured <span>projects.</span>
            </h2>
          </div>

          <p className="section-description projects-intro">
            A few examples of the ideas and experiences I enjoy
            bringing to life.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <a href="#contact" aria-label={`Discuss ${project.title}`}>
                  ↗
                </a>
              </div>

              <div className="project-preview">
                <div className="preview-window">
                  <div className="preview-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="preview-content">
                    <span className="preview-bracket">{"<"}</span>
                    <span className="preview-slash">/</span>
                    <span className="preview-bracket">{">"}</span>
                  </div>
                  <div className="preview-line preview-line-one" />
                  <div className="preview-line preview-line-two" />
                </div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-container contact-section" id="contact">
        <div className="contact-panel">
          <p className="section-label">04 / HAVE A PROJECT?</p>
          <h2>
            Let's build something
            <br />
            <span>amazing together.</span>
          </h2>
          <p>
            Have an idea in mind? Let's discuss your next project
            and make it happen.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="btn btn-primary"
          >
            Get In Touch <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}