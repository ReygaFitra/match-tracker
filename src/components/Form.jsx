import { Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, FormControl, FormHelperText, FormLabel, Input, useDisclosure } from '@chakra-ui/react';

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <div>
      <Button size="sm" variant="solid" rounded="sm" bgColor="#6527BE" color="white" _hover={{ bgColor: '#9681EB', rounded: 'sm' }} onClick={() => handleClick()}>
        Add New Club
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader bgColor="#6527BE" color="white">
            Input Data
          </DrawerHeader>
          <DrawerBody bgColor="#6527BE" color="white">
            <Container maxW="2xl">
              <FormControl as="form" isRequired>
                <FormLabel>Club Name</FormLabel>
                <Input id="clubName" name="club" variant="filled" rounded="sm" size="sm" _focus={{ bgColor: '#9681EB' }} type="text" placeholder="Club Name..." required />
                <FormHelperText color="white">Input your Club Name...</FormHelperText>
                <Divider my={2} />
                <FormLabel>Club City</FormLabel>
                <Input id="clubCity" name="city" variant="filled" rounded="sm" size="sm" _focus={{ bgColor: '#9681EB' }} type="text" placeholder="Club City..." required />
                <FormHelperText color="white">Input your Club City</FormHelperText>
                <Divider my={2} />
                <FormLabel>Club Image</FormLabel>
                <Input id="clubImage" name="image" variant="filled" rounded="sm" size="sm" _focus={{ bgColor: '#9681EB' }} type="text" placeholder="Club Image..." required />
                <FormHelperText color="white">Input your Club Image...</FormHelperText>
                <Divider my={2} />
                <Box mt={1} display={'flex'} gap={2} justifyContent={'end'}>
                  <Button my={'3'} variant="outline" size="md" rounded="sm" color="white" _hover={{ bgColor: '#9681EB' }} type="submit">
                    Submit
                  </Button>
                </Box>
              </FormControl>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Form;
