import type { NextPage } from 'next';
import { Flex, Text, Stack, Image, Link } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/footer';

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Firebase Auth App | Error Page</title>
        <meta
          name="description"
          content="A React Firebase Authentication Application, by Dante Lentsoe "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          Page Not Found go{' '}
          <Link href="/login" p="3">
            {' '}
            back
          </Link>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/images/404compressed.png'}
            w={'60%'}
          />
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default ErrorPage;
