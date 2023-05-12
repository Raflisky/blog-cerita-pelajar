import React from 'react'
import Image from 'next/image';

import Container from '@/components/Layout/Container';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-[#F7F8FB] border-t border-primary'>
            <Container className='py-12'>
                <div className='flex items-center justify-between'>
                    <Image src={'/logo-cp.svg'} alt='' height={50} width={95} />
                    <div className='flex items-center space-x-3'>
                        <Link href="/">
                            <Image src={'/static/icons/sosmed/facebook.svg'} alt='' height={40} width={40} />
                        </Link>
                        <Link href="/">
                            <Image src={'/static/icons/sosmed/instagram.svg'} alt='' height={40} width={40} />
                        </Link>
                        <Link href="/">
                            <Image src={'/static/icons/sosmed/whatsapp.svg'} alt='' height={40} width={40} />
                        </Link>
                        <Link href="/">
                            <Image src={'/static/icons/sosmed/twitter.svg'} alt='' height={40} width={40} />
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center my-10 space-y-4'>
                    <ul className='flex space-x-4 font-semibold text-black'>
                        <li>
                            <Link href="/">Beranda</Link>
                        </li>
                        <li>
                            <Link href="/">Artikel</Link>
                        </li>
                        <li>
                            <Link href="/">Tentang Kami</Link>
                        </li>
                    </ul>
                    <ul className='flex space-x-4 font-semibold text-black'>
                        <li>
                            <Link href="/">Kriminal</Link>
                        </li>
                        <li>
                            <Link href="/">Wisata</Link>
                        </li>
                        <li>
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