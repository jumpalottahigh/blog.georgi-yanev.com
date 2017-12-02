import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

import SideBar from '../components/sidebar.js'
import logo from '../images/logo.png'
import ogImage from '../images/main-page.jpg'
import github from '../../static/github.svg'
import twitter from '../../static/twitter.svg'

// PrismJS dependency
// import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/themes/prism-okaidia.css'

const Header = () => (
  <div
    style={{
      position: 'fixed',
      borderBottom: '1px solid #0275d8',
      backgroundColor: 'rgba(255,255,255,0.925)',
      height: '3.5rem',
      zIndex: '2',
      left: '0',
      right: '0'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        paddingLeft: '1.05rem',
        paddingRight: '1.05rem',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Link
        to="/"
        style={{
          color: '#0275d8',
          textDecoration: 'none',
          marginRight: '.7rem'
        }}
      >
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            fontSize: '1rem'
          }}
        >
          <img
            src={logo}
            alt="Georgi Yanev's blog"
            style={{
              height: '2.25rem',
              marginBottom: '0',
              marginRight: '.5rem'
            }}
          />
          Georgi Yanev
        </h1>
      </Link>

      <ul className="nav">
        <li>
          <Link to="/news">Blog posts</Link>
        </li>
        <li>
          <a href="https://www.georgi-yanev.com">About</a>
        </li>
        {/* <li>
          <Link to="/news?tag=smarthome">Smart Home</Link>
        </li>
        <li>
          <Link to="/news?tag=fpv">FPV</Link>
        </li> */}
      </ul>
      <ul className="nav social">
        <li>
          <a href="https://github.com/jumpalottahigh">
            <img style={{ marginRight: '0.4rem' }} src={github} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jumpalottahigh">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Georgi Yanev | Blog on Web OSS, FPV and Smart Home Automation"
      meta={[
        {
          name: 'description',
          content:
            "I'm Georgi and I like to write code, tinker with Smart Home Automation projects and I am currently learning how to fly FPV racing quads. I work as a web developer and I see myself as a fairly technical person heavily invested in all things web with a great interest in AR, VR and AI. Also, <3 OSS."
        },
        {
          name: 'keywords',
          content:
            'smart home automation, home assistant, open source software, OSS, FPV, racing quads, Wizard x220, code, DIY, projects'
        },
        {
          property: 'og:image',
          content: `https://blog.georgi-yanev.com${ogImage}`
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blog.georgi-yanev.com' },
        {
          property: 'og:title',
          content:
            'Georgi Yanev - Blog on Web OSS, FPV and Smart Home Automation'
        },
        {
          property: 'og:description',
          content:
            "I'm Georgi and I like to write code, tinker with Smart Home Automation projects and I am currently learning how to fly FPV racing quads. I work as a web developer and I see myself as a fairly technical person heavily invested in all things web with a great interest in AR, VR and AI. Also, <3 OSS."
        }
      ]}
    />

    <Header />

    <div className="main-wrapper">
      <SideBar />
      <div className="main">{children()}</div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
