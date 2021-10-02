import React from 'react'
import styled from 'styled-components'

export const OutputMdxWrapper: React.FC = ({ children }) => {
  return <StyledOutputMdxWrapper>{children}</StyledOutputMdxWrapper>
}

const StyledOutputMdxWrapper = styled.div`
  letter-spacing: 0.05em;
  font-size: 16px;
  line-height: 24px;
  h3 {
    text-align: center;
    font-size: 30px;
    line-height: 32px;
    font-weight: bold;
    padding: 1rem;
  }
  p {
    padding: 1rem;
  }
`
