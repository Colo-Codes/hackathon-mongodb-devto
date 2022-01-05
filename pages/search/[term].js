import React from 'react';
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Definitions from '../../components/Definitions';

export const DefinitionDetails = () => {
    const [definitions, setDefinitions] = useState();
    const { query } = useRouter();

    useEffect(async () => {
        if (query.term) {
            // Realm App Id located in the .env.local file (not shared on the repository)
            const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                const user = await app.logIn(credentials);
                const searchDefinitions = await user.functions.searchDefinitions(query.term);
                setDefinitions(() => searchDefinitions);
            } catch (error) {
                console.error(error);
            }
        }
    }, [query]);

    return (
        <>
            {definitions && (
                <>
                    <Head>
                        <title>Web Development Glossary Search - {query.term}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="bg-white w-full min-h-screen">
                        <Header />
                        <Container>
                            <h3 className='text-gray-400 italic'><strong>Top 10</strong> definitions that match your search query: <span className='text-indigo-400'>{query.term}</span></h3>
                            {/* Slice definitions array in case there are more than 10 values */}
                            <Definitions definitions={definitions.slice(0, 10)} />
                        </Container>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
};

export default DefinitionDetails;