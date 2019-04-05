import React from 'react'
import styled from 'styled-components'

import github from '../../../../static/github.svg'
import twitter from '../../../../static/twitter-blue.png'
import twitch from '../../../../static/twitch.png'
import youtube from '../../../../static/youtube.png'

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
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://twitter.com/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://twitch.tv/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitch} alt="Twitch" />
        </a>
        <a
          href="https://www.youtube.com/user/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="YouTube" />
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
