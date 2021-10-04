import React from 'react'
import styled from 'styled-components'
import BurgerMenu from 'src/components/BurgerMenu'

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout className='bg'>
      <header>
        <BurgerMenu />
      </header>
      <main>{children}</main>
      <footer>Copyright © KAZ HACK 2021</footer>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  footer {
    text-align: center;
    font-size: 12px;
    height: 32px;
  }
`
