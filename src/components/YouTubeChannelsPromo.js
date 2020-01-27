import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const StyledYouTubeChannelsPromo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  a {
    width: 100%;
    box-shadow: none !important;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;

    &:hover {
      color: #0175d8 !important;
      transform: translate(30px) scale(1.05);
      z-index: 9;
    }
  }
`

const YouTubeChannelsPromo = ({ text, ...rest }) => {
  const images = useStaticQuery(graphql`
    {
      youtubeFpvtips: file(relativePath: { regex: "/^home/home-fpvtips/" }) {
        childImageSharp {
          fluid(maxWidth: 769, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      youtubeGeorgiFpv: file(
        relativePath: { regex: "/^home/home-georgifpv/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 852, quality: 90) {
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
          FPVtips
          <Img
            fluid={images.youtubeFpvtips.childImageSharp.fluid}
            alt="FPVTIPS YouTube channel"
          />
        </a>
        <a
          style={{
            marginTop: '2rem',
          }}
          href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Georgi FPV
          <Img
            fluid={images.youtubeGeorgiFpv.childImageSharp.fluid}
            alt="GeorgiFPV YouTube channel"
          />
        </a>
      </StyledYouTubeChannelsPromo>
    </div>
  )
}

export default YouTubeChannelsPromo
