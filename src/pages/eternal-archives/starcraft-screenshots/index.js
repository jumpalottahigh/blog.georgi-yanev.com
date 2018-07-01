import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../../components/structure/layout'

import starcraftBug2 from '../../../images/starcraft-bug2.png'
import starcraftBug3 from '../../../images/starcraft-bug3.png'
import starcraftBug4 from '../../../images/starcraft-bug4.png'
import starcraftBug5 from '../../../images/starcraft-bug5.png'
import starcraftBug6 from '../../../images/starcraft-bug6.png'
import starcraftBug7 from '../../../images/starcraft-bug7.png'
import starcraftBug8 from '../../../images/starcraft-bug8.png'
import starcraftBug9 from '../../../images/starcraft-bug9.png'
import starcraftBug10 from '../../../images/starcraft-bug10.png'

const StarCraftScreenShotsPage = () => (
  <Layout>
    <Helmet title="StarCraft Screenshots" />
    <h1>StarCraft Screenshots</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2000 | Georgi's age: 15</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <img src={starcraftBug2} alt="Nexus with a Nuclear Silo" />
      <p>Nexus with a Nuclear Silo</p>
    </div>
    <div className="m-b-1">
      <img src={starcraftBug3} alt="Infested Spore Colony" />
      <p>Infested Spore Colony</p>
    </div>
    <div className="m-b-1">
      <img src={starcraftBug4} alt="Invisible minerals moving" />
      <p>Invisible minerals moving</p>
    </div>
    <div className="m-b-1">
      <img
        src={starcraftBug5}
        alt="A Creep Colony builds another Creep Colony?"
      />
      <p>A Creep Colony builds another Creep Colony?</p>
    </div>
    <div className="m-b-1">
      <img src={starcraftBug6} alt="Showing through the stones" />
      <p>Showing through the stones</p>
    </div>
    <div className="m-b-1">
      <img
        src={starcraftBug7}
        alt="Reavers' ammo holds still since it can't quite make it"
      />
      <p>Reavers' ammo holds still since it can't quite make it</p>
    </div>
    <div className="m-b-1">
      <img src={starcraftBug8} alt="Infested Spore Colony" />
      <p>Infested Spore Colony</p>
    </div>
    <div className="m-b-1">
      <img src={starcraftBug9} alt="Zergling in the middle of a Hatchery" />
      <p>Zergling in the middle of a Hatchery</p>
    </div>
    <div className="m-b-1">
      <img
        src={starcraftBug10}
        alt="That exact moment when the Bunker is destroyed"
      />
      <p>That exact moment when the Bunker is destroyed</p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StarCraftScreenShotsPage
