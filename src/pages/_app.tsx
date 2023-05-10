import '@/shared/styles/index.scss'

import { AppLayoutProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'


const _APP = ({ Component, pageProps }: AppLayoutProps) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.png"></link>
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default _APP
