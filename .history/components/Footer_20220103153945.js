import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-md text-indigo-500 hover:text-indigo-400 cursor-pointer">
                    <Link href="/">MONGODB + DEV.TO HACKATHON - By Damian Demasi</Link>
                </div>
                <p className="py-2 text-gray-500 sm:py-0">All rights un-reserved</p>
            </div>
        </footer>
    );
};

export default Footer;