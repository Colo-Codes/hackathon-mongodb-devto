import React from 'react';
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import DefinitionDetail from '../../components/DefinitionDetail';

export const DefinitionDetails = () => {
    const [definition, setDefinition] = useState();
    const { query } = useRouter();

    useEffect(async () => {
        // Realm App Id located in the .env.local file (not shared on the repository)
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            const oneDefinition = await user.functions.getOneDefinition(query.id);
            setDefinition(() => oneDefinition);
        } catch (error) {
            console.error(error);
        }
    }, [query]);

    return (
        <>
            {definition && (
                <>
                    <Head>
                        <title>Web Development Glossary Search - {definition.title}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="bg-white w-full min-h-screen">
                        <Header />
                        <Container>
                            <DefinitionDetail definition={definition} />
                        </Container>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
};

export default DefinitionDetails;