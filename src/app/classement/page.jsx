'use client';
import TableClassement from '@/components/TableClassement';
import { Box, Card, CardBody, CardHeader, Container, Divider, HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';

export const metadata = {
  title: 'Match Tracker | Classement',
  description: 'Football Club Classement Data',
};

export default function Club() {
  return (
    <Container maxW="4xl" pt={10}>
      <TableClassement />

      <Container maxW="xl">
        <Card my="20px" size="sm">
          <CardHeader>
            <Heading size="md" color="#6527BE">
              Keterangan :
            </Heading>
            <Divider mt="10px" />
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <HStack display="flex" justifyContent="space-between">
                <Box>
                  <Heading size="xs" textTransform="uppercase" color="#6527BE">
                    MA
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    Jumlah Club bertanding
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase" color="#6527BE">
                    ME
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    Jumlah Club Menang
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase" color="#6527BE">
                    S
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    Jumlah Club Seri
                  </Text>
                </Box>
              </HStack>
              <HStack display="flex" justifyContent="space-between">
                <Box>
                  <Heading size="xs" textTransform="uppercase" color="#6527BE">
                    K
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    Jumlah Club Kalah
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase" color="#6527BE">
                    GM
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    Jumlah Goal yang dimenangkan
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase" color="#6527BE">
                    GK
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    Jumlah Gol Lawan
                  </Text>
                </Box>
              </HStack>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </Container>
  );
}
