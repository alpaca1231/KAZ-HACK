import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Top: React.VFC = () => {
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
  .catchcopy {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: 42px;
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 24px;
    }
  }
`
