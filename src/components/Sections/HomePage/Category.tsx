import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import data from "@/shared/jsons/category.json"
import Container from '@/components/Layout/Container'

export const Category = () => {
    return (
        <section className='bg-[#F9FAFB] py-20'>
            <Container className='grid w-10/12 grid-cols-2 gap-5 lg:gap-5 2xl:w-8/12 sm:grid-cols-3 lg:grid-cols-6'>
                {data.map((item, index) => (
                    <Link href={item.link} key={index} className='flex flex-col items-center space-y-4 cursor-pointer'>
                        <Image src={item.image} alt={item.name} height={120} width={120} className='lg:w-[120px] 2xl:w-[150px]' />
                        <p className='font-bold'>{item.name}</p>
                    </Link>
                ))}
            </Container>
        </section>
    )
}
