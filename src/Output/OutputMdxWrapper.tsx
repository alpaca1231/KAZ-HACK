import { VFC } from 'react'
import styled from 'styled-components'
import { sp } from 'styles/media'

type OutputMdxWrapperProps = {
  children: React.ReactNode
}

export const OutputMdxWrapper: VFC<OutputMdxWrapperProps> = ({ children }) => {
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
  ${sp`
    font-size: 14px;
    line-height: 16px;
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
  `}
`
