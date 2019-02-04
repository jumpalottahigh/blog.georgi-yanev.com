import React from 'react'
import github from '../../../../static/github.svg'
import twitter from '../../../../static/twitter.svg'
import linkedin from '../../../../static/linkedin.svg'
import rss from '../../../../static/rss.svg'

// TODO: Bring in the icons as svg and to be able to style them for dark mode easily
const LS_KEY_GY_BLOG_DARK_MODE = 'gy-blog-dark-mode'

export default class SocialIcons extends React.Component {
  state = {
    darkMode: false,
  }

  componentDidMount = () => {
    // Check if dark mode has been set
    let darkModeFromLS = JSON.parse(
      self.localStorage.getItem(LS_KEY_GY_BLOG_DARK_MODE)
    )

    if (darkModeFromLS) {
      this.setState({
        darkMode: darkModeFromLS,
      })
    }
  }

  render() {
    const { darkMode } = this.state

    return (
      <ul className="nav social">
        <li>
          <a
            href="https://github.com/jumpalottahigh"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* {darkMode ? (
              <img src={twitter} alt="Twitter" />
            ) : (
              <img src={github} alt="Github" />
              )} */}
            <img src={github} alt="Github" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jumpalottahigh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yanevgeorgi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="/feed.xml">
            <img src={rss} alt="Subscribe to RSS feed" />
          </a>
        </li>
      </ul>
    )
  }
}
