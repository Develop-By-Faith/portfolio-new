import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import projects from '../../data/projects'
import headshot from '../../assets/images/headshot.png'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <p className="hero-greeting">Hi, I'm</p>
              <h1 className="hero-name">Troy Jones</h1>
              <p className="hero-title">Senior Software Engineer</p>
              <p className="hero-tagline">
                I build full-stack applications, data systems, and mobile
                experiences that solve real problems. Passionate about using
                technology to make a meaningful impact.
              </p>
              <div className="hero-actions">
                <Button to="/projects">View My Work</Button>
                <Button to="/contact" variant="outline">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <img src={headshot} alt="Troy Jones" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <h2>What I Do</h2>
          <div className="about-preview-grid">
            <div className="about-preview-card">
              <h3>Full-Stack Development</h3>
              <p>
                Building production applications from frontend to backend —
                React dashboards, Django services, APIs, and everything in
                between.
              </p>
            </div>
            <div className="about-preview-card">
              <h3>Mobile Development</h3>
              <p>
                Creating cross-platform mobile experiences with React Native,
                backed by robust server infrastructure and real-time features.
              </p>
            </div>
            <div className="about-preview-card">
              <h3>Data Engineering</h3>
              <p>
                Designing ETL pipelines, prediction workflows, and data-driven
                tooling that turns raw information into actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured section">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="featured-subtitle">
            Faith-driven projects I've designed, built, and maintain.
          </p>
          <div className="featured-grid">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags.slice(0, 4)}
                to={`/projects/${project.id}`}
              />
            ))}
          </div>
          <div className="featured-cta">
            <Button to="/projects" variant="outline">
              See All Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
