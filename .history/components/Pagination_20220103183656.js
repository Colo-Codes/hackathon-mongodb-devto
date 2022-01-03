import React from 'react';

export const Pagination = ({ definitionsPerPage, totalDefinitions }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDefinitions / definitionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center">
            <ul className="flex rounded-md mt-8">
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <a onClick={() => paginate()} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white" href="!#">
                            <span>{number}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
