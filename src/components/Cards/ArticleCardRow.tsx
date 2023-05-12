import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface ArticleCardRowProps {
    category: string
    image: string
    description: string
    date: string
    link: string
}

const ArticleCardRow: FC<ArticleCardRowProps> = ({ category, image, description, date, link }) => {
    return (
        <Link href={link} className='relative flex items-center gap-4 cursor-pointer lg:gap-10 rounded-2xl group/card'>
            <figure className='w-6/12 overflow-hidden lg:w-4/12 rounded-2xl'>
                <div className='relative w-full'>
                    <div className='absolute z-10 items-center justify-center hidden overflow-hidden transition-all group-hover/card:w-full group-hover/card:h-full group-hover/card:flex group-hover/card:bg-primary/60 rounded-2xl'>
                        <p className='font-bold text-white border-b-2 border-white'>Selengkapnya</p>
                    </div>
                    <Image src={image} alt='' height={269} width={396} className='object-cover w-full overflow-hidden transition-all duration-300 ease-in-out rounded-2xl group-hover/card:scale-110' />
                </div>
            </figure>
            <figcaption className='w-6/12 lg:w-8/12'>
                <p className='text-xs font-bold sm:text-base text-primary'>{category}</p>
                <p className='text-sm lg:leading-8 sm:font-bold sm:py-1 lg:py-2 sm:text-lg lg:text-2xl'>{description}</p>
                <p className='text-xs font-bold tracking-wider sm:text-base text-primary'>{date}</p>
            </figcaption>
        </Link>
    )
}

export default ArticleCardRow
