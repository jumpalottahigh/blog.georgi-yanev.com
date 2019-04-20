import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../../../components/structure/layout'

const StarCraftEncyclopediaPage = () => (
  <Layout>
    <Helmet title="StarCraft Encyclopedia" />
    <section>
      <h1>StarCraft Encyclopedia</h1>

      <div className="disclaimer-container">
        <span className="year">
          ~ year: 2000 - 2001 | Georgi's age: 15 - 16
        </span>
        <span className="disclaimer">
          Unedited things the way they were in the late 90s and early 2000s
        </span>
      </div>

      <div className="m-b-1">
        <p>
          To say I had my fair share of StarCraft obsession doesn't even begin
          to describe it. I also wrote an encyclopedia on the topic, covering
          every unit of the game. Excuse the comic sans, and pictures created in
          MS Paint :)
        </p>
        <p>
          The StarCraft Interactive Encyclopedia (SIE) also came as a website
          and an executable for Windows, coded in C++ -{' '}
          <a href={'/SIE.exe'}>SIE.</a>
        </p>
        <p>
          Also, here's a bonus custom campaign I made:{' '}
          <a href={'/DarkRevenge--byZasz.rar'}>Dark Revenge</a>
        </p>
      </div>

      <iframe
        src={'/starcraft-encyclopedia-by-georgi.pdf'}
        width="800px"
        height="2100px"
        title="starcraft encyclopedia by georgi"
      />

      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)

export default StarCraftEncyclopediaPage
