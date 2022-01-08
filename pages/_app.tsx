/** @see https://nextjs.org/docs/basic-features/typescript#custom-app */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { theme } from 'styles/theme'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
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
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
