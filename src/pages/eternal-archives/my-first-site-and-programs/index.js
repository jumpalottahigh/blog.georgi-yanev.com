import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import myFirstWebsite from '../../../images/my-first-website.png'
import myFirstWebsiteSource from '../../../images/eternal-archives-main.jpg'
import programsWrittenByMe from '../../../images/programs-written-by-me.png'

const MyFirstSiteAndPrograms = () => (
  <div>
    <Helmet title="Really Random" />
    <h1>My first site and programs</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2000 | Georgi's age: 15</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <img src={myFirstWebsite} alt="my first website" />
      <img src={myFirstWebsiteSource} alt="my first website's source" />
      <img src={programsWrittenByMe} alt="programs written by me" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default MyFirstSiteAndPrograms
