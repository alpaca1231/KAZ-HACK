import { FC, useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { useRouter } from 'next/router'
import { TextAlignRight, Cross, Home } from 'akar-icons'
import styled from 'styled-components'

const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  if (router.pathname === '/') {
    return (
      <StyledBurgerMenu>
        {isOpen ? (
          <>
            <div className='overlay' onClick={() => setIsOpen(false)} />
            <Cross size={36} className='menuBtn' onClick={() => setIsOpen(false)} />
          </>
        ) : (
          <TextAlignRight size={36} className='menuBtn' onClick={() => setIsOpen(!isOpen)} />
        )}

        <nav className={`${isOpen && 'isOpen'}`}>
          <div className='nav_wrap'>
            <h3>MENU</h3>
            <Link
              to=''
              smooth={true}
              duration={1000}
              onClick={() => {
                setIsOpen(false)
                scroll.scrollToTop()
              }}
            >
              Top
            </Link>
            <Link to='profile' smooth={true} duration={1000} offset={-50} onClick={() => setIsOpen(false)}>
              Profile
            </Link>
            <Link to='output' smooth={true} duration={1000} offset={-50} onClick={() => setIsOpen(false)}>
              Output
            </Link>
            <Link to='contact' smooth={true} duration={1000} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      </StyledBurgerMenu>
    )
  } else {
    return (
      <StyledHomeBtn onClick={() => router.back()}>
        <Home size={30} />
      </StyledHomeBtn>
    )
  }
}

export default BurgerMenu

const StyledBurgerMenu = styled.div`
  .menuBtn {
    position: fixed;
    right: 12px;
    top: 12px;
    z-index: 10;
  }
  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: #333;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 5;
  }
  nav {
    width: 60%;
    max-width: 300px;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: -5rem 0 10rem rgba(3, 3, 3, 0.5);
    padding: 24px;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 7;
    transition: 0.3s;
    &.isOpen {
      right: 0;
    }

    .nav_wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        width: 100%;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding: 16px 0;
        margin-bottom: 8px;
        border-bottom: 2px solid #333;
      }
      a {
        width: 100%;
        text-align: center;
        padding: 12px 0;
        font-size: 28px;
        margin: 4px;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`

const StyledHomeBtn = styled.div`
  position: fixed;
  right: 12px;
  top: 12px;
  z-index: 10;
`
