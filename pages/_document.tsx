import * as React from 'react'
import { RenderPageResult } from 'next/dist/shared/lib/utils'
import Document, {
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '../createEmotionCache'
import theme from '../theme'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Square+Peg&family=Ubuntu:wght@400&display=swap"
            rel="stylesheet"
          />
          <title>Yuta Euchi’s Portfolio</title>
          <meta
            name="description"
            content="エンジニア、Yuta Euchiのポートフォリオサイトです。"
          />
          <meta property="og:title" content="Yuta Euchi’s Portfoli" />
          <meta
            property="og:description"
            content="エンジニア、Yuta Euchiのポートフォリオサイトです。"
          />
          {/* HACK: static url */}
          <meta property="og:url" content="https://euchi.jp" />
          <meta
            name="twitter:card"
            content="エンジニア、Yuta Euchiのポートフォリオサイトです。"
          />
          <meta property="og:image" content="https://euchi.jp/profile.jpg" />
        </Head>
        <body className="p-safe">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
    originalRenderPage({
      enhanceApp:
        (App: any) =>
        // eslint-disable-next-line react/display-name
        (props): JSX.Element =>
          <App emotionCache={cache} {...props} />
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags
    ]
  }
}
