'use client';
import CardLayout from '@/components/CardLayout';
import Form from '@/components/Form';
import { Container, Grid, GridItem } from '@chakra-ui/react';

export const metadata = {
  title: 'Match Tracker | Club',
  description: 'Football Club Data',
};

export default function Club() {
  return (
    <Container maxW="4xl" pt={10}>
      <Form />
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5} mt={10}>
        <GridItem>
          <CardLayout />
        </GridItem>
        <GridItem>
          <CardLayout />
        </GridItem>
        <GridItem>
          <CardLayout />
        </GridItem>
        <GridItem>
          <CardLayout />
        </GridItem>
        <GridItem>
          <CardLayout />
        </GridItem>
      </Grid>
    </Container>
  );
}
