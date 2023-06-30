'use client';
import CardLayout from '@/components/CardLayout';
import Form from '@/components/Form';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Match Tracker | Club',
  description: 'Football Club Data',
};

export default function Club() {
  const [clubName, setClubName] = useState('');
  const [clubCity, setClubCity] = useState('');
  const [clubs, setClubs] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch('/api/club', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        city: formData.get('city'),
        points: 0,
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
  }, [clubs]);

  return (
    <Container maxW="4xl" py={10}>
      <Form
        type="text"
        onsubmit={handleSubmit}
        value1={clubName}
        value2={clubCity}
        onchange1={(e) => setClubName(e.target.value)}
        onchange2={(e) => setClubCity(e.target.value)}
        btn_text="Add New Club"
        header="Input Data Club"
        formLabel1="Club Name"
        formLabel2="Club City"
        placeholder1="Club Name..."
        placeholder2="Club City..."
        id1="clubName"
        id2="clubCity"
        name1="name"
        name2="city"
        formHelperText1="Enter Club Name"
        formHelperText2="Enter Club City"
      />
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5} mt={10}>
        {clubs.map((club) => (
          <GridItem key={club.id}>
            <CardLayout club_name={club.name} club_city={club.city} club_point={club.points} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
