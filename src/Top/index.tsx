import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Top: React.FC = () => {
  return (
    <StyledTop>
      <Image src='/eyecatch.svg' width={360} height={300} />
      <div className='catchcopy'>
        <h1>KAZ HACK</h1>
        <p>自走力を武器に、成長し続ける</p>
      </div>
    </StyledTop>
  )
}

export default Top

const StyledTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
  .catchcopy {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 0.2em;
      padding-bottom: 1rem;
    }
    p {
      font-size: 24px;
    }
  }
`
