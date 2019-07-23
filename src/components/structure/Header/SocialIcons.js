import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaRss } from 'react-icons/fa'

const SocialIcons = () => (
  <ul className="nav social">
    <li>
      <a
        href="https://github.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color="#24292e" className="social-icon" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color="#1da1f2" className="social-icon" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/yanevgeorgi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="#0077b5" className="social-icon" />
      </a>
    </li>
    <li>
      <a href="/feed.xml">
        <FaRss color="#f69536" className="social-icon" />
      </a>
    </li>
  </ul>
)

export default SocialIcons
