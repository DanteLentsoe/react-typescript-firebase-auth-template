import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import SignUpScreen from '../components/signupForm';

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Firebase Auth App | Sign Up</title>
        <meta
          name="description"
          content="A React Firebase Authentication Application, by Dante Lentsoe "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignUpScreen />
      <Footer />
    </>
  );
};

export default SignUp;
