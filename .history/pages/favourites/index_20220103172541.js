import React from "react";
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

const getFavourites = (e) => {
    const previousFavourites = localStorage.getItem('favourites');
    const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), e.target.value] : [e.target.value];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    console.log('>> newFavourites', newFavourites);

};

const removeFavourites = (e) => {
    console.log('>> removeFavourites', e.target.value);
};

const Favourites = ({ favourites }) => {
    return (
        <>
            <Head>
                <title>Web Development Glossary Search - Favourites</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white w-full min-h-screen">
                <Header />
                <Container>
                    <h3 className='text-gray-400 italic'><strong>Top 10</strong> definitions that match your search query</h3>
                </Container>
                <Footer />
            </div>
        </>
    );
};