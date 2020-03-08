import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import TagPool from '../../TagPool'

const StyledDropDown = styled.li`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;

  > a {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
  }

  & hr {
    border-top: 1px solid #dedede;
    width: 100%;
  }

  & ul {
    display: none;
    flex-flow: column nowrap;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    margin: 0;
    left: 0;
    top: 63px;
    background: #dedede;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    color: #202020;
    height: auto !important;
  }

  & ul li {
    display: flex;
    min-width: 300px;

    a {
      width: 100%;
      padding: 8px 12px;
      font-weight: 400;
    }
  }

  & ul li.tags {
    display: flex;
    flex-flow: column wrap;

    .tag-pool {
      padding: 8px 12px;

      .tag-pool__tag {
        width: initial;
        background: #5795f1;
        color: #fff;
        margin: 0 0.7rem 0.7rem 0;
        padding: 4px 6px;
      }

      .tag-pool__tag:hover {
        background: #0189e3;
      }
    }

    p {
      padding: 8px 12px;
      margin-bottom: 0;
    }
  }

  & ul li a:hover {
    background: #ccc;
  }

  @media (min-width: 710px) {
    &:hover > ul,
    & ul:hover {
      visibility: visible;
      opacity: 1;
      display: flex;
    }
  }
`

const DropDown = ({ children, ...rest }) => (
  <StyledDropDown {...rest}>{children}</StyledDropDown>
)

export default DropDown
