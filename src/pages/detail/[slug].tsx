import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import data from "@/shared/jsons/sosial-media.json"
import Container from '@/components/Layout/Container';

const DetailArticle = () => {
    return (
        <main style={{ offsetPosition: 100 }} className='py-36'>
            <Head>
                <title>Detail | Cerita Pelajar</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>
            <Container>
                <h2 className='text-4xl font-bold leading-10 text-center text-black'>Pernah Ditawar Rp 2 Miliar, Begini Kondisi Rumah Abah Jajang Terkini Setelah Viral dan Ramai Pengunjung</h2>
                <div className='flex items-center justify-center text-gray-500'>
                    <p>Viral</p>
                    <span className='mx-2 my-4'>•</span>
                    <p>13 Mei 2023, 13:00 WIB</p>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    {data.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <Image src={item.image} alt={item.name} height={40} width={40} />
                        </Link>
                    ))}
                </div>
                <Image src={'/static/images/article/1.jpg'} alt="bg-hero" height={2000} width={2000} className='w-full mt-16 rounded-2xl' />
                <p className='font-medium text-[#877676] mt-2'>Rumah Abah Jajang yang Viral dengan View Curug Citambur. (Instagram/@eri_restiana/Alonesia.com)</p>
            </Container>
        </main>
    )
}

export default DetailArticle
