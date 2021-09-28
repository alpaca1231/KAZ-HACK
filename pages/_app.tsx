import GlobalStyle from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { Layout } from 'styles/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
