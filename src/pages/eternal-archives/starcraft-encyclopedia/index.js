import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const StarCraftEncyclopediaPage = () =>
  <div>
    <Helmet
      title="StarCraft Encyclopedia"
    />
    <h1>
      StarCraft Encyclopedia
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        ~ year: 2000 - 2001 | ~ age: 15 - 16
      </span>
      <span className="disclaimer">
        Uneditted things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <p>To say I had my fair share of StarCraft obsession doesn't even begin to describe it. I also wrote an encyclopedia on the topic, covering every unit of the game. Excuse the comic sans, and pictures created in MS Paint :)</p>
      <p>The Encyclopedia also came as a website and an executable for Windows, coded in C++.</p>
    </div>

    <iframe src={__PATH_PREFIX__ + '/starcraft-encyclopedia-by-georgi.pdf'} width="800px" height="2100px" />

    <Link to="/">Go back to the homepage</Link>
  </div>

export default StarCraftEncyclopediaPage