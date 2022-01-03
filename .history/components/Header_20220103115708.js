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
            // add your Realm App Id to the .env.local file
            const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                const user = await app.logIn(credentials);
                const searchAutoComplete = await user.functions.searchAutoComplete(searchTerm);
                setAutoComplete(() => searchAutoComplete);
            } catch (error) {
                console.error(error);
            }
        } else {
            setAutoComplete([]);
        }
    }, [searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push({
            pathname: `/search/${searchTerm}`,
        });

        setSearchTerm('');
    };

    const handleSelect = (id) => {
        setSearchTerm("");
        router.push({
            pathname: `/definitions/${id}`,
        });
    };

    return (
        <div>
            <header>
                <div className="flex items-center justify-around px-4 py-2">
                    <Link href="/" >
                        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl justify-self-center cursor-pointer'>
                            Web Development Glossary Search
                        </h1>
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
                    {autoComplete.length > 0 && (
                        < ul className='absolute inset-x-0 top-full bg-green-200 border border-green-500 rounded-md z-20'>
                            {autoComplete.map((item) => (
                                <li
                                    key={item._id}
                                    className="px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer"
                                    onClick={() => handleSelect(item._id)}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </header >

        </div >
    );
};

export default Header;