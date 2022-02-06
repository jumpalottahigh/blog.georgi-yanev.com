import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Hamburger from './Hamburger'
import SocialIcons from './SocialIcons'
import DropDown from './DropDown'
import TagPool from '../../TagPool'
import logo from '../../../assets/pages/logo.svg'

const AppBarWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
  }

  ul li {
    display: none;
  }

  .visible-xs {
    display: flex;
  }

  @media (min-width: 710px) {
    ul li {
      display: flex;
    }
  }
`

const Header = () => {
  const activeStyle = {
    color: '#0175d8',
  }

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
            <img src={logo} alt="Georgi Yanev" style={{ height: '56px' }} />
          </h1>
        </Link>

        <AppBarWrapper>
          <ul className="nav">
            <li>
              <Link exact="true" to="/" activeStyle={activeStyle}>
                Home
              </Link>
            </li>
            <DropDown className="visible-xs">
              <Link exact="true" to="/posts/" activeStyle={activeStyle}>
                FPV Drones
              </Link>

              <ul>
                <li>
                  <a href="/posts/?tag=micro">All micro drones / toothpicks</a>
                </li>
                <li>
                  <Link to="/fpv/mobula6-48khz-jesc-complete-setup-review/">
                    Mobula6
                  </Link>
                </li>
                <li>
                  <Link to="/fpv/emax-tinyhawk-freestyle-complete-review-and-setup/">
                    Emax Tinyhawk Freestyle
                  </Link>
                </li>
                <li>
                  <Link to="/fpv/geprc-phantom-review-and-setup/">
                    GEPRC Phantom
                  </Link>
                </li>
                <li>
                  <Link to="/fpv/geprc-cinepro-4k-cinewhoop-review/">
                    GEPRC CinePro 4K
                  </Link>
                </li>
                <li>
                  <Link to="/fpv/set-up-fpv-drone-simulator/">
                    Drone simulator
                  </Link>
                </li>
                <li>
                  <Link to="/fpv/gear-2019/">My FPV gear</Link>
                </li>
                <li>
                  <hr />
                </li>
                <li className="tags">
                  <p>Top 10 tags:</p>
                  <TagPool tagAmount={10} />
                </li>
              </ul>
            </DropDown>
            <DropDown className="visible-xs">
              <Link to="/quick-tips/" activeStyle={activeStyle}>
                Misc
              </Link>
              <ul>
                <li>
                  <Link to="/videos/" activeStyle={activeStyle}>
                    Videos
                  </Link>
                </li>
                <li>
                  <Link to="/quick-tips/" activeStyle={activeStyle}>
                    Quick tips
                  </Link>
                </li>
                <li>
                  <Link to="/fpv-news/" activeStyle={activeStyle}>
                    FPV news
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter/" activeStyle={activeStyle}>
                    FPVtips Newsletter
                  </Link>
                </li>
                <li>
                  <Link to="/about/" activeStyle={activeStyle}>
                    About
                  </Link>
                </li>
              </ul>
            </DropDown>
            <li>
              <Link to="/support-me/" activeStyle={activeStyle}>
                Support me
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
