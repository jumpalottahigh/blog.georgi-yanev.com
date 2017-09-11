import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import starcraftBugs from '../../../images/starcraft-bugs.png'

const StarCraftScreenShotsPage = () =>
  <div>
    <Helmet
      title="StarCraft Screenshots"
    />
    <h1>
      StarCraft Screenshots
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        ~ year: 2000 | ~ age: 15
      </span>
      <span className="disclaimer">
        Uneditted things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <img src={starcraftBugs} alt="Some funny StarCraft bugs" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>

export default StarCraftScreenShotsPage