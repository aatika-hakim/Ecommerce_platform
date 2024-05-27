'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Search, ShoppingCart } from 'lucide-react';
import { ModeToggle } from './ThemeBtn';
import logo from '../../../public/assets/Elogo.png'
import { MenuItems } from '@/utils/data';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
            <div className="py-2 bg-primary/50">
                <div className="container flex items-center justify-between px-4">
                    <div>
                        <Link href="#">
                            <Image
                                src={logo}
                                alt="Logo"
                                height={50}
                                width={50}
                                className="w-12"
                            />
                            <h1 className='font-bold text-slate-900 dark:text-white'>E-Bazaar</h1>
                        </Link>
                    </div>
                    {/* navlinks */}
                    <div className='flex justify-center'>
                        {/* <ul className='items-center flex-shrink-0 hidden gap-4 text-xs sm:flex lg:text-lg md:text-md lg:gap-16 md:gap-8'>
                            {MenuItems.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.link} className="inline-block py-1 duration-200 hover:text-primary hover:font-bold">{item.name}</Link>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                    {/* search bar and menu toggle */}
                    <div className="flex items-center justify-between gap-4 ">
                        <div className="relative hidden group sm:block">
                            <Input type="text" placeholder=" Search" />
                            <Search className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
                        </div>
                        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none sm:hidden">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                        {/* shopping cart */}
                        <button
                            onClick={() => alert('Not available')}
                            className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
                        >
                            <span className="hidden transition-all duration-200 group-hover:block">
                                Order
                            </span>
                            <ShoppingCart className="text-xl text-white cursor-pointer drop-shadow-sm" />
                        </button>
                        {/* Theme Button */}
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
                {/* Mobile navigation */}
                {isMenuOpen && (
                    <div className="px-4 py-2 mt-2 bg-gray-400 shadow-md sm:hidden">
                        <ul className="space-y-4">
                            {MenuItems.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.link} className="block py-2 text-lg text-gray-800 hover:text-primary hover:font-bold">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
