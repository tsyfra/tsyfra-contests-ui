import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
