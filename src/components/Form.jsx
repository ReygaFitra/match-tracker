import { Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, FormControl, FormHelperText, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

const Form = (props) => {
  const { btn_text, header, formLabel1, formLabel2, placeholder1, placeholder2, id1, id2, name1, name2, formHelperText1, formHelperText2, type, onsubmit, value1, value2, onchange1, onchange2 } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    onOpen();
  };

  const submitClick = () => {
    onClose();
  };

  return (
    <div>
      <Button size="sm" variant="solid" rounded="sm" bgColor="#6527BE" color="white" _hover={{ bgColor: '#9681EB', rounded: 'sm' }} onClick={() => handleClick()}>
        {btn_text}
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader bgColor="#6527BE" color="white">
            {header}
          </DrawerHeader>
          <DrawerBody bgColor="#6527BE" color="white">
            <Container maxW="2xl">
              <FormControl as="form" isRequired onSubmit={onsubmit}>
                <FormLabel>{formLabel1}</FormLabel>
                <Input id={id1} name={name1} variant="filled" rounded="sm" size="sm" _focus={{ bgColor: '#9681EB' }} type={type} value={value1} onChange={onchange1} placeholder={placeholder1} required />
                <FormHelperText color="white">{formHelperText1}</FormHelperText>
                <Divider my={2} />
                <FormLabel>{formLabel2}</FormLabel>
                <Input id={id2} name={name2} variant="filled" rounded="sm" size="sm" _focus={{ bgColor: '#9681EB' }} type={type} value={value2} onChange={onchange2} placeholder={placeholder2} required />
                <FormHelperText color="white">{formHelperText2}</FormHelperText>
                <Divider my={2} />

                <Box mt={1} display={'flex'} gap={2} justifyContent={'end'}>
                  <Button my={'3'} variant="outline" size="md" rounded="sm" color="white" _hover={{ bgColor: '#9681EB' }} type="submit" onClick={() => submitClick()} isLoading={isLoading} loadingText="Submitting" spinnerPlacement="end">
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
