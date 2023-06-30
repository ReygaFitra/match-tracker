import { Box, Card, CardBody, CardHeader, Divider, Heading, Stack, Text } from '@chakra-ui/react';

const CardLayout = () => {
  return (
    <>
      <Card w={'full'}>
        <CardHeader py={3} display={'flex'} justifyContent={'space-between'}>
          <Heading size="md">card head Title</Heading>
        </CardHeader>
        <CardBody>
          <Divider />
          <Stack>
            <Box>
              <Heading size="sm" py={2} textTransform="uppercase" display="flex" alignItems="center" gap={1} color="#6527BE">
                box title
              </Heading>
              <Text pt="2" fontSize="sm">
                description
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default CardLayout;
