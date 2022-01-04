import React, { useState, useEffect } from "react";
import * as Realm from 'realm-web';
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Definitions from "../../components/Definitions";

const About = () => {
    return (
        <>
            <Head>
                <title>Web Development Glossary Search - About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white w-full min-h-screen">
                <Header />
                <Container>
                    <div className="flex items-center">
                        <p>test</p>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default About;