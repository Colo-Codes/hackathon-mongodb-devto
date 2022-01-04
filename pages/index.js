import Head from 'next/head';
import { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import Header from '../components/Header';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Definitions from '../components/Definitions';
import Footer from '../components/Footer';
import { Pagination } from '../components/Pagination';

export default function Home() {

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2" >
      <Head>
        <title>MONGODB + DEV.TO HACKATHON - By Damian Demasi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white w-full min-h-screen" >
        <Header />
        <Container>
          <Hero />
          <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20">
            {/* <Definitions definitions={currentDefinitions} /> */}
            <Pagination itemsPerPage={10} />
          </main>
        </Container>
        <Footer />
      </div>
    </div >
  );
};
