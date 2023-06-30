import { Button, Flex, Heading, HStack, Divider } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Flex as={'nav'} p="10px" alignItems="center" justifyContent="space-evenly" shadow="sm">
      <Heading size="md" color="#6527BE">
        <Link href="/">Home</Link>
      </Heading>
      <HStack>
        <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: '#9681EB', color: 'white', rounded: 'sm' }}>
          <Link href="/club">Club</Link>
        </Button>
        <Divider orientation="vertical" height={7} />
        <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: '#9681EB', color: 'white', rounded: 'sm' }}>
          <Link href="/score">Score</Link>
        </Button>
        <Divider orientation="vertical" height={7} />
        <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: '#9681EB', color: 'white', rounded: 'sm' }}>
          <Link href="/classement">Classement</Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
