import React from 'react';

export const Pagination = ({
    definitionsPerPage,
    totalDefinitions,
    paginate,
    currentPage,
}) => {
    console.log(paginate);
    const pageNumbers = [];
    for (
        let i = 1;
        i <= Math.ceil(totalDefinitions / definitionsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <nav className='flex justify-center'>
            <ul className='flex rounded-md mt-8'>
                <li className='mr-4'>
                    <button
                        type='button'
                        onClick={() =>
                            currentPage > 1 && paginate(currentPage - 1)
                        }
                        className={`py-2 px-4 leading-tight bg-white border border-gray-200border-r-0 ml-0 rounded-l hover:text-white ${currentPage > 1
                            ? 'text-indigo-700 hover:bg-indigo-500'
                            : 'text-gray-700 hover:bg-gray-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none'
                            }`}
                        disabled={currentPage > 1 ? '' : 'disabled'}>
                        Previous page
                    </button>
                </li>
                {pageNumbers.map((number, i = currentPage) => {
                    if (pageNumbers.length > 20) {
                        if (i > currentPage - 2 && i < currentPage + 4) {
                            return (
                                <li key={number} className=''>
                                    <button
                                        onClick={() => paginate(number)}
                                        className='py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white cursor-pointer'>
                                        <span>{number}</span>
                                    </button>
                                </li>
                            );
                        }
                        if (i === currentPage + 5) {
                            return (
                                <li key={number} className=''>
                                    <span className='block px-4 py-2 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white cursor-pointer'>
                                        ...
                                    </span>
                                </li>
                            );
                        }
                    } else {
                        return (
                            <li key={number} className=''>
                                <a
                                    onClick={() => paginate(number)}
                                    className='py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white cursor-pointer'>
                                    <span>{number}</span>
                                </a>
                            </li>
                        );
                    }
                })}
                <li className='mr-4'>
                    <button
                        type='button'
                        onClick={() =>
                            currentPage < pageNumbers.length &&
                            paginate(currentPage + 1)
                        }
                        className={`py-2 px-4 leading-tight bg-white border border-gray-200border-r-0 ml-0 rounded-l hover:text-white ${currentPage < pageNumbers.length
                            ? 'text-indigo-700 hover:bg-indigo-500'
                            : 'text-gray-700 hover:bg-gray-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none'
                            }`}
                        disabled={
                            currentPage < pageNumbers.length ? '' : 'disabled'
                        }>
                        Next page
                    </button>
                </li>
            </ul>
        </nav>
    );
};
