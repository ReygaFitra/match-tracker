import { Button, Flex, Heading, HStack, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex as={'nav'} p="10px" alignItems="center" justifyContent="space-evenly" shadow="sm">
      <Heading size="md" color="#6527BE" _hover={{ color: '#9681EB', transition: '.5s' }}>
        <NextLink href="/">Home</NextLink>
      </Heading>
      <HStack>
        <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: '#9681EB', color: 'white', rounded: 'sm' }}>
          <NextLink href="/club">Club</NextLink>
        </Button>
        <Divider orientation="vertical" height={7} />
        <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: '#9681EB', color: 'white', rounded: 'sm' }}>
          <NextLink href="/score">Score</NextLink>
        </Button>
        <Divider orientation="vertical" height={7} />
        <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: '#9681EB', color: 'white', rounded: 'sm' }}>
          <NextLink href="/classement">Classement</NextLink>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
