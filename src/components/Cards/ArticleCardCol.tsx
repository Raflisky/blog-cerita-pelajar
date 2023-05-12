import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface ArticleCardColProps {
    image: string
    description: string
    date: string
    link: string
}

const ArticleCardCol: FC<ArticleCardColProps> = ({ image, description, date, link }) => {
    return (
        <Link href={link} className='relative p-4 cursor-pointer rounded-2xl group/card'>
            <figure className='overflow-hidden rounded-2xl'>
                <div className='relative w-full'>
                    <div className='absolute z-10 items-center justify-center hidden overflow-hidden transition-all group-hover/card:w-full group-hover/card:h-full group-hover/card:flex group-hover/card:bg-primary/60 rounded-2xl'>
                        <p className='font-bold text-white border-b-2 border-white'>Selengkapnya</p>
                    </div>
                    <Image src={image} alt="Article Image" height={269} width={396} className='object-cover w-full overflow-hidden transition-all duration-300 ease-in-out rounded-2xl group-hover/card:scale-110' />
                </div>
            </figure>
            <figcaption className='mt-2 font-bold lg:py-2 text-primary'>{date}</figcaption>
            <figcaption className='font-bold leading-8 sm:text-xl lg:text-2xl'>{description}</figcaption>
        </Link>
    )
}

export default ArticleCardCol
