'use client';
import CardLayout from '@/components/CardLayout';
import Form from '@/components/Form';
import FormMatch from '@/components/FromMatch';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Match Tracker | Score',
  description: 'Football Club Score',
};

export default function Score() {
  const [selectedHomeClub, setSelectedHomeClub] = useState('');
  const [selectedAwayClub, setSelectedAwayClub] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeClubId: selectedHomeClub,
        awayClubId: selectedAwayClub,
        homeScore: formData.get('homeScore'),
        awayScore: formData.get('awayScore'),
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    router.refresh();
  };

  return (
    <Container maxW="4xl" pt={10}>
      <FormMatch btn_text="Add New Match" header="Football Match" onsubmit={handleSubmit} value={selectedHomeClub} option={selectedHomeClub ? selectedHomeClub.name : 'Select Club'} />
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
