import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import data from "@/shared/jsons/current-news.json"
import Container from '@/components/Layout/Container';
import ArticleCardRow from '@/components/Cards/ArticleCardRow';
import Button from '@/components/Button';

export const TrendNews = () => {
    return (
        <Container className='py-20'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='pb-2 text-5xl font-bold text-black'>Berita Populer</h3>
                    <div className='border-b-4 w-36 border-primary' />
                </div>
                <Button text="See More" url='/' icon={<MdOutlineArrowForwardIos />} variant='outline' className='text-lg font-semibold rounded-lg text-primary border-primary' />
            </div>
            <section className='mt-16 space-y-9'>
                {data.map((item, index) => (
                    <ArticleCardRow key={index} {...item} />
                ))}
            </section>
        </Container>
    )
}
