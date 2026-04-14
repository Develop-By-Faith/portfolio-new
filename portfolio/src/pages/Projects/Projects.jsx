import Card from '../../components/Card/Card'
import projects from '../../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section className="projects section">
      <div className="container">
        <h1>Projects</h1>
        <p className="projects-subtitle">
          Things I've built and contributed to over the years.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags.slice(0, 5)}
              to={`/projects/${project.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
