import React from 'react';

export const Pagination = ({ definitionsPerPage, totalDefinitions, paginate, currentPage }) => {

    console.log(paginate);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDefinitions / definitionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center">
            <ul className="flex rounded-md mt-8">
                <li className="mr-4">
                    <button onClick={() => paginate(1)} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white">
                        Previous page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <a onClick={() => paginate(number)} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white">
                            <span>{number}</span>
                        </a>
                    </li>
                ))}
                <li className="mr-4">
                    <button onClick={() => paginate(currentPage + 1)} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white">
                        Next page
                    </button>
                </li>
            </ul>
        </nav>
    );
};
