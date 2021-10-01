import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from 'src/components/Heading'
import styled from 'styled-components'

const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Heading>Profile</Heading>
      <div className='prof'>
        <div className='prof_img'>
          <Image className='myPhoto' src='/myPhoto.jpg' width={200} height={200} layout='fixed' />
        </div>
        <div className='content'>
          <p className='content_name'>Kazuki Amatatsu | 天辰 一希</p>
          <div className='content_job'>
            <p>Front-end Engineer</p>
            <p>Information and communications Engineer</p>
          </div>
          <p className='content_bd'>1996年12月31日生まれ</p>
          <p className='content_live'>大阪府在住</p>
        </div>
      </div>
      <Link href='/about'>
        <div className='ph_btn'>Personal History</div>
      </Link>
    </StyledProfile>
  )
}

export default Profile

const StyledProfile = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 10rem 0;
  .prof {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    &_img {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0 auto;
    }
  }

  .myPhoto {
    border-radius: 100%;
  }
  .content {
    width: 60%;
    text-align: center;
    letter-spacing: 0.05em;
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
    &_name {
      font-size: 24px;
      line-height: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    &_job {
      margin-bottom: 20px;
    }
  }
  .ph_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 80px auto 0;
    font-size: 20px;
    width: 20rem;
    height: 5rem;
    border: 2px solid ${(props) => props.theme.colors.navy};
    background: #fff;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      color: #fff;
      background: ${(props) => props.theme.colors.navy};
      font-weight: bold;
    }
  }
`
