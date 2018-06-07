import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const MusicVideosAndMixtapesPage = () => (
  <div>
    <Helmet title="Music Videos and Mixtapes" />
    <h1>Music Videos and Mixtapes</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2003 - 2006 | Georgi's age: 18 - 21</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div>Music videos of some of Jumpalottahigh and Blink E's music.</div>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/oGm_qu_eHnU?rel=0"
      frameborder="0"
      allowfullscreen
      title="youtube video clip 1"
    />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/b9ODFpJFFLk?rel=0"
      frameborder="0"
      allowfullscreen
      title="youtube video clip 2"
    />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/oUtx0i-p3Og?rel=0"
      frameborder="0"
      allowfullscreen
      title="youtube video clip 3"
    />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/zV4KASgWwjs?rel=0"
      frameborder="0"
      allowfullscreen
      title="youtube video clip 4"
    />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qs8ZZNA_Oso?rel=0"
      frameborder="0"
      allowfullscreen
      title="youtube video clip 5"
    />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/oYB4gvGNyC4?rel=0"
      frameborder="0"
      allowfullscreen
      title="youtube video clip 6"
    />

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default MusicVideosAndMixtapesPage
