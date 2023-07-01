import { Box, Card, CardBody, Divider, Heading, Stack, Text } from '@chakra-ui/react';

const CardLayout = (props) => {
  const { club_city, club_name, club_point } = props;
  return (
    <>
      <Card w={'full'} p="10px" h={'full'}>
        <CardBody>
          <Stack>
            <Box>
              <Heading size="sm" py={2} textTransform="uppercase" display="flex" alignItems="center" gap={1} color="#6527BE">
                {club_name}
              </Heading>
              <Text pt="2" fontSize="sm">
                {club_city}
              </Text>
              <Divider />
              <Text pt="2" fontSize="lg" fontWeight="bold" textAlign="center">
                {club_point}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default CardLayout;
