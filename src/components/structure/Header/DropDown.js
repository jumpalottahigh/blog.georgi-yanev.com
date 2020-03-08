import React from 'react'
import styled from 'styled-components'

const StyledDropDown = styled.li`
  position: relative;
  display: flex;
  transition-duration: 0.5s;

  &:hover {
    cursor: pointer;
  }

  & ul {
    display: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    margin: 0;
    left: 0;
    padding: 3rem;
    background: tomato;
    color: #fafafa;
  }

  & ul li {
    clear: both;
    width: 100%;
  }

  @media (min-width: 710px) {
    &:hover > ul,
    & ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }
`

const DropDown = ({ children, ...rest }) => (
  <StyledDropDown {...rest}>
    {children}
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </StyledDropDown>
)

export default DropDown
