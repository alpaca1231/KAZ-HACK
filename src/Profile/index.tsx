import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from 'src/components/Heading'
import { ChevronRight } from 'akar-icons'
import ProfileMdx from './Profile.mdx'
import styled from 'styled-components'
import { sp } from 'styles/media'

import dynamic from 'next/dynamic'
const ScrollRevealContainer = dynamic(import('src/components/ScrollRevealContainer'), { ssr: false })

const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Heading id='profile'>Profile</Heading>
      <ScrollRevealContainer move='bottom'>
        <div className='prof'>
          <div className='prof_img'>
            <Image className='myPhoto' src='/myPhoto.jpg' width={200} height={200} layout='fixed' />
          </div>
          <ProfileMdx />
        </div>
        <Link href='/about'>
          <div className='btn dp_btn'>
            Resume&nbsp;
            <ChevronRight size={24} />
          </div>
        </Link>
      </ScrollRevealContainer>
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
    margin: 80px auto 0;
    width: 15rem;
  }
  ${sp`
  padding: 5rem 0;
  .prof {
    display: block;
    &_img {
      margin: 0 auto;
    }
  }
  .dp_btn {
    margin: 5rem auto 0;
    width: 10rem;
  }
  `}
`
