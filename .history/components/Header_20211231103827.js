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


            </header>

        </div>
    );
};

export default Header;