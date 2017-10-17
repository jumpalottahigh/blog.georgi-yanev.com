import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

import logo from '../images/logo.png'
import ogImage from '../images/main-page.jpg'

const Header = () =>
  <div
    style={{
      position: 'fixed',
      borderBottom: '1px solid #0275d8',
      backgroundColor: 'rgba(255,255,255,0.925)',
      height: '3.5rem',
      zIndex: '2',
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
        className="nav"
      >
        <li>
          <Link to="/news">
            News
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives">
            Eternal Archives
          </Link>
        </li>
      </ul>
      <ul
        className="nav social"
      >
        <li>
          <a href="https://github.com/jumpalottahigh">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jumpalottahigh">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  </div>

const SideBar = () =>
  <div
    className="sidebar-wrapper"
  >
    <div
      className="sidebar"
    >
      <h5>News</h5>
      <ul className="sidenav">
        <li>
          <em>FPV quads</em>
        </li>
        <li>
          <Link to="/news/fpv-drones/">
            Getting started with FPV
          </Link>
        </li>
        <li>
          <Link to="/news/upgrading-your-wizard/">
            Upgrading your Wizard x220
            <span className="sidenav-info">/part 1/</span>
          </Link>
        </li>
        <li>
          <Link to="/news/tools-and-backpack-setup/">
            Tools and backpack setup
          </Link>
        </li>
        <li>Coming soon...</li>
        <li className="coming-soon">installing betaflight 3.2</li>
        <li className="coming-soon">soldering a buzzer</li>
        <li className="coming-soon">change to 4s batteries</li>
        <li className="coming-soon">
          Getting started with smart home automation
        </li>
      </ul>
      <hr />
      <h5>Eternal Archives</h5>
      <ul className="sidenav">
        <li>
          <em>Fan Fiction</em>
        </li>
        <li>
          <Link to="/eternal-archives/fiction/leaders-of-the-great-dark-beyond">
            Leaders of the Great Dark Beyond
            <span className="sidenav-info">/a Warcraft story/</span>
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/fiction/sargeras-tomb">
            Sargeras' tomb
            <span className="sidenav-info">/a Warcraft story/</span>
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/fiction/triumph-of-the-orcish-hordes">
            Triumph of the orcish hordes
            <span className="sidenav-info">/a Warcraft story/</span>
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/fiction/the-small-village-tavern">
            The small village tavern
            <span className="sidenav-info">/a Warcraft story/</span>
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/fiction/athene-d2-character-story">
            Athine Palade:
            <span className="sidenav-info">/Diablo 2 character story/</span>
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/fiction/log-of-gelus-life">
            Log of Gelu's life
            <span className="sidenav-info">/a Heroes of Might and Magic story/</span>
          </Link>
        </li>
        <li>
          <em>Media</em>
        </li>
        <li>
          <Link to="/eternal-archives/music">
            Music
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/music-videos-and-mixtapes">
            Videos and Mixtapes
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/game-dev-videos">
            Game Dev Videos
          </Link>
        </li>
        <li>
          <em>Random</em>
        </li>
        <li>
          <Link to="/eternal-archives/starcraft-encyclopedia">
            StarCraft Encyclopedia
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/starcraft-screenshots">
            StarCraft Screenshots
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/diablo-unique-mobs">
            Diablo Unique Mobs
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/warcraft-units">
            WarCraft Units
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/funny-win98-bugs">
            Funny Windows 98 bugs
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/batch-files">
            Batch files
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/really-random">
            Really random
          </Link>
        </li>
      </ul>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Georgi Yanev | Blog on Web OSS, FPV and Smart Home Automation"
      meta={[
        { name: 'description', content: 'I\'m Georgi and I like to write code, tinker with Smart Home Automation projects and I am currently learning how to fly FPV racing quads. I work as a web developer and I see myself as a fairly technical person heavily invested in all things web with a great interest in AR, VR and AI. Also, <3 OSS.' },
        { name: 'keywords', content: 'smart home automation, home assistant, open source software, OSS, FPV, racing quads, Wizard x220, code, DIY, projects' },
        { property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blog.georgi-yanev.com' },
        { property: 'og:title', content: 'Georgi Yanev\'s blog on Web OSS, FPV and Smart Home Automation' },
        { property: 'og:description', content: 'I\'m Georgi and I like to write code, tinker with Smart Home Automation projects and I am currently learning how to fly FPV racing quads. I work as a web developer and I see myself as a fairly technical person heavily invested in all things web with a great interest in AR, VR and AI. Also, <3 OSS.' },
      ]}
    />
    
    <Header />
    
    <div
      className="main-wrapper"
    >
      <SideBar />
      <div
        className="main"
      >
        {children()}
      </div>
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
