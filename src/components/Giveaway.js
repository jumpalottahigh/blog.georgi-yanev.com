import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

const StyledGiveaway = styled.div`
  border-top: 1px solid #cecece;
  padding-top: 1rem;

  .short-content {
    text-align: center;
    font-weight: 600;
  }
`

const StyledGiveawayHeading = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  #tshirt-link {
    width: 100%;
  }

  #tshirt-link a {
    box-shadow: none !important;

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 250px;
      margin: 0 auto 1rem;
    }
  }
`

const Giveaway = () => {
  const images = useStaticQuery(graphql`
    {
      fpvtipsTshirt2: file(
        relativePath: { regex: "/^fpvtips-t-shirt-2.png/" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 250, quality: 75, placeholder: BLURRED)
        }
      }
    }
  `)

  const GiveawayHeading = (
    <StyledGiveawayHeading>
      <h3>🎁 FPVTIPS T-SHIRT GIVEAWAY 🎁</h3>
      <motion.div id="tshirt-link" whileHover={{ scale: 1.2, rotate: 7 }}>
        <a
          href="https://www.etsy.com/listing/721870439/fpvtips-short-sleeve-unisex-t-shirt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyImage
            image={images.fpvtipsTshirt2.childImageSharp.gatsbyImageData}
            alt={images.fpvtipsTshirt2.name}
          ></GatsbyImage>
        </a>
      </motion.div>
      <h5>We are excited to announce a t-shirt giveaway!</h5>
      <p>
        To enter the giveaway, subscribe to the{' '}
        <Link to="/newsletter">FPVTIPS newsletter</Link> or to the{' '}
        <a
          href="https://www.youtube.com/@FPVtips"
          target="_blank"
          rel="noopener noreferrer"
        >
          FPVTIPS YouTube channel
        </a>
        ! That's all! The drawing will be on <strong>October 1st, 2019</strong>.
      </p>
      <p>And yes, subscribing to both does double your chances of winning.</p>
    </StyledGiveawayHeading>
  )
  return (
    <StyledGiveaway>
      <Announcement shortContent={GiveawayHeading} noCollapsible={true} />
    </StyledGiveaway>
  )
}

export default Giveaway
