import React from 'react'
import styled from 'styled-components'

const StyledRightBar = styled.div`
  /* a {
    color: #0175d8;
    text-decoration: none;
    box-shadow: none;
  }

  a:hover {
    color: #0175d8;
    box-shadow: none;
  } */

  display: none;

  @media (min-width: 1550px) {
    display: block;
    width: 400px;
  }
`

const RightBar = () => {
  return <StyledRightBar>Hi</StyledRightBar>
}

export default RightBar
