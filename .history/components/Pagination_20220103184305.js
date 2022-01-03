import React from 'react';

export const Pagination = ({ definitionsPerPage, totalDefinitions, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDefinitions / definitionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center">
            <ul className="flex rounded-md mt-8">
                <li className="mr-4">
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" onClick={() => paginate(1)}>
                        First
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <a onClick={() => paginate(number)} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white" href="#">
                            <span>{number}</span>
                        </a>
                    </li>
                ))}
                <li className="mr-4">
                    <button onClick={() => paginate(number + 1)} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white" href="#">
                        Next page
                    </button>
                </li>
            </ul>
        </nav>
    );
};
