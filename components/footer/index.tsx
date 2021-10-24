import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link
} from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.700', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mx="auto"
      as="footer"
      bottom="0"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        bottom={'0'}
      >
        <Text>
          © {new Date().getFullYear()} By{' '}
          <Link href={'https://github.com/dantelentsoe'} target="_blank">
            Dante Lentsoe
          </Link>
          . All rights reserved
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'GitHub'}
            href={'https://github.com/dantelentsoe'}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'Linkedin'}
            href={'https://www.linkedin.com/in/dante-lentsoe-2b6566148/'}
          >
            <FaLinkedinIn />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
