'use client';
import CardLayout from '@/components/CardLayout';
import Form from '@/components/Form';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

export const metadata = {
  title: 'Match Tracker | Score',
  description: 'Football Club Score',
};

export default function Score() {
  return (
    <Container maxW="4xl" pt={10}>
      <Form />
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={9} mt={10}>
        <GridItem>
          <Box display="flex" alignItems="center" gap={1} bgColor="#9681EB" p="20px" rounded="sm">
            <CardLayout />
            <Heading as="h4" size="sm" color="white">
              VS
            </Heading>
            <CardLayout />
          </Box>
        </GridItem>

        <GridItem>
          <Box display="flex" alignItems="center" gap={1} bgColor="#9681EB" p="20px" rounded="sm">
            <CardLayout />
            <Heading as="h4" size="sm" color="white">
              VS
            </Heading>
            <CardLayout />
          </Box>
        </GridItem>

        <GridItem>
          <Box display="flex" alignItems="center" gap={1} bgColor="#9681EB" p="20px" rounded="sm">
            <CardLayout />
            <Heading as="h4" size="sm" color="white">
              VS
            </Heading>
            <CardLayout />
          </Box>
        </GridItem>

        <GridItem>
          <Box display="flex" alignItems="center" gap={1} bgColor="#9681EB" p="20px" rounded="sm">
            <CardLayout />
            <Heading as="h4" size="sm" color="white">
              VS
            </Heading>
            <CardLayout />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
