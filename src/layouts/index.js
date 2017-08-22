import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

import logo from '../images/logo.png'

const Header = () =>
  <div
    style={{
      position: 'fixed',
      borderBottom: '1px solid #0275d8',
      backgroundColor: 'rgba(255,255,255,0.925)',
      height: '3.5rem',
      zIndex: '1',
      left: '0',
      right: '0',
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
        height: '100%',
      }}
    >
      <Link
          to="/"
          style={{
            color: '#0275d8',
            textDecoration: 'none',
            marginRight: '.7rem',
          }}
        >
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            fontSize: '1.3rem',
          }}
        >
        <img
          src={logo}
          alt="Georgi Yanev's blog"
          style={{
            height: '2.25rem',
            marginBottom: '0',
            marginRight: '.5rem',
          }}
        />
        Georgi Yanev
        </h1>
      </Link>


      <ul
        style={{
          display: 'block',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            display: 'inline-block',
            margin: 0,
          }}
        >
          <Link
            to="/page-2"
            style={{
              color: '#000',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '.03rem',
              padding: '0 0.7rem',
            }}
          >
            Link2
          </Link>
        </li>
        <li
          style={{
            display: 'inline-block',
            margin: 0,
          }}
        >
          <Link
            to="/"
            style={{
              color: '#000',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '.03rem',
              padding: '0 0.7rem',
            }}
          >
            Link3
          </Link>
        </li>
      </ul>
      <ul
        style={{
          display: 'block',
          listStyleType: 'none',
          marginLeft: 'auto',
          marginBottom: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            display: 'inline-block',
            margin: 0,
          }}
        >
          <a
            href="https://github.com/jumpalottahigh"
            style={{
              color: '#0275d8',
              textDecoration: 'none',
              letterSpacing: '.03rem',
              padding: '0 0.7rem',
            }}
          >
            Github
          </a>
        </li>
        <li
          style={{
            display: 'inline-block',
            margin: 0,
          }}
        >
          <a
            href="https://twitter.com/jumpalottahigh"
            style={{
              color: '#0275d8',
              textDecoration: 'none',
              letterSpacing: '.03rem',
              padding: '0 0.7rem',
            }}
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Georgi Yanev: Eternal Archive"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    
    <Header />
    
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '3.5rem',
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
