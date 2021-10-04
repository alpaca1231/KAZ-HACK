import React from 'react'
import styled from 'styled-components'
// import { BurgerMenu } from './BurgerMenu'
import Link from 'next/link'
import Image from 'next/image'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <div className='logo'></div>
        <Link href='/'>
          <a className='site-title'></a>
        </Link>
        {/* <BurgerMenu /> */}
      </StyledHeader>
      <StyledMain className='bg'>{children}</StyledMain>
      <StyledFooter></StyledFooter>
    </>
  )
}

const StyledHeader = styled.header``
const StyledMain = styled.main``
const StyledFooter = styled.footer``
