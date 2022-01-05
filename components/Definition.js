import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import parse from 'html-react-parser';
import Link from "next/link";

const Definition = ({ definition }) => {
    return (
        <Link href={`/definitions/${definition._id}`}>
            <div className="w-full mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
                <div className="px-5 py-3">
                    <h3 className="text-indigo-700 font-extrabold uppercase"><ChevronDoubleRightIcon className="w-4 h-4 inline-block mr-2" />{parse(definition.title)}</h3>
                    <hr></hr>
                    {definition.score && <p className="text-indigo-500 italic text-sm">How good is this result: <strong>{definition.score.toFixed(2)}</strong></p>}
                    <p className="text-gray-500 mt-2">{parse(definition.excerpt)}</p>
                </div>
            </div>
        </Link>
    );
};

export default Definition;