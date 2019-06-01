import React from 'react'
import styled from 'styled-components'

const StyledReaderQuestions = styled.div`
  border-top: 1px solid #cecece;
  padding-top: 1rem;
`

const ReaderQuestions = ({ data }) => (
  <StyledReaderQuestions>
    <div dangerouslySetInnerHTML={{ __html: data.html }} />
  </StyledReaderQuestions>
)

export default ReaderQuestions
