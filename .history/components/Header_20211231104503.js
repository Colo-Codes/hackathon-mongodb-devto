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
                <nav className={`${isMenuOpen ? "" : "hidden"} sm:flex sm:justify-center sm:items-center mt-4`}>

                </nav>

            </header>

        </div>
    );
};

export default Header;