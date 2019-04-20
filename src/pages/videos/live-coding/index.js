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

const LiveCoding = () => {
  const twitchLiveStreams = [
    'PUixKyGoKXw',
    's4lb5TgWX58',
    'V8cESX3uMIE',
    'p8LRr-zGoz4',
    'KInfGLImv1g',
    'E2wcTzwNp6I',
    'MRuV5LGIrok',
    'azcOV7HaW0c',
    'PCa_khNp1a8',
    'jLiSxdpZb2A',
    'Htk7dduynDY',
  ]

  return (
    <Layout>
      <Section>
        <h2>Livestreams of working on various projects</h2>
        <div className="cta-container">
          <a
            href="https://www.youtube.com/user/jumpalottahigh/videos"
            target="_blank"
            rel="noreferrer"
          >
            <button className="category fpv">
              Georgi Livestreams WebDev - YouTube Channel
            </button>
          </a>
        </div>
        <Grid>
          {twitchLiveStreams.map(id => (
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

export default LiveCoding
