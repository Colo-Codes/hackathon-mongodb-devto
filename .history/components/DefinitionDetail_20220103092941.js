import React from "react";
import parse from 'html-react-parser';

const DefinitionDetail = ({ definition }) => {
    return (
        <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h3 className="text-gray-700 uppercase text-lg">{definition.title}</h3>
                <hr className="my-3" />
                <p className="text-gray-500 mt-2">{definition.length parse(definition.contents)}</p>
                <div className="flex items-center mt-6">
                    <button className="px-8 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">
                        Add To Favourites?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DefinitionDetail;