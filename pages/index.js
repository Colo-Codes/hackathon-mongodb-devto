import Head from 'next/head';
import Header from '../components/Header';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Pagination } from '../components/Pagination';

export default function Home() {

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
            <Pagination itemsPerPage={10} />
          </main>
        </Container>
        <Footer />
      </div>
    </div >
  );
};
