import React from 'react'
import styled from 'styled-components'

const StyledShare = styled.section`
  padding: 1rem 0;
  border-top: 1px solid #cecece;

  h4 {
    margin: 0;
  }

  a {
    margin-right: 1rem;
  }
`

const Share = ({ url }) => (
  <StyledShare>
    <h4>Share this article on:</h4>
    <div>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.georgi-yanev.com${url}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <a
        href={`https://twitter.com/home?status=https://blog.georgi-yanev.com${url}`}
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
    </div>
  </StyledShare>
)

export default Share
