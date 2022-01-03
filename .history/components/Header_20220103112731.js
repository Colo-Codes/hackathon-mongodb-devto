import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ShoppingCartIcon,
    MenuIcon,
    SearchIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import * as Realm from 'realm-web';

export const Header = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [autoComplete, setAutoComplete] = useState([]);

    useEffect(async () => {
        if (searchTerm.length) {

        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push({
            pathname: `/search/${searchTerm}`,
        });

        setSearchTerm('');
    };

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

                <div className="relative mt-6 max-w-lg mx-auto">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5" />
                    </span>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                        />
                    </form>
                </div>

            </header>

        </div>
    );
};

export default Header;