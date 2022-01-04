import React, { useState, useEffect } from "react";
import * as Realm from 'realm-web';
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Definitions from "../../components/Definitions";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

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
                    <div className="relative bg-white overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="sm:text-center lg:text-left">
                                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                            <span className="block xl:inline">MongoDB + DEV.to </span>
                                            <span className="block text-indigo-600 xl:inline">Hackathon</span>
                                        </h1>
                                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                            This web application was created as part of the MongoDB & DEV.to hackathon during the first week of 2022.
                                        </p>
                                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-between">
                                            <div className="rounded-md shadow">
                                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                                    Hackathon
                                                </a>
                                            </div>
                                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                                    Blog post describing this project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="relative pt-6 w-full">
                                            <hr></hr>
                                            <nav>
                                                <div className="flex flex-wrap sm:h-10 justify-around md:ml-10 md:pr-4 md:space-x-8">
                                                    <a href="#" className="mx-2 font-medium text-gray-500 hover:text-gray-900"><ArrowCircleRightIcon className="w-4 h-4 inline mr-1 mb-1" />MongoDB Docs</a>
                                                    <a href="https://www.youtube.com/playlist?list=PL4RCxklHWZ9v2lcat4oEVGQhZg6r4IQGV" target="_blank" className="mx-2 font-medium text-gray-500 hover:text-gray-900"><ArrowCircleRightIcon className="w-4 h-4 inline mr-1 mb-1" />MongoDB Tutorial</a>
                                                    <a href="https://twitter.com/DamianDemasi" target="_blank" className="mx-2 font-medium text-indigo-600 hover:text-indigo-500"><ArrowCircleRightIcon className="w-4 h-4 inline mr-1 mb-1" />Follow me on Twitter</a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/about.png" alt="About the project" />
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default About;