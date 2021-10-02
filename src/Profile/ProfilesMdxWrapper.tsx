import React from 'react'
import styled from 'styled-components'

export const ProfilesMdxWrapper: React.FC = ({ children }) => {
  return <StyledProfilesMdxWrapper>{children}</StyledProfilesMdxWrapper>
}

const StyledProfilesMdxWrapper = styled.div`
  text-align: center;
  letter-spacing: 0.05em;
  font-size: 20px;
  line-height: 24px;
  margin-top: 2rem;
  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
`
