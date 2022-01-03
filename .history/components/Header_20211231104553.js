import React, { useState } from 'react';
import Link from 'next/link';
import {
    ShoppingCartIcon,
    MenuIcon,
    SearchIcon,
} from '@heroicons/react/solid';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div>
            <header>
                <div className="flex items-center justify-between px-4 py-2">
                    <Link href="/">
                        <div>
                            Web Development Glossary Search
                        </div>
                    </Link>
                    <div className="flex sm:hidden">
                        <button onClick={() => { setIsMenuOpen(!isMenuOpen); }} className='text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500'>
                            <MenuIcon className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                <nav
                    className={`${isMenuOpen ? "" : "hidden"
                        } sm:flex sm:justify-center sm:items-center mt-4`}
                >
                    <div className="flex flex-col sm:flex-row">
                        <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                            <Link href="/products">Shop</Link>
                        </div>
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                            href="#"
                        >
                            Categories
                        </a>
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                            href="#"
                        >
                            Contact
                        </a>
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                            href="#"
                        >
                            About
                        </a>
                    </div>
                </nav>

            </header>

        </div>
    );
};

export default Header;