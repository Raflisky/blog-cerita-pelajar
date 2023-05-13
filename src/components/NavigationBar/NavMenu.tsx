import React, { useState, FC } from 'react'
import Link from 'next/link';
import { BiSearch } from "react-icons/bi"
import { RiArrowDownSLine } from "react-icons/ri"

import data from "@/shared/jsons/category.json"
import Button from '../Button';

interface ScrolledProps {
    navScroll?: boolean
}

export const NavMenu: FC<ScrolledProps> = ({ navScroll }) => {
    const [search, setSearch] = useState(false)
    const [category, setCategory] = useState(false)

    return (
        <nav className='flex items-center'>
            <div className={`${search ? 'w-[200px] space-x-2 border-2' : 'w-[52px]'} ${navScroll ? 'border-black text-black' : 'border-white text-white'} transition-all outline-none hover:border-2 rounded-lg text-sm p-2  flex justify-center items-center`}>
                <BiSearch size={8} onClick={() => setSearch(!search)} className={`${search ? 'w-2/12' : 'w-8'} ${navScroll ? 'text-black' : 'text-white'} h-8 transition-all cursor-pointer`} />
                <input placeholder={`${search ? 'Search Here' : ''}`} className={`${search ? 'bg-transparent outline-none w-10/12 font-semibold' : 'hidden'} ${navScroll ? 'placeholder:text-black/70' : 'placeholder:text-white/70'}`} />
            </div>
            <ul className={`flex items-center ml-10 space-x-10 text-sm font-semibold tracking-wider transition-all ${navScroll ? 'text-black' : 'text-white'}`}>

                <li className='hover:text-primary'>
                    <Link href="/">
                        Beranda
                    </Link>
                </li>
                <li className='hover:text-primary'>
                    <Link href="/">
                        Article
                    </Link>
                </li>
                <li className='relative flex items-center hover:text-primary'>
                    <p>Kategori</p>
                    <RiArrowDownSLine onClick={() => setCategory(!category)} size={25} className={`${category ? 'rotate-180' : 'rotate-0'} transition-all`} />
                    <ul className={`${category ? 'absolute bg-white shadow-lg border rounded-2xl -left-1 grid grid-cols-2 gap-5 -bottom-40 p-4 h-[150px] w-[180px]' : 'hidden'}`}>
                        {data.map((item, index) => (
                            <li key={index} onClick={() => setCategory(false)} className='text-black transition-all hover:text-primary'>
                                <Link scroll={false} href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='hover:text-primary'>
                    <Link href="/">
                        Tentang Kami
                    </Link>
                </li>
            </ul>
            <Button text="Masuk" className='px-8 py-3 ml-10 font-bold rounded-lg shadow-lg hover:bg-opacity-80 hover:shadow-xl' />
        </nav>
    )
}
