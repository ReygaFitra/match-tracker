'use client';
import CardLayout from '@/components/CardLayout';
import FormMatch from '@/components/FromMatch';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Match Tracker | Score',
  description: 'Football Club Score',
};

export default function Score() {
  const [clubs, setClubs] = useState([]);
  const [matches, setMatches] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch('/api/club');
      const json = await res.json();
      setClubs(json.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getDataMatch = async () => {
    try {
      const res = await fetch('/api/score');
      const json = await res.json();
      setMatches(json.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
    getDataMatch();
  }, [clubs, matches]);

  return (
    <Container maxW="4xl" pt={10}>
      <FormMatch btn_text="Add New Match" header="Football Match" />
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={9} mt={10}>
        {matches.map((match) => (
          <GridItem key={match.id}>
            <Box display="flex" bgColor="blackAlpha.900" alignItems="center" p="20px" rounded="sm" gap={2}>
              <CardLayout club_name={clubs.find((club) => club.id === match.homeClubId)?.name} club_point={match.homeScore} />
              <Heading as="h4" size="sm" color="white">
                VS
              </Heading>
              <CardLayout club_name={clubs.find((club) => club.id === match.awayClubId)?.name} club_point={match.awayScore} />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
