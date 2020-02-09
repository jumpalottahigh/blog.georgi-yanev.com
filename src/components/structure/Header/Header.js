import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Hamburger from './Hamburger'
import SocialIcons from './SocialIcons'

const AppBarWrapper = styled.div`
  display: flex;
  width: 100%;

  ul li {
    display: none;
  }

  .visible-xs {
    display: inline-block;
  }

  @media (min-width: 710px) {
    ul li {
      display: inline-block;
    }
  }
`

const activeStyle = {
  color: '#0175d8',
}

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query Header {
      logo: allFile(filter: { relativePath: { regex: "/^logo/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 56, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
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
              fluid={logo.edges[0].node.childImageSharp.fluid}
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
            <li exact="true" className="visible-xs">
              <Link to="/posts/" activeStyle={activeStyle}>
                FPV Drones
              </Link>
            </li>
            <li className="visible-xs">
              <Link to="/quick-tips/" activeStyle={activeStyle}>
                Quick tips
              </Link>
            </li>
            {/* TODO: Remove temporarily until the main nav revamp */}
            {/* <li>
              <Link to="/fpv-news/" activeStyle={activeStyle}>
                FPV news
              </Link>
            </li> */}
            <li>
              <Link to="/videos/" activeStyle={activeStyle}>
                Videos
              </Link>
            </li>
            <li>
              <Link to="/about/" activeStyle={activeStyle}>
                About
              </Link>
            </li>
          </ul>
          <SocialIcons />
          <Hamburger className="hamburger" />
        </AppBarWrapper>
      </div>
    </header>
  )
}

export default Header
