import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa'

const StyledFooter = styled.footer`
  order: 2;
  min-height: 3.5rem;
  padding-bottom: 3rem;
  text-align: center;

  h5 {
    margin: 0;
  }

  a {
    color: #0175d8;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;

    img,
    a {
      height: 28px;
    }

    a {
      margin: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    padding-left: 14rem;
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <div className="social-icons">
        <a
          href="https://github.com/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#24292e" size="1.75rem" className="social-icon" />
        </a>
        <a
          href="https://twitter.com/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color="#1da1f2" size="1.75rem" className="social-icon" />
        </a>
        <a
          href="https://twitch.tv/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitch color="#4b367c" size="1.75rem" className="social-icon" />
        </a>
        <a
          href="https://www.youtube.com/user/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube color="#ff0000" size="1.75rem" className="social-icon" />
        </a>
      </div>
      <h5>
        Copyright &copy; 2017-{new Date().getFullYear()} Georgi Yanev.
        <br />
        Dedicated to Sofi and Anton{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        <br />
        This project is{' '}
        <a
          href="https://github.com/jumpalottahigh/blog.georgi-yanev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source and available on GitHub
        </a>
        .
      </h5>
    </StyledFooter>
  )
}

export default Footer
