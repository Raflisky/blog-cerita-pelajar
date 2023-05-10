import dynamic from 'next/dynamic'
import { FC, ReactNode } from 'react'

import Footer from '@/components/Footer'

// Get navbar from client side
const Navbar = dynamic(() => import('@/components/NavigationBar'), { ssr: false })

interface AppLayoutProps {
    children: ReactNode
}
export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
