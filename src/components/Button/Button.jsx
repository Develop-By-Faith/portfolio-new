import { Link } from 'react-router-dom'
import './Button.css'

function Button({ children, variant = 'primary', href, to, onClick, className = '' }) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
