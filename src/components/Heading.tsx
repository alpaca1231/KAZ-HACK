import React from 'react'
import styled from 'styled-components'

type HeadingProps = {
  id?: string
  children: React.ReactNode
}

export const Heading: React.VFC<HeadingProps> = ({ id, children }) => {
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
  /* padding: 10rem 0 5rem; */
  h2 {
    font-size: 36px;
    letter-spacing: 0.1em;
  }
`
