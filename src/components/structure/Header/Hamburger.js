import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { slide as Menu } from 'react-burger-menu'
import { FaGithub, FaTwitter, FaLinkedin, FaRss, FaDev } from 'react-icons/fa'

import TagPool from '../../TagPool'

import './Hamburger.css'
import fpvtipsLogo from '../../../images/fpvtips-logo-full.svg'

const Hamburger = () => {
  const image = useStaticQuery(graphql`
    {
      georgi: file(relativePath: { regex: "/^home/georgi-face-3.jpg/" }) {
        name
        childImageSharp {
          fixed(width: 110, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Menu right>
      <a
        href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
        target="_blank"
        rel="noopener noreferrer"
        title="FPVtips on YouTube"
      >
        <img
          src={fpvtipsLogo}
          alt="FPVtips"
          style={{ width: '100%', height: '100%' }}
        />
      </a>
      <Link to="/posts/">🚁 FPV drone reviews</Link>
      <a
        href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
        target="_blank"
        rel="noopener noreferrer"
      >
        📺 FPVtips on YouTube
      </a>
      <a
        href="https://instagram.com/fpvtips"
        target="_blank"
        rel="noopener noreferrer"
      >
        📼 FPVtips on Instagram
      </a>
      <a
        href="https://twitter.com/fpvtips"
        target="_blank"
        rel="noopener noreferrer"
      >
        🐤 FPVtips on Twitter
      </a>
      <Link to="/about/">❔ About</Link>
      <Link to="/support-me/">🙏 Support me</Link>
      <br />
      <hr />
      <p>Quick tags:</p>
      <TagPool />
      <br />
      <hr />
      <br />
      <a
        href="https://github.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fixed={image.georgi.childImageSharp.fixed}
          alt="Georgi Yanev"
          style={{ borderRadius: '50%', marginBottom: '1rem' }}
        />
      </a>
      <a
        href="https://github.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size="1.75rem" color="#24292e" className="social-icon" />
        <span style={{ marginLeft: '0.35rem' }}>GitHub</span>
      </a>
      <a
        href="https://twitter.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size="1.75rem" color="#1da1f2" className="social-icon" />
        <span style={{ marginLeft: '0.35rem' }}>Twitter</span>
      </a>
      <a
        href="https://www.linkedin.com/in/yanevgeorgi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size="1.75rem" color="#0077b5" className="social-icon" />
        <span style={{ marginLeft: '0.35rem' }}>LinkedIn</span>
      </a>
      <a href="/feed.xml">
        <FaRss size="1.75rem" color="#f69536" className="social-icon" />
        <span style={{ marginLeft: '0.35rem' }}>RSS</span>
      </a>
      <a href="https://dev.to/jumpalottahigh" style={{ marginBottom: '6rem' }}>
        <FaDev size="1.75rem" color="#24292e" className="social-icon" />
        <span style={{ marginLeft: '0.35rem' }}>Dev.to</span>
      </a>
    </Menu>
  )
}

export default Hamburger
