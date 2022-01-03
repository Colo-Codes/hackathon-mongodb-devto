import React from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import parse from 'html-react-parser';
import Link from "next/link";

const Definition = ({ definition }) => {
    return (
        <Link href={`/definitions/${definition._id}`}>
            <div className="w-full mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
                <div className="px-5 py-3">
                    <InformationCircleIcon className="w-10 h-10" />
                    <h3 className="text-indigo-700 font-extrabold uppercase">{parse(definition.title)}</h3>
                    <hr></hr>
                    <p className="text-gray-500 mt-2">{parse(definition.excerpt)}</p>
                </div>
            </div>
        </Link>
    );
};

export default Definition;