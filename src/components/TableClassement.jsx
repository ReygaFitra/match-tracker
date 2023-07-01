import { Flex, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const TableClassement = () => {
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

  const getTotalMatches = (clubId) => {
    const homeMatches = matches.filter((match) => match.homeClubId === clubId);
    const awayMatches = matches.filter((match) => match.awayClubId === clubId);
    return homeMatches.length + awayMatches.length;
  };

  const getWinMatches = (clubId) => {
    const homeMatches = matches.filter((match) => match.homeClubId === clubId);
    const awayMatches = matches.filter((match) => match.awayClubId === clubId);
    const winHomeMatches = homeMatches.filter((match) => match.homeScore > match.awayScore);
    const winAwayMatches = awayMatches.filter((match) => match.awayScore > match.homeScore);
    return winHomeMatches.length + winAwayMatches.length;
  };

  const getLoseMatches = (clubId) => {
    const homeMatches = matches.filter((match) => match.homeClubId === clubId);
    const awayMatches = matches.filter((match) => match.awayClubId === clubId);
    const winHomeMatches = homeMatches.filter((match) => match.homeScore < match.awayScore);
    const winAwayMatches = awayMatches.filter((match) => match.awayScore < match.homeScore);
    return winHomeMatches.length + winAwayMatches.length;
  };

  const getDrawMatches = (clubId) => {
    const homeMatches = matches.filter((match) => match.homeClubId === clubId);
    const awayMatches = matches.filter((match) => match.awayClubId === clubId);
    const winHomeMatches = homeMatches.filter((match) => match.homeScore === match.awayScore);
    const winAwayMatches = awayMatches.filter((match) => match.awayScore === match.homeScore);
    return winHomeMatches.length + winAwayMatches.length;
  };

  const getTotalGoalsKicked = (clubId) => {
    return matches.reduce((total, match) => {
      if (match.homeClubId === clubId) {
        return total + match.awayScore;
      } else if (match.awayClubId === clubId) {
        return total + match.homeScore;
      }
      return total;
    }, 0);
  };

  useEffect(() => {
    getData();
    getDataMatch();
  }, [clubs, matches]);

  return (
    <TableContainer shadow="md" rounded="sm" overflow="scroll" w="full">
      <Table variant="striped">
        <TableCaption>Footbal Classement Data Table</TableCaption>
        <Thead>
          <Tr bgColor="#6527BE">
            <Th color="white" isNumeric>
              No
            </Th>
            <Th color="white">Club</Th>
            <Th color="white" isNumeric>
              MA
            </Th>
            <Th color="white" isNumeric>
              ME
            </Th>
            <Th color="white" isNumeric>
              S
            </Th>
            <Th color="white" isNumeric>
              K
            </Th>
            <Th color="white" isNumeric>
              GM
            </Th>
            <Th color="white" isNumeric>
              GK
            </Th>
            <Th color="white" isNumeric>
              Point
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {clubs.map((club, index) => {
            const homeMatches = matches.filter((match) => match.homeClubId === club.id);
            const totalMatches = getTotalMatches(club.id);
            const winMatches = getWinMatches(club.id);
            const loseMatches = getLoseMatches(club.id);
            const drawMatches = getDrawMatches(club.id);
            const goalsMade = homeMatches.reduce((total, match) => total + match.homeScore, 0);
            const goalsKicked = getTotalGoalsKicked(club.id);

            return (
              <Tr key={index} fontWeight="semibold">
                <Td>{index + 1}</Td>
                <Td>{club.name}</Td>
                <Td isNumeric>{totalMatches}</Td>
                <Td isNumeric>{winMatches}</Td>
                <Td isNumeric>{drawMatches}</Td>
                <Td isNumeric>{loseMatches}</Td>
                <Td isNumeric>{goalsMade}</Td>
                <Td isNumeric>{goalsKicked}</Td>
                <Td isNumeric>{club.points}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableClassement;
