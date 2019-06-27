import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

import svgRightArrow from '../images/right-arrow.svg'

const StyledAnnouncement = styled.div`
  .short-text {
    .gatsby-image-wrapper {
      transition: all 275ms ease-in-out;
      transform: rotate(360deg);
    }
  }

  .Collapsible__trigger {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    h5 {
      color: #000;
      margin: 0;
    }

    img {
      margin-left: 0.25rem;
      height: 14px;
      transition: 475ms;
    }

    &.is-open img {
      transform: rotate(90deg);
    }
  }
`

const Announcement = ({ shortText, children }) => {
  return (
    <StyledAnnouncement className="article-update-notification high-priority">
      <div className="short-text">{shortText}</div>
      <Collapsible
        trigger={
          <>
            <h5>Read more</h5>
            <img src={svgRightArrow} alt="right arrow" />
          </>
        }
        transitionTime={125}
        easing="ease-out"
      >
        {children}
      </Collapsible>
    </StyledAnnouncement>
  )
}

export default Announcement
