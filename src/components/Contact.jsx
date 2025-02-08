import React from 'react'

const Contact = () => {
  return (
    <div className='contact1'>
      <div className="con">
        Contact Me
      </div>
      <div className="social-links">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
        title="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon github"
        title="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="mailto:yemail@example.com"
        className="social-icon email"
        title="Email"
      >
        <i className="fas fa-envelope"></i>
      </a>
    
      </div>
    </div>  
  )
}

export default Contact
