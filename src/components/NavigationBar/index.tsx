import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { IoLogoSnapchat } from "react-icons/io"

import Container from './../Layout/Container';
import { NavMenu } from './NavMenu';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY

        if (offset > 1) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`fixed z-30 w-full transition-all duration-700 ${scrolled ? 'shadow-lg bg-white' : ''}`}>
            <Container className={`flex items-center justify-between transition-all duration-700 ${scrolled ? 'h-[100px]' : 'h-[90px]'}`}>
                {/* <Image src="/logo.svg" alt='Logo' height={36} width={202} /> */}
                <IoLogoSnapchat className={`${scrolled ? 'text-black' : 'text-white'}`} size={40} />
                <NavMenu navScroll={scrolled} />
            </Container>
        </header>
    )
}

export default Navbar