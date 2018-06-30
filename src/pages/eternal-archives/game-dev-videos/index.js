import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../../components/structure/layout'
import Video from '../../../components/Video/Video'

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  min-width: 380px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const GameDevVideosPage = () => (
  <Layout>
    <Helmet title="Game Dev Videos" />
    <h1>Game Dev Videos</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2014 | Georgi's age: 29</span>
    </div>

    <div className="m-b-1">Game Dev Videos of school and hackathon works.</div>

    <Grid>
      <div className="m-b-1">
        <Video
          src="lxTmMm6aDF8"
          width="560"
          height="315"
          title="game dev video 1"
        />
        <p>MazeCrawler character showcase</p>
      </div>
      <div className="m-b-1">
        <Video
          src="5JfdqkkoVbs"
          width="560"
          height="315"
          title="game dev video 1"
        />
        <p>MazeCrawler Intro Cinematic</p>
      </div>
      <div className="m-b-1">
        <Video
          width="560"
          height="315"
          src="4UAwHKGwKuc"
          title="game dev video 1"
        />
        <p>MazeCrawler Gameplay</p>
      </div>
      <div className="m-b-1">
        <Video
          width="560"
          height="315"
          src="MLw_mVCMOs0"
          title="game dev video 1"
        />
        <p>Rollin' Shark hackathon demo</p>
      </div>
    </Grid>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GameDevVideosPage
