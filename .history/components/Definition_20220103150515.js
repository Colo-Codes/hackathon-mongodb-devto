import React from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import parse from 'html-react-parser';
import Link from "next/link";

const Definition = ({ definition }) => {
    return (
        <Link href={`/definitions/${definition._id}`}>
            <div className="w-full mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
                <div className="flex items-end justify-end w-full bg-cover relative">
                    <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
                        <InformationCircleIcon className="w-7 h-7" />
                    </button>
                </div>
                <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{parse(definition.title)}</h3>
                    <p className="text-gray-500 mt-2">${parse(definition.excerpt)}</p>
                </div>
            </div>
        </Link>
    );
};

export default Definition;