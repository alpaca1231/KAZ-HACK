import { FC } from 'react'
import { Heading } from 'src/components/Heading'
import Link from 'next/link'
import { Envelope, TwitterFill, GithubFill } from 'akar-icons'
import styled from 'styled-components'

const Contact: FC = () => {
  return (
    <StyledContact>
      <Heading>Contact</Heading>
      <div className='inner'>
        <h3>お問い合わせはメールまたはTwitterのDMでご連絡ください。</h3>
        <div className='iconList'>
          <div className='icon'>
            <Link href='/mailform'>
              <div>
                <Envelope size={50} />
              </div>
            </Link>
          </div>
          <a href='https://twitter.com/alpaca_1231' target='_blank' className='icon'>
            <TwitterFill size={50} />
          </a>
          <a href='https://github.com/KazukiAmatatsu' target='_blank' className='icon'>
            <GithubFill size={50} />
          </a>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact

const StyledContact = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 10rem 0;
  .inner {
    padding: 5rem 0;
    background-color: ${(props) => props.theme.colors.mint};
  }
  h3 {
    font-size: 24px;
    color: ${(props) => props.theme.color};
    text-align: center;
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
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.navy};
    &:hover {
      color: ${(props) => props.theme.colors.navy};
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`
