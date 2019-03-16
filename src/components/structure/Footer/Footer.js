import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 3.5rem;
  padding-left: 14rem;
  padding-bottom: 5rem;
  text-align: center;

  h5 {
    margin: 0;
  }

  a {
    color: #0175d8;
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <h5>
        Copyright &copy; 2017-{new Date().getFullYear()} Georgi Yanev.
        <br />
        Dedicated to Sofi and Anton{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        <br />
        This project is{' '}
        <a href="https://github.com/jumpalottahigh/blog.georgi-yanev.com">
          open source and available on GitHub
        </a>
        .
      </h5>
    </StyledFooter>
  )
}

export default Footer
