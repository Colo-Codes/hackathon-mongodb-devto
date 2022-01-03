import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Hero = () => {
    return (
        <div className="h-96 rounded-md overflow-hidden bg-cover bg-center relative">
            <Image
                src="/images/hero.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute z-0"
            />
            <div className="bg-gray-900 bg-opacity-80 flex items-center h-full absolute w-full z-10">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">MDN Web Docs Glossary: Definitions of Web-related terms</h2>
                    <p className="mt-2 text-gray-400">
                        Web technologies contain long lists of jargon and abbreviations that are used in documentation and coding. This glossary provides definitions of words and abbreviations you need to know to successfully understand and build for the web.
                    </p>
                    <Link href={`/products`}>
                        <button className="flex items-center mt-4 px-3 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">
                            <span>Shop Now</span>
                            <ArrowNarrowRightIcon className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;