import "./App.css";

const skills = [
  "AWS",
  "EC2",
  "S3",
  "IAM",
  "Docker",
  "Kubernetes",
  "Linux",
  "Shell Scripting",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "CI/CD",
  "Terraform",
  "Jenkins",
  "Ansible",
  
];
const projects = [
  {
    title: "AWS Cloud Deployment",
    desc: "Deployed scalable applications on AWS EC2 with monitoring and automation.",
  },
  {
    title: "Docker Infrastructure",
    desc: "Built containerized applications using Docker and CI/CD pipelines.",
  },
  {
    title: "Kubernetes Cluster",
    desc: "Created Kubernetes clusters with load balancing and autoscaling.",
  },
];

export default function App() {
  return (
    <div className="app">
      {/* Background Glows */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      <div className="glow glow3"></div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Ravindra Singh</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>
          Cloud & DevOps <span>Engineer</span>
        </h1>

        <p>
          AWS • Docker • Kubernetes • Linux • Cloud Computing 
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Projects</button>
          <button className="secondary-btn">Contact Me</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="about-card">
          <p>
            I am an aspiring Cloud & DevOps Engineer passionate about AWS, Docker, Kubernetes, Linux, and cloud computing. With a strong foundation in cloud technologies and DevOps practices, I am eager to contribute to building scalable and efficient systems.

I enjoy building scalable applications, deploying cloud infrastructure, and learning modern DevOps tools and practices. I continuously improve my skills by creating real-world projects and exploring cloud technologies.

My goal is to become a skilled DevOps and Cloud Engineer capable of building reliable, secure, and automated systems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">{index + 1}</div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <button className="project-btn">View Project</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2>Let's Build Something Amazing 🚀</h2>

        <p>
          Interested in cloud, DevOps, or web development collaboration?
          Let's connect.
        </p>

        <div className="contact-buttons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © 2026 Ravindra Singh | Built with React ❤️
      </footer>
    </div>
  );
}