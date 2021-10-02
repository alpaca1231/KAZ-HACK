import GlobalStyle from 'styles/GlobalStyle'
import Head from 'next/Head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { Layout } from 'styles/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta charSet='utf-8' />
        <title>KAZ HACK</title>
        <meta
          name='description'
          content='KAZ HACK | 天辰一希 フロントエンドエンジニア React Next TypeScript JavaScript'
        />

        <meta property='og:title' content='KAZ HACK' />
        <meta
          property='og:description'
          content='KAZ HACK | 天辰一希 フロントエンドエンジニア React Next TypeScript JavaScript'
        />
        <meta property='og:url' content='' />
        <meta property='og:site_name' content='KAZ HACK' />
        <meta property='og:locale' content='ja_JP' />
        <meta name='twitter:site' content='' />

        <link rel='icon' href='favicon_package/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='favicon_package/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon_package/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicon_package/favicon-16x16.png' />
        <link rel='manifest' href='favicon_package/site.webmanifest' />
        <link rel='mask-icon' href='favicon_package/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
