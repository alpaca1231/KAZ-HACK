import React from 'react'
import styled from 'styled-components'
// import { BurgerMenu } from './BurgerMenu'
import Link from 'next/link'
import Image from 'next/image'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className='bg'>
      <StyledHeader>
        <div className='logo'></div>
        <Link href='/'>
          <a className='site-title'></a>
        </Link>
        {/* <BurgerMenu /> */}
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>Copyright © KAZ HACK 2021</StyledFooter>
    </div>
  )
}

const StyledHeader = styled.header``
const StyledMain = styled.main``
const StyledFooter = styled.footer`
  text-align: center;
  font-size: 12px;
  height: 32px;
`
