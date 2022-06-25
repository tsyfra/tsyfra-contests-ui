import { FC } from 'react'
import Head from 'next/head'

const Meta: FC = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.svg' />
      <title>Tsyfra</title>
    </Head>
  )
}

export default Meta
