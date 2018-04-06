import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Button = styled(Link)`
  align-self: flex-end;
  border-radius: 4px;
  border: 1px solid #0175d8;
  padding: 0.25rem 0.5rem;
  box-shadow: none !important;

  &:hover {
    color: #fff !important;
    background-color: #0175d8;
  }
`

export default Button
