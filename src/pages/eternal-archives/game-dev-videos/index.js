import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const GameDevVideosPage = () => (
  <div>
    <Helmet title="Game Dev Videos" />
    <h1>Game Dev Videos</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2014 | Georgi's age: 29</span>
    </div>

    <div className="m-b-1">Game Dev Videos of school and hackathon works.</div>

    <div className="m-b-1">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lxTmMm6aDF8?rel=0"
        frameBorder="0"
        allowFullScreen
        title="game dev video 1"
      />
      <p>MazeCrawler character showcase</p>
    </div>

    <div className="m-b-1">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5JfdqkkoVbs?rel=0"
        frameBorder="0"
        allowFullScreen
        title="game dev video 1"
      />
      <p>MazeCrawler Intro Cinematic</p>
    </div>

    <div className="m-b-1">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4UAwHKGwKuc?rel=0"
        frameBorder="0"
        allowFullScreen
        title="game dev video 1"
      />
      <p>MazeCrawler Gameplay</p>
    </div>

    <div className="m-b-1">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MLw_mVCMOs0?rel=0"
        frameBorder="0"
        allowFullScreen
        title="game dev video 1"
      />
      <p>Rollin' Shark hackathon demo</p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default GameDevVideosPage
