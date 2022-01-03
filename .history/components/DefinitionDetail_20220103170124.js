import React from "react";
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";

const addToFavourites = (e) => {
    console.log('>> addToFavourites', e.target);
};

const DefinitionDetail = ({ definition }) => {
    return (
        // <div className="md:flex md:items-center">
        <div className="max-w-2xl mx-auto mt-5 md:mt-0 ">
            <h3 className="text-indigo-700 font-extrabold uppercase text-lg">{definition.title}</h3>
            <hr className="my-3" />
            <p className="text-gray-500 mt-2">{Array.isArray(definition) ? definition : parse(definition.contents)}</p>
            {/* <p className="text-gray-500 mt-2">{Array.isArray(definition) ? definition : definition.contents}</p> */}
            <div className="flex items-center mt-6">
                <button onClick={addToFavourites} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                    <HeartIcon className="w-4 h-4 inline-block mr-2" />
                    Add to Favourites
                </button>
            </div>
        </div>
        // </div>
    );
};

export default DefinitionDetail;