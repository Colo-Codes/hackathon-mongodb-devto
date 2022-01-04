import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Definitions from './Definitions';
import * as Realm from 'realm-web';


export const Pagination = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // Get definitions from MongoDB
    const [definitions, setDefinitions] = useState([]);

    useEffect(async () => {
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        // Get the app defined on MongoDB
        const app = new Realm.App({ id: REALM_APP_ID });
        // Credential to access the app (anonymous user)
        const credentials = Realm.Credentials.anonymous();

        try {
            // Log in to the app using the credentials
            const user = await app.logIn(credentials);
            // Call the serverless function defined on MongoDB to get all the data
            const allDefinitions = await user.functions.getAllDefinitions();
            // Store the data on a state
            setDefinitions(allDefinitions);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(definitions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(definitions.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, definitions]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % definitions.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Definitions definitions={currentItems} />
            <ReactPaginate
                previousLabel="< Previous Page"
                breakLabel="..."
                nextLabel="Next Page >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="flex flex-wrap justify-center items-center"
                breakClassName='block py-2 px-4 leading-tight bg-white border border-gray-200 rounded hover:text-white text-indigo-700 hover:bg-indigo-500 cursor-pointer'
                pageLinkClassName='block py-2 px-4 leading-tight bg-white border border-gray-200 rounded hover:text-white  text-indigo-700 hover:bg-indigo-500'
                previousLinkClassName='block mr-2 py-2 px-4 leading-tight bg-white border border-gray-200 rounded hover:text-white text-indigo-700 hover:bg-indigo-500'
                nextLinkClassName='block ml-2 py-2 px-4 leading-tight bg-white border border-gray-200 rounded hover:text-white text-indigo-700 hover:bg-indigo-500 cursor-pointer'
                disabledLinkClassName='bg-gray-300 !text-white cursor-not-allowed hover:bg-gray-300'
                activeLinkClassName='text-gray-700 bg-gray-200'
            />
        </>
    );
};;

// export const Pagination = ({
//     definitionsPerPage,
//     totalDefinitions,
//     paginate,
//     currentPage,
// }) => {
//     console.log(paginate);
//     const pageNumbers = [];
//     for (
//         let i = 1;
//         i <= Math.ceil(totalDefinitions / definitionsPerPage);
//         i++
//     ) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav className='flex justify-center'>
//             <ul className='flex rounded-md mt-8'>
//                 <li className='mr-4'>
//                     <button
//                         type='button'
//                         onClick={() =>
//                             currentPage > 1 && paginate(currentPage - 1)
//                         }
//                         className={`py-2 px-4 leading-tight bg-white border border-gray-200border-r-0 rounded hover:text-white mr-4 ${currentPage > 1
//                             ? 'text-indigo-700 hover:bg-indigo-500'
//                             : 'text-gray-700 hover:bg-gray-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none'
//                             }`}
//                         disabled={currentPage > 1 ? '' : 'disabled'}>
//                         Previous page
//                     </button>
//                 </li>
//                 {pageNumbers.map((number, i = currentPage) => {
//                     if (pageNumbers.length > 20) {
//                         if (i > currentPage - 2 && i < currentPage + 4) {
//                             return (
//                                 <li key={number} className=''>
//                                     <button
//                                         onClick={() => paginate(number)}
//                                         className={`py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded hover:bg-indigo-500 hover:text-white cursor-pointer ${number === currentPage && 'bg-indigo-100'}`}>
//                                         <span>{number}</span>
//                                     </button>
//                                 </li>
//                             );
//                         }
//                         if (i === currentPage + 5) {
//                             return (
//                                 <li key={number} className=''>
//                                     <span className='block px-4 py-2 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded'>
//                                         ...
//                                     </span>
//                                 </li>
//                             );
//                         }
//                         if (i === pageNumbers.length - 1) {
//                             return (
//                                 <li key={number} className=''>
//                                     <button
//                                         onClick={() => paginate(number)}
//                                         className={`py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 ml-0 rounded hover:bg-indigo-500 hover:text-white cursor-pointer ${number === currentPage && 'bg-indigo-100'}`}>
//                                         <span>{number}</span>
//                                     </button>
//                                 </li>
//                             );
//                         }
//                     } else {
//                         return (
//                             <li key={number} className=''>
//                                 <a
//                                     onClick={() => paginate(number)}
//                                     className='py-2 px-4 leading-tight bg-white border border-gray-200 text-indigo-700 border-r-0 ml-0 rounded hover:bg-indigo-500 hover:text-white cursor-pointer'>
//                                     <span>{number}</span>
//                                 </a>
//                             </li>
//                         );
//                     }
//                 })}
//                 <li className='mr-4'>
//                     <button
//                         type='button'
//                         onClick={() =>
//                             currentPage < pageNumbers.length &&
//                             paginate(currentPage + 1)
//                         }
//                         
//                         disabled={
//                             currentPage < pageNumbers.length ? '' : 'disabled'
//                         }>
//                         Next page
//                     </button>
//                 </li>
//             </ul>
//         </nav>
//     );
// };
