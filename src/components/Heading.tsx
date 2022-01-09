import { VFC } from 'react'
import styled from 'styled-components'
import { sp } from 'styles/media'

type HeadingProps = {
  id?: string
  children: React.ReactNode
}

export const Heading: VFC<HeadingProps> = ({ id, children }) => {
  return (
    <StyledHeading>
      <h2 id={id}>{children}</h2>
    </StyledHeading>
  )
}

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  h2 {
    font-size: 36px;
    letter-spacing: 0.1em;
  }
  ${sp`
    h2 {
      font-size: 28px;
    }
  `}
`
