import Head from 'next/head';
import { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import Header from '../components/Header';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Definitions from '../components/Definitions';
import Footer from '../components/Footer';

// const REALM_APP_ID = 'hackathon_app-bsvkg';

export default function Home() {
  const [definitions, setDefinitions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [definitionsPerPAge, setDefinitionsPerPage] = useState(10);

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

  const lastDefinitionIndex = currentPage * definitionsPerPAge;

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
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
            <Definitions definitions={definitions} />
          </main>
        </Container>
        <Footer />
      </div>
    </div >
  );
};
