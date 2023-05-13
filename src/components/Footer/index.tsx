import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import data from "@/shared/jsons/sosial-media.json"
import Container from '@/components/Layout/Container';

const Footer = () => {
    return (
        <footer className='bg-[#F7F8FB] border-t border-primary'>
            <Container className='py-12'>
                <div className='flex items-center justify-between'>
                    <Image src={'/logo-cp.svg'} alt='' height={90} width={120} />
                    <div className='flex items-center space-x-3'>
                        {data.map((item, index) => (
                            <Link target='_blank' key={index} href={item.link}>
                                <Image src={item.image} alt={item.name} height={40} width={40} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center my-10 space-y-4'>
                    <ul className='flex space-x-4 font-semibold text-black'>
                        <li className='hover:text-primary'>
                            <Link href="/">Beranda</Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/">Artikel</Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/">Tentang Kami</Link>
                        </li>
                    </ul>
                    <ul className='flex space-x-4 font-semibold text-black'>
                        <li className='hover:text-primary'>
                            <Link href="/">Kriminal</Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/">Wisata</Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/">Viral</Link>
                        </li>
                    </ul>
                </div>
                <p className='font-medium text-[#4B5563] text-center'>© 2023 Cerita Pelajar. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer