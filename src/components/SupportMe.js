import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LINK_SIZE = '34px'

const StyledLink = styled(Link)`
  box-shadow: none !important;
  width: ${LINK_SIZE};
  height: ${LINK_SIZE};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 9px;
`

function SupportMe() {
  return (
    <StyledLink to="/support-me/" title="Support me">
      🙏
    </StyledLink>
  )
}

export default SupportMe
