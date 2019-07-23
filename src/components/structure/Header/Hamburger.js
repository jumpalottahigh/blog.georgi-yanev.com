import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { FaGithub, FaTwitter, FaLinkedin, FaRss, FaDev } from 'react-icons/fa'

import './Hamburger.css'

export default class Hamburger extends React.Component {
  render() {
    return (
      <Menu right>
        <a
          href="https://github.com/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="1.75rem" color="#24292e" className="social-icon" />
          GitHub
        </a>
        <a
          href="https://twitter.com/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size="1.75rem" color="#1da1f2" className="social-icon" />
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/yanevgeorgi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="1.75rem" color="#0077b5" className="social-icon" />
          LinkedIn
        </a>
        <a href="/feed.xml">
          <FaRss size="1.75rem" color="#f69536" className="social-icon" />
          RSS
        </a>
        <a href="https://dev.to/jumpalottahigh">
          <FaDev size="1.75rem" color="#24292e" className="social-icon" />
          Dev.to
        </a>
      </Menu>
    )
  }
}
