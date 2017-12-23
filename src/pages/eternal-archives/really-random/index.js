import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import myFirstWebsite from '../../../images/my-first-website.png'
import programsWrittenByMe from '../../../images/programs-written-by-me.png'

const ReallyRandomPage = () => (
  <div>
    <Helmet title="Really Random" />
    <h1>Really Random</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2000 | Georgi's age: 15</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <img src={myFirstWebsite} alt="my first website" />
      <img src={programsWrittenByMe} alt="programs written by me" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ReallyRandomPage
