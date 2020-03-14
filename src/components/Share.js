import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const StyledShare = styled.section`
  padding: 1rem 0;
  border-top: 1px solid #cecece;

  h4 {
    margin: 0;
    display: flex;
    align-items: center;
  }

  a {
    margin-left: 0.5rem;
    box-shadow: none !important;
  }

  a:hover {
    opacity: 0.85;
  }
`

const Share = ({ url }) => (
  <StyledShare>
    <h4>
      Share this on social media:{' '}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.georgi-yanev.com${url}`}
        target="_blank"
        rel="noreferrer"
        title="Facebook"
      >
        <FaFacebookSquare size="1.75rem" color="#4267b2" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=https://blog.georgi-yanev.com${url}`}
        target="_blank"
        rel="noreferrer"
        title="Twitter"
      >
        <FaTwitterSquare size="1.75rem" color="#1da1f2" />
      </a>
    </h4>
  </StyledShare>
)

export default Share
