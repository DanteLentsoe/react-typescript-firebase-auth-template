import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Firebase Auth App</title>
        <meta
          name="description"
          content="A React Firebase Authentication Application, by Dante Lentsoe "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer />
    </>
  );
};

export default Home;
