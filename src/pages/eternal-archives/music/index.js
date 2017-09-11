import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const MusicPage = () =>
  <div>
    <Helmet
      title="Jumpalottahigh & Blink E Music"
    />
    <h1>
      Jumpalottahigh &amp; Blink E music
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        ~ year: 2002 - 2006 | ~ age: 17 - 21
      </span>
      <span className="disclaimer">
        Uneditted things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <p><a href="https://soundcloud.com/georgi-yanev-2" target="_blank" rel="noopener">Soundcloud links</a> to some of Jumpalottahigh and Blink E's music.</p>
      <p>The Evolution is 100% own rhymes on 100% other people's beats with 0% post production after mixing and 0% profit. Made with love for fun.</p>
    </div>

    <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/5808786&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
    <div className="m-b-1">
      <p>High School Shit was our first album when we were still J &amp; Blinky. 100% own rhymes, 100% crappy Fruity Loops 4 made beats, 10% re-records and 0% profit. Made with love for fun.</p>
    </div>

    <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/9536725&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

    <Link to="/">Go back to the homepage</Link>
  </div>

export default MusicPage
