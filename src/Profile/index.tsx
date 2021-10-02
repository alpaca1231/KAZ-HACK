import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from 'src/components/Heading'
import ProfileMdx from './Profile.mdx'
import styled from 'styled-components'

const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Heading>Profile</Heading>
      <div className='prof'>
        <div className='prof_img'>
          <Image className='myPhoto' src='/myPhoto.jpg' width={200} height={200} layout='fixed' />
        </div>
        <ProfileMdx />
      </div>
      <Link href='/about'>
        <div className='dp_btn'>Detailed profile</div>
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
    justify-content: center;
    margin: 0 auto;
    &_img {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-right: 5rem;
    }
  }
  .myPhoto {
    border-radius: 50%;
  }

  .dp_btn {
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
