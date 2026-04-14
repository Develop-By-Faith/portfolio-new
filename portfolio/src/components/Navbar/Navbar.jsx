import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="navbar">
      <nav className="navbar-inner container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobile}>
          Troy Jones
        </NavLink>

        <ul className={`navbar-links ${mobileOpen ? 'navbar-links--open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'navbar-link--active' : ''}`
                }
                onClick={closeMobile}
                end={path === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            className="navbar-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
