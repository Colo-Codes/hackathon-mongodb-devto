import React from "react";
import parse from 'html-react-parser';
import { HeartIcon, XCircleIcon } from "@heroicons/react/solid";

const addToFavourites = (e) => {
    const previousFavourites = localStorage.getItem('favourites');
    const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), e.target.value] : [e.target.value];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
};

const removeFromFavourites = (e) => {
    console.log('>> removeFromFavourites', e.target.value);
    localStorage.removeItem('favourites', JSON.stringify(e.target.value));
    console.log(localStorage.getItem('favourites');)
};

const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

const DefinitionDetail = ({ definition }) => {
    return (
        // <div className="md:flex md:items-center">
        <div className="max-w-2xl mx-auto mt-5 md:mt-0 ">
            <h3 className="text-indigo-700 font-extrabold uppercase text-lg">{definition.title}</h3>
            <hr className="my-3" />
            <p className="text-gray-500 mt-2">{Array.isArray(definition) ? definition : parse(definition.contents)}</p>
            {/* <p className="text-gray-500 mt-2">{Array.isArray(definition) ? definition : definition.contents}</p> */}
            <div className="flex items-center mt-6">
                {
                    // favourites.includes(definition.title)
                    //     ?
                    //     <button onClick={addToFavourites} value={definition.title} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                    //         <HeartIcon className="w-4 h-4 inline-block mr-2" />
                    //         Add to Favourites
                    //     </button>
                    //     :
                    <button onClick={removeFromFavourites} value={definition.title} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        <XCircleIcon className="w-4 h-4 inline-block mr-2" />
                        Remove from Favourites
                    </button>
                }
            </div>
        </div>
        // </div>
    );
};

export default DefinitionDetail;