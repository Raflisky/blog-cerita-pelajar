import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

import NotFound from '../../public/404.svg'
import Container from '@/components/Layout/Container'
import Button from '@/components/Button/index'

const NotFoundPage: FC = () => {
  const router = useRouter()
  return (
    <main>
      <Head>
        <title>404 Not Found | DKK Consulting</title>
      </Head>
      <Container className="flex flex-col w-full h-full gap-4 px-8 py-28 lg:h-screen lg:justify-center lg:items-center lg:gap-5 2xl:gap-20 lg:flex-row">
        <Image src={NotFound} alt="404" className="mx-auto w-full lg:w-7/12 max-w-[1000px]" />
        <div className="lg:w-5/12">
          <h1 className="mb-2 text-3xl font-extrabold md:text-5xl">Page not found</h1>
          <p className="text-lg md:text-2xl 2xl:w-8/12 text-black2">Sorry, we couldn`t find the page you`re looking for.</p>
          <Button
            onClick={() => router.push('/')}
            className="px-5 py-2 mt-8 font-semibold text-white bg-teal-600 rounded-lg shadow-lg md:text-lg lg:py-3 lg:px-7 bg-primary hover:bg-opacity-90 hover:scale-95 hover:shadow-xl"
            text="Go To Home"
          />
        </div>
      </Container>
    </main>
  )
}

export default NotFoundPage