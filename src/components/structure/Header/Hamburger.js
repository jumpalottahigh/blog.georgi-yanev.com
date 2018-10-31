import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import github from '../../../../static/github.svg'
import twitter from '../../../../static/twitter.svg'
import linkedin from '../../../../static/linkedin.svg'
import rss from '../../../../static/rss.svg'
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
          <img src={github} alt="Github" />
          GitHub
        </a>
        <a
          href="https://twitter.com/jumpalottahigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/yanevgeorgi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
          LinkedIn
        </a>
        <a href="/feed.xml">
          <img src={rss} alt="Subscribe to RSS feed" />
          RSS
        </a>
      </Menu>
    )
  }
}
