import React from 'react'
import { useRouter } from 'next/router'

import data from "@/shared/jsons/current-news.json"
import Container from '@/components/Layout/Container'
import ArticleCardCol from '@/components/Cards/ArticleCardCol'

export const CurrentNews = () => {
  const router = useRouter();
  return (
    <Container className='py-20'>
      <h3 className='inline pb-2 text-5xl font-bold text-black border-b-4 border-primary'>Berita Terkini</h3>
      <section className='grid grid-cols-1 gap-4 mt-16 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((item, index) => (
          <ArticleCardCol key={index} {...item} />
        ))}
      </section>
    </Container>
  )
}
