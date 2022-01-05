import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Definitions from './Definitions';
import * as Realm from 'realm-web';
import Spinner from './Spinner';

export const Pagination = ({ itemsPerPage }) => {
    // Based on the code provided on the react-paginate repository: https://github.com/AdeleD/react-paginate#readme

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // Get definitions from MongoDB
    const [definitions, setDefinitions] = useState([]);
    const [isQuerying, setIsQuerying] = useState(false);

    useEffect(async () => {
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        // Get the app defined on MongoDB
        const app = new Realm.App({ id: REALM_APP_ID });
        // Credential to access the app (anonymous user)
        const credentials = Realm.Credentials.anonymous();

        try {
            setIsQuerying(true);
            // Log in to the app using the credentials
            const user = await app.logIn(credentials);
            // Call the serverless function defined on MongoDB to get all the data
            const allDefinitions = await user.functions.getAllDefinitions();
            // Store the data on a state
            setDefinitions(allDefinitions);
        } catch (error) {
            console.error(error);
        }
        setIsQuerying(false);
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
            <Spinner isQuerying={isQuerying} />
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
};