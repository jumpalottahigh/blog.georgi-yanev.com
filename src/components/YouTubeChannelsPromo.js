import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
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
          gatsbyImageData(layout: CONSTRAINED, width: 769, quality: 90, placeholder: BLURRED)
        }
      }

      youtubeGeorgiFpv: file(
        relativePath: { regex: "/^home/home-georgifpv/" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 852, quality: 90, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <div {...rest}>
      <h3>{text}</h3>
      <StyledYouTubeChannelsPromo>
        <a
          href="https://www.youtube.com/@FPVtips"
          target="_blank"
          rel="noopener noreferrer"
        >
          FPVtips
          <GatsbyImage
            image={images.youtubeFpvtips.childImageSharp.gatsbyImageData}
            alt="FPVTIPS YouTube channel"
          />
        </a>
        <a
          style={{
            marginTop: '2rem',
          }}
          href="https://www.youtube.com/@GeorgiFPV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Georgi FPV
          <GatsbyImage
            image={images.youtubeGeorgiFpv.childImageSharp.gatsbyImageData}
            alt="GeorgiFPV YouTube channel"
          />
        </a>
      </StyledYouTubeChannelsPromo>
    </div>
  )
}

export default YouTubeChannelsPromo
