import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import Container from './../Layout/Container';
import { NavMenu } from './NavMenu';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [backToTop, setBackToTop] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY

        if (offset > 1) {
            setScrolled(true)
            setBackToTop(true)
        } else {
            setScrolled(false)
            setBackToTop(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <header className={`fixed z-30 w-full transition-all duration-700 ${scrolled ? 'shadow-lg bg-white' : ''}`}>
                <Container className={`flex items-center justify-between transition-all duration-700 ${scrolled ? 'h-[110px]' : 'h-[100px]'}`}>
                    <Link href="/">
                        <Image src={'/logo-cp.svg'} alt='Blokotok' height={67} width={150} className={`${scrolled ? 'text-black' : 'text-white'}`} />
                    </Link>
                    <NavMenu navScroll={scrolled} />
                </Container>
            </header>
            <div onClick={scrollToTop} className={`${backToTop ? 'fixed p-3 lg:p-4 z-30 bottom-5 right-5 lg:bottom-10 lg:right-10 bg-primary rounded-2xl transition-all cursor-pointer' : 'hidden'}`}>
                <MdOutlineArrowBackIosNew size={30} className='text-white rotate-90' />
            </div >
        </>
    )
}

export default Navbar