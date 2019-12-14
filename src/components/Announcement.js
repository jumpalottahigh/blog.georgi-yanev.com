import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

import svgRightArrow from '../images/right-arrow.svg'

const StyledAnnouncement = styled.div`
  .short-content .short-content-inner-container {
    display: flex;
    align-items: center;
    flex-flow: column wrap;

    .gatsby-image-wrapper {
      margin: 1rem 0;
      width: 120px;
    }
  }

  .main-content {
    margin-top: 1rem;
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

  @media (min-width: 500px) {
    .short-content .short-content-inner-container {
      .gatsby-image-wrapper {
        width: 120px;
      }
    }
  }

  @media (min-width: 860px) {
    .short-content .short-content-inner-container {
      flex-flow: row wrap;

      .gatsby-image-wrapper {
        margin-right: 2rem;
      }
    }
  }
`

const Announcement = ({ shortContent, children, noCollapsible }) => {
  return (
    <StyledAnnouncement className="article-update-notification high-priority">
      <div className="short-content">{shortContent}</div>
      {noCollapsible ? (
        children
      ) : (
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
          <div className="main-content">{children}</div>
        </Collapsible>
      )}
    </StyledAnnouncement>
  )
}

export default Announcement
