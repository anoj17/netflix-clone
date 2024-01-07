'use client';

import Link from 'next/link'
import React from 'react'
import Logo from '../../public/netflix_logo.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bell, Search } from 'lucide-react';
import UserNav from './UserNav'

interface linkProps {
    name: string,
    href: string
}
const links: linkProps[] = [
    { name: 'Home', href: '/home' },
    { name: 'Tv Show', href: '/home/show' },
    { name: 'Movies', href: '/home/movies' },
    { name: 'Recently Added', href: '/home/recently' },
    { name: 'My List', href: '/home/user/list' }
]
const NavBar = () => {
    const pathName = usePathname()
    return (
        <div className='w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 flex lg:px-8 mt-5'>
            <div className='flex items-center'>
                <Link href='/home' className='w-32'>
                    <Image src={Logo} alt='logo' priority />
                </Link>
                <ul className='lg:flex justify-center items-center gap-x-4 hidden ml-20'>
                    {
                        links.map((item, id) => (
                            <div key={id} className='ml-2 relative '>
                                {
                                    pathName === item.href ? (
                                        <li>
                                            <Link href={item.href} className='text-white font-semibold underline text-sm'>{item.name}</Link>
                                        </li>
                                    ) : (
                                        <li className='text-gray-200 font-normal text-sm'>
                                            <Link href={item.href}>{item.name}</Link>
                                        </li>
                                    )
                                }
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div className='flex items-center gap-x-6'>
                <Search className='h-5 w-5 text-gray-400 cursor-pointer' />
                <Bell className='h-5 w-5 text-gray-400 cursor-pointer' />
                <UserNav />
            </div>
        </div>
    )
}

export default NavBar