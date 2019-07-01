import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
  margin-bottom: 1rem;

  & a {
    box-shadow: none !important;
  }

  img {
    width: 100%;
  }
`

const PromoBanner = ({ linkTo, imagePath }) => (
  <StyledBanner>
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <img src={imagePath} alt="Banggood promo" />
    </a>
  </StyledBanner>
)

export default PromoBanner
