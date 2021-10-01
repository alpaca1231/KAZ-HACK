import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element
    html: string
    head?: (JSX.Element | null)[] | undefined
  }> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='ja'>
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

          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Roboto:wght@300;400;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
