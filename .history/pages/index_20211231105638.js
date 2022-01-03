import Head from 'next/head';
import { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import parse from 'html-react-parser';
import Header from '../components/Header';
import Container from '../components/Container';
import Hero from '../components/Hero';

const REALM_APP_ID = 'hackathon_app-bsvkg';

export default function Home() {
  const [definitions, setDefinitions] = useState([]);

  useEffect(async () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2" >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white w-full min-h-screen" >
        <Header />

        <Container>
          <Hero />


          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Definitions
            </h1>

            {definitions && definitions.map(definition => (
              <div key={definition.id} className="my-4">
                <h2 className="text-3xl font-bold">
                  {parse(definition.title)}
                </h2>
                <p className="text-lg">
                  {parse(definition.excerpt)}
                </p>
              </div>
            ))}

            <p className="mt-3 text-2xl">
            </p>

          </main>

          <footer className="flex items-center justify-center w-full h-24 border-t">

          </footer>
        </Container>
      </div>
    </div >
  );
};
