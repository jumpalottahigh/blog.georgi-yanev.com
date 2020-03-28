import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

    a:hover,
    a:active {
      box-shadow: inset 0 -2rem 0px 0px #0175d8;
    }

    a:focus {
      box-shadow: inset 0 -2.2rem 0px 0px #0175d8;
    }
  }
`

const VideoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  h5 {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 2px;
    color: #fff;
    margin: 0;
    background: #232f3e;
  }

  time {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #232f3e;
    background: #ccc;
    padding: 2px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const FPVVideos = () => {
  const { georgiFpv } = useStaticQuery(graphql`
    {
      georgiFpv: allYoutubeVideo(
        filter: { channelId: { eq: "UC2gwYMcfb0Oz_fl9W1uTV2Q" } }
      ) {
        nodes {
          id
          title
          videoId
          publishedAt(formatString: "MMM DD YYYY")
        }
      }
    }
  `)

  return (
    <Layout>
      <Section>
        <h2>
          <a
            href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            Georgi FPV
          </a>
        </h2>
        <Grid>
          {georgiFpv.nodes.map(video => (
            <Fade key={video.id}>
              <VideoContainer>
                <h5>{video.title}</h5>
                <Video
                  src={video.videoId}
                  width="560"
                  height="315"
                  title={video.title}
                />
                <time dateTime={video.publishedAt}>{video.publishedAt}</time>
              </VideoContainer>
            </Fade>
          ))}
        </Grid>
      </Section>
    </Layout>
  )
}

export default FPVVideos
