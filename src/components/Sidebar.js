import React from 'react'
import Link from 'gatsby-link'

const SideBar = () => (
  <div className="sidebar-wrapper">
    <div className="sidebar">
      <h5>Blog posts</h5>
      <ul className="sidenav">
        <li>
          📝 <em>General</em>
        </li>
        <li>
          <Link to="/general/recap-of-2017-and-goals-for-2018">
            2017 Recap and 2018 Goals
          </Link>
        </li>
        <li>
          🏠 <em>Smart home automation</em>
        </li>
        <li>
          <Link to="/smart-home/living-with-smart-home-automation">
            Living with smart home automation
          </Link>
        </li>
        <li>
          💻 <em>Software development</em>
        </li>
        <li>
          <Link to="/software/how-to-become-a-good-developer">
            How to become a good software developer
          </Link>
        </li>
        <li>
          🚁 <em>FPV quads</em>
        </li>
        <li>
          <Link to="/fpv/add-dvr-to-eachine-vr-007-pro/">
            How to add DVR to Eachine VR 007 Pro
          </Link>
        </li>
        <li>
          <Link to="/fpv/add-buzzer-to-wizard-x220/">
            How to add a buzzer to the Wizard x220
          </Link>
        </li>
        <li>
          <Link to="/fpv/setup-flysky-fs-i6-ibus/">
            How to setup iBUS on Flysky FS-i6
          </Link>
        </li>
        <li>
          <Link to="/fpv/how-to-direct-solder-vtx-antenna/">
            How to direct solder vtx antenna
          </Link>
        </li>
        <li>
          <Link to="/fpv/tools-and-backpack-setup/">
            Tools and backpack setup
          </Link>
        </li>
        <li>
          <Link to="/fpv/upgrading-your-wizard/">
            Upgrading your Wizard x220
          </Link>
        </li>
        <li>
          <Link to="/fpv/getting-started-with-fpv-drones/">
            Getting started with FPV
          </Link>
        </li>
        <li>Coming soon...</li>
        <li className="coming-soon">Getting started with micro fpv drones</li>
        <li className="coming-soon">how to install betaflight 3.2</li>
      </ul>
      <hr />
      <h5>
        Eternal Archives <span>/1999-2003/</span>
      </h5>
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
            <span className="sidenav-info">
              /a Heroes of Might and Magic story/
            </span>
          </Link>
        </li>
        <li>
          <em>Media</em>
        </li>
        <li>
          <Link to="/eternal-archives/music">Music</Link>
        </li>
        <li>
          <Link to="/eternal-archives/music-videos-and-mixtapes">
            Videos and Mixtapes
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/game-dev-videos">Game Dev Videos</Link>
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
          <Link to="/eternal-archives/warcraft-units">WarCraft Units</Link>
        </li>
        <li>
          <Link to="/eternal-archives/funny-win98-bugs">
            Funny Windows 98 bugs
          </Link>
        </li>
        <li>
          <Link to="/eternal-archives/batch-files">Batch files</Link>
        </li>
        <li>
          <Link to="/eternal-archives/my-first-site-and-programs">
            My first site and programs
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default SideBar
