import { Link } from 'react-router-dom'
import './Card.css'

function Card({ title, description, tags = [], link, to, image }) {
  const content = (
    <div className="card">
      {image && (
        <img src={image} alt={title} className="card-image" loading="lazy" />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  if (to) {
    return (
      <Link to={to} className="card-link">
        {content}
      </Link>
    )
  }

  if (link) {
    return (
      <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}

export default Card
