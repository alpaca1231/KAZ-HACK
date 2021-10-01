import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'akar-icons'
import styled from 'styled-components'

const Top: React.FC = () => {
  return (
    <StyledTop>
      <Image src='/eyecatch.svg' width={500} height={400} />
      <div className='catchcopy'>
        <h1>KAZ HACK</h1>
        <p>自走力を武器に、成長し続ける</p>
      </div>
      <ChevronDown className='scroll_btn' size={24} />
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
  min-height: 100vh;
  .catchcopy {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 7rem;
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
  .scroll_btn {
    margin-bottom: 5rem;
  }
`
