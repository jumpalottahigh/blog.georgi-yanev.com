import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TagPool from './TagPool'

const StyledRightBar = styled.div`
  display: none;

  @media (min-width: 1550px) {
    display: block;
    width: 400px;
    padding: 1rem;

    .container {
      border-left: 1px solid #cecece;
      padding: 1rem;
      min-height: 240px;
    }

    .container.main-links {
      a {
        color: #0175d8;
      }

      a:hover {
        font-weight: 600;
      }
    }
  }
`

const RightBar = () => {
  return (
    <StyledRightBar>
      <div className="container main-links">
        <h4>Reviews &amp; Setup guides: </h4>
        <a href="#">Test</a>
        <h4>How to's &amp; DIY's: </h4>
        <Link to="/fpv/">Setup EmuFlight &amp; Project Mockingbird</Link>
      </div>
      <div className="container">
        <TagPool />
      </div>
    </StyledRightBar>
  )
}

export default RightBar
