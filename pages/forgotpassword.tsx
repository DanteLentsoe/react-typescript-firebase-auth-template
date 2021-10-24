import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import ForgotPasswordForm from '../components/forgotPassword';

const Password: NextPage = () => {
  return (
    <>
      <Head>
        <title>Firebase Auth App | Password</title>
        <meta
          name="description"
          content="A React Firebase Authentication Application, by Dante Lentsoe "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ForgotPasswordForm />
      <Footer />
    </>
  );
};

export default Password;
