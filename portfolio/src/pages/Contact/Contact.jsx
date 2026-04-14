import { useState } from 'react'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.growbyfaith.com/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact section">
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">
          Have a question or want to work together? Drop me a message.
        </p>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="form-success">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>

          <div className="contact-info">
            <h2>Other Ways to Reach Me</h2>
            <div className="contact-links">
              <a href="mailto:jonestroyc@protonmail.com" className="contact-link">
                <FiMail size={20} />
                <span>jonestroyc@protonmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/troy-j-2578a065"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
