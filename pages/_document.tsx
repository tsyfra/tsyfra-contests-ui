import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' rel='stylesheet' />
        </Head>
        <body className='font-inter'>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
