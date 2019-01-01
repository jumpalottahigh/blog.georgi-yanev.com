import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Hamburger from './Hamburger'

import github from '../../../../static/github.svg'
import twitter from '../../../../static/twitter.svg'
import linkedin from '../../../../static/linkedin.svg'
import rss from '../../../../static/rss.svg'

const AppBarWrapper = styled.div`
  display: flex;
  width: 100%;

  ul li {
    display: none;
  }

  .visible-xs {
    display: inline-block;
  }

  @media (min-width: 700px) {
    ul li {
      display: inline-block;
    }
  }
`

const activeStyle = {
  color: '#0175d8',
}

const Header = () => (
  <StaticQuery
    query={graphql`
      query Header {
        logo: allFile(filter: { relativePath: { regex: "/^logo/" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 56, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          position: 'fixed',
          backgroundColor: 'rgba(255,255,255,0.925)',
          boxShadow:
            '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
          height: '3.5rem',
          zIndex: '3',
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
                fontSize: '1rem',
              }}
            >
              <Img
                fluid={data.logo.edges[0].node.childImageSharp.fluid}
                alt="Georgi's Blog"
                style={{
                  height: '56px',
                  width: '56px',
                  marginBottom: '0',
                  marginRight: '.5rem',
                }}
              />
            </h1>
          </Link>

          <AppBarWrapper>
            <ul className="nav">
              <li>
                <Link exact="true" to="/" activeStyle={activeStyle}>
                  Home
                </Link>
              </li>
              <li className="visible-xs">
                <Link to="/news/" activeStyle={activeStyle}>
                  Blog posts
                </Link>
              </li>
              <li className="visible-xs">
                <a href="https://www.fpvtips.com">FPVtips</a>
              </li>
              <li>
                <Link to="/extras/fpv-videos/" activeStyle={activeStyle}>
                  Videos
                </Link>
              </li>
              <li>
                <a href="https://www.georgi-yanev.com/about">About</a>
              </li>
            </ul>
            <ul className="nav social">
              <li>
                <a
                  href="https://github.com/jumpalottahigh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
            <Hamburger className="hamburger" />
          </AppBarWrapper>
        </div>
      </header>
    )}
  />
)

export default Header
