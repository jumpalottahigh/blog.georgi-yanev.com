import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { slide as Menu } from 'react-burger-menu'
import { FaGithub, FaTwitter, FaLinkedin, FaRss, FaDev } from 'react-icons/fa'

import TagPool from '../../TagPool'
import Mode from '../../Mode'

import fpvtipsLogo from '../../../images/fpvtips-logo-full.svg'

const GlobalStyle = createGlobalStyle`
  .bm-item {
    display: flex !important;
    align-items: center;
    text-decoration: none;
    margin-bottom: 10px;
    color: #000;
    transition: color 0.2s;
  }

  .bm-item img {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }

  /* Change color on hover */
  a.bm-item:hover {
    color: #0175d8;
  }

  /* The rest copied directly from react-burger-menu docs */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 20px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    width: 32px !important;
    height: 32px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    width: 4px !important;
    height: 26px !important;
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #fafafa;
    padding: 1em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-menu-wrap {
    top: 0;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Styling of overlay */
  .bm-overlay {
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 710px) {
    .bm-burger-button {
      display: none;
    }
  }

  .bm-overlay,
  .bm-menu-wrap {
    transition-duration: 0.3s !important;
  }
`

const Hamburger = () => {
  const image = useStaticQuery(graphql`
    {
      georgi: file(relativePath: { regex: "/^home/georgi-face-3.jpg/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110, quality: 80, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <Menu right>
      <GlobalStyle />
      <div style={{ marginBottom: '1rem' }}>
        <Mode />
      </div>
      <Link to="/posts/">Blog posts</Link>
      <Link to="/eternal-archives/">Eternal Archives</Link>
      <hr />
      <p>Top 10 Tags:</p>
      <TagPool />
      <br />
      <hr />
      <a
        href="https://www.youtube.com/@FPVtips"
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
        href="https://www.youtube.com/@FPVtips"
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
        href="http://tiktok.com/@fpvtips"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎼 FPVtips on TikTok
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
      <br />
      <a
        href="https://github.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage
          image={image.georgi.childImageSharp.gatsbyImageData}
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
