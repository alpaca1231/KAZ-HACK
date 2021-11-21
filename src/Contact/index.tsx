import { FC } from 'react'
import { Heading } from 'src/components/Heading'
import Link from 'next/link'
import { Envelope, TwitterFill, GithubFill } from 'akar-icons'
import styled from 'styled-components'
import { sp } from 'styles/media'

const Contact: FC = () => {
  return (
    <StyledContact>
      <Heading id='contact'>Contact</Heading>
      <h3>お問い合わせはメールまたはTwitterのDMでご連絡ください。</h3>
      <div className='iconList'>
        <Link href='/mailform'>
          <div className='icon'>
            <Envelope size={30} />
          </div>
        </Link>
        <a href='https://twitter.com/alpaca_1231' target='_blank' className='icon'>
          <TwitterFill size={30} />
        </a>
        <a href='https://github.com/alpaca1231' target='_blank' className='icon'>
          <GithubFill size={30} />
        </a>
      </div>
    </StyledContact>
  )
}

export default Contact

const StyledContact = styled.div`
  padding: 10rem 0;
  h3 {
    font-size: 24px;
    text-align: center;
    margin: 0 5rem;
  }
  .iconList {
    width: 30rem;
    margin: 3rem auto 0;
    display: flex;
    justify-content: space-between;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.navy};
    &:hover {
      color: ${(props) => props.theme.colors.navy};
      background-color: ${(props) => props.theme.colors.white};
    }
  }
  ${sp`
    padding: 5rem 0;
    h3 {
      font-size: 16px;
      margin: 0 3rem;
    }
    .iconList {
      width: 20rem;
    }
    .icon {
      width: 5rem;
      height: 5rem;
    }
  `}
`
