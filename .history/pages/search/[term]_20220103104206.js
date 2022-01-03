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
    const [definitions, setDefinitions] = useState();
    const { query } = useRouter();

    useEffect(async () => {
        // if (query.term) {
        // add your Realm App Id to the .env.local file
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            const searchDefinitions = await user.functions.searchDefinitions(query.term);
            console.log('searchDefinitions', searchDefinitions);
            setDefinitions(() => searchDefinitions[0]);
        } catch (error) {
            console.error(error);
        }
        console.log('definitions', definitions);
        // }
    }, []);


    return (
        <>
            {definitions && (
                <>
                    <Head>
                        <title>MongoDB E-Commerce Demo - {definitions.title}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="bg-white w-full min-h-screen">
                        <Header />
                        <Container>
                            <DefinitionDetail definition={definitions} />
                        </Container>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
};

export default DefinitionDetails;