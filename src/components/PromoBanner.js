import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import usePromoBanner from '../hooks/use-promo-banner'

const StyledBanner = styled.div`
  margin-bottom: 1rem;

  & a {
    box-shadow: none !important;
  }

  img {
    width: 100%;
  }
`

const PromoBanner = ({ linkTo, imageName, ...rest }) => {
  const data = usePromoBanner(imageName)

  return (
    <StyledBanner {...rest}>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <Img fluid={data.childImageSharp.fluid} alt="Banggood promo" />
      </a>
    </StyledBanner>
  )
}

export default PromoBanner
