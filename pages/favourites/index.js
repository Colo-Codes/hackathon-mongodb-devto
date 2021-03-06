import React, { useState, useEffect } from "react";
import * as Realm from 'realm-web';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Definitions from "../../components/Definitions";
import Spinner from "../../components/Spinner";

const getFavourites = (e) => {
    const previousFavourites = localStorage.getItem('favourites');
    const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), e.target.value] : [e.target.value];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
};

const Favourites = () => {
    const [definitions, setDefinitions] = useState([]);
    const [isQuerying, setIsQuerying] = useState(false);

    const favourites = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favourites')) : [];

    useEffect(async () => {
        setIsQuerying(true);
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
        setIsQuerying(false);
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
                    <HeartIcon className="w-10 h-10 m-auto text-indigo-700" />
                    <Spinner isQuerying={isQuerying} />
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