import { Fragment } from 'react'
import Head from 'next/head'

import '@/shared/styles/index.scss'
import { AppLayoutProps } from 'next/app'
import { AppLayout } from '@/components/Layout/App'


const _APP = ({ Component, pageProps }: AppLayoutProps) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.png"></link>
        <meta name="robots" content="index, follow" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Fragment>
  )
}

export default _APP
