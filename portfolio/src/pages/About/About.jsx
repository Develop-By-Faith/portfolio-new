import { Link } from 'react-router-dom'
import headshot from '../../assets/images/headshot.png'
import './About.css'

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'PowerShell', 'Bash'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'React Native', 'Vite', 'HTML/CSS'],
  },
  {
    category: 'Backend & Services',
    items: ['Django', 'Node.js', 'Celery', 'Redis', 'REST APIs'],
  },
  {
    category: 'Data & Cloud',
    items: ['Snowflake', 'SQL Server', 'MongoDB', 'Spark', 'Azure'],
  },
]

function About() {
  return (
    <section className="about section">
      <div className="container">
        <h1>About Me</h1>

        <div className="about-intro">
          <div className="about-photo">
            <img src={headshot} alt="Troy Jones" />
          </div>
          <div className="about-bio">
            <p>
              I'm Troy Jones — a senior software engineer based outside of
              Wichita, Kansas. I build full-stack applications, mobile
              experiences, and data systems that solve real problems for real
              people.
            </p>
            <p>
              My faith is a driving force behind everything I do. I have a deep
              desire to use my skills in technology to further the kingdom and
              work on projects that have a lasting, meaningful impact. That
              passion led me to design and build the{' '}
              <Link to="/projects/emaw"><strong>Every Man A Warrior</strong></Link> and{' '}
              <Link to="/projects/grow-bible"><strong>Grow Bible</strong></Link> apps — tools that help people engage
              with scripture and grow in their walk with God.
            </p>
            <p>
              Professionally, I work across the full stack — from React and
              React Native on the frontend to Django, APIs, and data pipelines
              on the backend. I've built prediction models, internal tooling,
              dashboards, and production mobile apps. I'm at my best when I can
              take a complex problem, see the solution, and move quickly from
              concept to working product.
            </p>
            <p>
              Outside of work, I'm a husband and father of three. My family is
              everything to me, and the balance of building things I believe in
              while being present and spiritually leading my wife and children is a high priority for me.
            </p>
          </div>
        </div>

        <div className="about-skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about-experience">
          <h2>Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-date">Jan 2023 — Present</div>
              <div className="experience-details">
                <h3>Senior Data Engineer / Software Engineer</h3>
                <p className="experience-company">ESP Logistics Technology</p>
                <p>
                  Building internal software, React/Vite dashboards, backend
                  services, and ML prediction pipelines that support logistics
                  operations and stakeholder decision-making.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-date">Dec 2021 — Jan 2023</div>
              <div className="experience-details">
                <h3>Threat Hunter / Analyst</h3>
                <p className="experience-company">Pillr</p>
                <p>
                  Built Python-based tooling and AI-assisted workflows to
                  process telemetry data and improve investigation speed in a
                  cybersecurity environment.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-date">Oct 2020 — Present</div>
              <div className="experience-details">
                <h3>Cyberwarfare Operator</h3>
                <p className="experience-company">
                  177th Information Aggressor Squadron, Air National Guard
                </p>
                <p>
                  Automation and analysis using Python, PowerShell, and Bash in
                  high-stakes operational environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
