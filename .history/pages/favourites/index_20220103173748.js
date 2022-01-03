import React, { useState, useEffect } from "react";
import * as Realm from 'realm-web';
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Definitions from "../../components/Definitions";

const getFavourites = (e) => {
    const previousFavourites = localStorage.getItem('favourites');
    const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), e.target.value] : [e.target.value];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    console.log('>> newFavourites', newFavourites);

};

// const removeFavourites = (e) => {
//     console.log('>> removeFavourites', e.target.value);
// };

const Favourites = () => {
    const [definitions, setDefinitions] = useState([]);

    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

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

    return (
        <>
            <Head>
                <title>Web Development Glossary Search - Favourites</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white w-full min-h-screen">
                <Header />
                <Container>
                    <div className="flex items-center">
                        <Definitions definitions={definitions.filter((definition) => {
                            return favourites.includes(definition.title);
                        })} />
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default Favourites;