import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

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
`

export default GlobalStyle
