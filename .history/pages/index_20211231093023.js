import Head from 'next/head';
import { useEffect } from 'react';
import * as Realm from 'realm-web';

const REALM_APP_ID = 'hackathon_app-bsvkg';

export default function Home() {
  useEffect(async () => {
    // Get the app defined on MongoDB
    const app = new Realm.App({ id: REALM_APP_ID });
    // Credential to access the app (anonymous user)
    const credentials = Realm.Credentials.anonymous();

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2" >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
          </h1>

          <p className="mt-3 text-2xl">
          </p>

        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">

        </footer>
      </div >
    );
  };
