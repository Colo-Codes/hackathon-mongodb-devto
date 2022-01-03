import React from "react";
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";

const addToFavourites = (e) => {
    console.log('>> addToFavourites', e.target.value);
    const previousFavourites = localStorage.getItem('favourites');
    const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), e.target.value] : [e.target.value];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    console.log('>> newFavourites', newFavourites);

};

const DefinitionDetail = ({ definition }) => {
    return (
        <>
            {(
                <>
                    <Head>
                        <title>Web Development Glossary Search - {query.term}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="bg-white w-full min-h-screen">
                        <Header />
                        <Container>
                            <h3 className='text-gray-400 italic'><strong>Top 10</strong> definitions that match your search query: <span className='text-indigo-400'>{query.term}</span></h3>
                        </Container>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
};

export default DefinitionDetail;