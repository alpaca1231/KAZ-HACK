import { VFC } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'akar-icons'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { sp } from 'styles/media'

const Top: VFC = () => {
  return (
    <StyledTop>
      <div className='inner'>
        <Image src='/eyecatch.svg' width={500} height={400} />
        <div className='catchcopy'>
          <h1>KAZ HACK</h1>
          <p>自走力を武器に、成長し続ける</p>
        </div>
      </div>
      <Link to='profile' smooth={true} duration={1000} offset={-80}>
        <ChevronDown className='scroll_btn' size={24} />
      </Link>
    </StyledTop>
  )
}

export default Top

const StyledTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  .inner {
    margin: auto 0;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10rem 10rem rgba(255, 255, 255, 0.8);
    border-radius: 10rem;
  }
  .catchcopy {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
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
  ${sp`
    .inner {
      margin: auto 3rem;
    }
    .catchcopy {
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 16px;
      }
    }
    .scroll_btn {
      margin-bottom: 3rem;
    }
  `}
`
