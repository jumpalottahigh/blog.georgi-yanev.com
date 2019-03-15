import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import Layout from '../../../components/structure/layout'
import Video from '../../../components/Video/Video'

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  min-width: 380px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Section = styled.section`
  padding-bottom: 2rem;

  h2 {
    text-align: center;
  }

  .cta-container {
    text-align: center;
    margin-bottom: 1.45rem;
  }
`

const WebDev = () => {
  const gettingStartedWithGatsbyVideos = [
    'RXkB0twDCVk',
    'AmThwniM928',
    '7kA7lvcTVeU',
    'tdhhLxu4goE',
    'Dhj5lcbvt-U',
  ]

  return (
    <Layout>
      <Section>
        <h2>Getting started with Gatsby series</h2>
        <div className="cta-container">
          <a
            href="https://www.youtube.com/channel/UCHH7NUqRBkcCUnfT9e60xPw/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="category fpv">
              Georgi Codes - YouTube Channel
            </button>
          </a>
        </div>
        <Grid>
          {gettingStartedWithGatsbyVideos.map(id => (
            <Fade key={id}>
              <Video
                src={id}
                width="560"
                height="315"
                title={`Georgi Codes video - ${id}`}
              />
            </Fade>
          ))}
        </Grid>
      </Section>
    </Layout>
  )
}

export default WebDev
