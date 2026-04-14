import { FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/troy-j-2578a065" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:jonestroyc@protonmail.com" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Troy Jones. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
