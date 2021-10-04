import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { sp } from 'styles/media'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-family: 'Lato', 'Roboto', sans-serif;
    width: 100%;
    font-size: 1.6rem;
    color: #333;
  }

  .bg {
    background: linear-gradient(45deg, #08ffc8, #fff7f7, #204969);
    background-size: 600% 600%;
    animation: GradientBackground 10s ease infinite;
    @keyframes GradientBackground {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 5rem auto 0;
    width: 10rem;
    height: 5rem;
    border: 2px solid ${(props) => props.theme.colors.navy};
    background: ${(props) => props.theme.colors.white};
    font-size: 20px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.navy};
      font-weight: bold;
    }
    ${sp`
      font-size: 16px;
      width: 8rem;
      height: 4rem;
    `}
  }
`

export default GlobalStyle
