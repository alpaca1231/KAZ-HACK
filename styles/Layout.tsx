import { VFC } from 'react'
import styled from 'styled-components'
import BurgerMenu from 'src/components/BurgerMenu'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: VFC<LayoutProps> = ({ children }) => {
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
