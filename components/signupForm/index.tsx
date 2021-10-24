import React, { LegacyRef, useRef } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image
} from '@chakra-ui/react';

const SignUpScreen = () => {
  // form fields references
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const passwordConfirmRef = useRef<any>();

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign up an account</Heading>
          <FormControl id="email" ref={emailRef}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" ref={passwordRef}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl ref={passwordConfirmRef}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>

              <Link href="/forgotpassword" color={'purple.500'}>
                Forgot password?
              </Link>
            </Stack>
            <Link href="/login" color={'purple.500'}>
              Login
            </Link>
            <Button colorScheme={'purple'} variant={'solid'}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          marginTop={'30%'}
          h="50%"
          src={'/images/signupcompressed.png'}
          w={'100%'}
        />
      </Flex>
    </Stack>
  );
};

export default SignUpScreen;
