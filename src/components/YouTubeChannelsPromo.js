import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const StyledYouTubeChannelsPromo = styled.div`
  display: flex;

  a {
    width: 50%;
    box-shadow: none;
    border: 1px solid #dedede;

    &:hover {
      border: 2px solid #dedede;
      transform: scale(1.05);
      z-index: 9;
    }
  }
`

const YouTubeChannelsPromo = ({ text, ...rest }) => {
  const images = useStaticQuery(graphql`
    {
      homeBottom: allFile(
        filter: { relativePath: { regex: "/^home/home-bottom/" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 928, quality: 75) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }

      youtubeFpvtips: file(relativePath: { regex: "/^home/home-fpvtips/" }) {
        childImageSharp {
          fluid(maxWidth: 362, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      youtubeGeorgiFpv: file(
        relativePath: { regex: "/^home/home-georgifpv/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 362, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div {...rest}>
      <h3>{text}</h3>
      <StyledYouTubeChannelsPromo>
        <a
          href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            fluid={images.youtubeFpvtips.childImageSharp.fluid}
            alt="FPVTIPS YouTube channel"
          />
        </a>
        <a
          style={{
            borderLeft: 'none',
          }}
          href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            fluid={images.youtubeGeorgiFpv.childImageSharp.fluid}
            alt="GeorgiFPV YouTube channel"
          />
        </a>
      </StyledYouTubeChannelsPromo>
      <a
        href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          style={{ marginBottom: '2rem' }}
          fluid={images.homeBottom.edges[0].node.childImageSharp.fluid}
          alt="Drone, Georgi flying FPV and coding work station"
        />
      </a>
    </div>
  )
}

export default YouTubeChannelsPromo
