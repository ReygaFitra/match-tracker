'use client';
import TableClassement from '@/components/TableClassement';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Match Tracker | Classement',
  description: 'Football Club Classement Data',
};

export default function Club() {
  return (
    <Container maxW="4xl" pt={10}>
      <TableClassement />
    </Container>
  );
}
