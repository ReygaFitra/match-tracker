import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const FormMatch = (props) => {
  const { btn_text, header } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [homeClubId, setHomeClubId] = useState('');
  const [awayClubId, setAwayClubId] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const homeScore = parseInt(formData.get('homeScore'));
    const awayScore = parseInt(formData.get('awayScore'));

    await fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeClubId,
        awayClubId,
        homeScore,
        awayScore,
      }),
    }).catch((err) => {
      console.log(err);
    });

    setIsLoading(false);
    router.refresh();
  };

  const getData = async () => {
    try {
      const res = await fetch('/api/club');
      const json = await res.json();
      setClubs(json.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
              <FormControl as="form" isRequired onSubmit={handleSubmit}>
                <Flex justifyContent="center" alignItems="center" gap={5}>
                  <Box>
                    <Heading as="h3" my="10px" textAlign="center">
                      Home
                    </Heading>
                    <Select placeholder="Select Club" size="sm" variant="filled" color="black" w="300px" onChange={(e) => setHomeClubId(e.target.value)}>
                      {clubs.map((club) => (
                        <option key={club.id} value={club.id}>
                          {club.name}
                        </option>
                      ))}
                    </Select>
                    <HStack>
                      <Text>Score : </Text>
                      <Input type="number" id="homeScore" name="homeScore" min={0} size="sm" variant="filled" mt={2} w="50px" color="black" />
                    </HStack>
                  </Box>
                  <Box>
                    <Heading as="h4" mt="50px">
                      VS
                    </Heading>
                  </Box>
                  <Box>
                    <Heading as="h3" my="10px" textAlign="center">
                      Away
                    </Heading>
                    <Select placeholder="Select Club" size="sm" variant="filled" color="black" w="300px" onChange={(e) => setAwayClubId(e.target.value)}>
                      {clubs.map((club) => (
                        <option key={club.id} value={club.id}>
                          {club.name}
                        </option>
                      ))}
                    </Select>
                    <HStack>
                      <Text>Score : </Text>
                      <Input type="number" id="awayScore" name="awayScore" min={0} size="sm" variant="filled" mt={2} w="50px" color="black" />
                    </HStack>
                  </Box>
                </Flex>

                <Box mt={1} display={'flex'} gap={2} justifyContent={'center'}>
                  <Button my={'3'} variant="outline" size="sm" rounded="sm" color="white" _hover={{ bgColor: '#9681EB' }} type="submit" onClick={() => submitClick()} isLoading={isLoading} loadingText="Submitting" spinnerPlacement="end">
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

export default FormMatch;
