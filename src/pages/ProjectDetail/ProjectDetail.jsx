import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { getProjectBySlug } from '../../data/projects'
import Button from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Button to="/projects" variant="outline">
            Back to Projects
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="project-hero section">
        <div className="container">
          <Link to="/projects" className="project-back">
            <FiArrowLeft size={16} />
            <span>All Projects</span>
          </Link>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          {project.impact.length > 0 && (
            <div className="project-impact">
              {project.impact.map((stat) => (
                <div key={stat.label} className="project-stat">
                  <span className="project-stat-value">{stat.value}</span>
                  <span className="project-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Story */}
      {project.story.paragraphs.length > 0 && (
        <section className="project-story section">
          <div className="container">
            <h2>{project.story.heading}</h2>
            <div className="project-story-content">
              {project.story.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="project-gallery section">
          <div className="container">
            <h2>App Screenshots</h2>
            <Carousel>
              {project.screenshots.map((screenshot) => (
                <figure key={screenshot.id} className="project-screenshot project-screenshot-mobile">
                  <div
                    className="project-screenshot-placeholder"
                    data-label={screenshot.caption}
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="project-screenshot-image"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <figcaption>{screenshot.caption}</figcaption>
                </figure>
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {/* Dashboard Screenshots */}
      {project.dashboardScreenshots && project.dashboardScreenshots.length > 0 && (
        <section className="project-gallery section">
          <div className="container">
            <h2>Church Dashboard</h2>
            <Carousel>
              {project.dashboardScreenshots.map((screenshot) => (
                <figure key={screenshot.id} className="project-screenshot project-screenshot-desktop">
                  <div
                    className="project-screenshot-placeholder-desktop"
                    data-label={screenshot.caption}
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="project-screenshot-image"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <figcaption>{screenshot.caption}</figcaption>
                </figure>
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features.length > 0 && (
        <section className="project-features section">
          <div className="container">
            <h2>Key Features</h2>
            <div className="project-features-grid">
              {project.features.map((feature) => (
                <div key={feature.title} className="project-feature-card">
                  <feature.Icon className="project-feature-icon" size={28} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {Object.keys(project.techStack).length > 0 && (
        <section className="project-tech section">
          <div className="container">
            <h2>Built With</h2>
            <div className="project-tech-grid">
              {Object.entries(project.techStack).map(([category, items]) => (
                <div key={category} className="project-tech-group">
                  <h3>{category}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="project-cta section">
        <div className="container">
          {project.links && project.links.length > 0 && (
            <div className="project-link-group">
              {project.links.map((link) => (
                <Button key={link.label} href={link.url} variant="primary">
                  {link.label}
                </Button>
              ))}
            </div>
          )}
          <div className="project-cta-actions">
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
            <Button to="/contact" variant="outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
