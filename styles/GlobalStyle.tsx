import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap');

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
