import Document, { Html, Head, Main, NextScript } from "next/document";
import * as gtag from '../lib/gtag'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    if (typeof window === 'object')
    {
      return (
        <Html>
          <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5317399615908400"
     crossOrigin="anonymous"></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
    else {
      return (
        <Html>
          <Head>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
}