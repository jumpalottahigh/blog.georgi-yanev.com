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
    margin: 0;
    padding: 8px;
    color: #f2f7fd;
    background: #0175d8;
    font-size: 18px;
  }

  time {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #232f3e;
    background: #ccc;
    padding: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const FPVtipsVideos = () => {
  // const { fpvtips } = useStaticQuery(graphql`
  //   {
  //     fpvtips: allYoutubeVideo(filter: { channelId: { eq: "@FPVtips" } }) {
  //       nodes {
  //         id
  //         title
  //         videoId
  //         publishedAt(formatString: "MMM DD YYYY")
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <Section>
        <h2>
          <a
            href="https://www.youtube.com/@FPVtips"
            target="_blank"
            rel="noopener noreferrer"
          >
            FPVtips
          </a>
        </h2>
        <Grid>
          {/* {fpvtips.nodes.map((video) => (
            <Fade key={video.id}>
              <VideoContainer>
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>{video.title}</h5>
                </a>
                <Video
                  src={video.videoId}
                  width="560"
                  height="315"
                  title={video.title}
                />
                <time dateTime={video.publishedAt}>{video.publishedAt}</time>
              </VideoContainer>
            </Fade>
          ))} */}
        </Grid>
      </Section>
    </Layout>
  )
}

export default FPVtipsVideos
