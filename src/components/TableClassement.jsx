import { Flex, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const TableClassement = () => {
  const [clubs, setClubs] = useState([]);

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
  }, []);
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
          {clubs.map((club, index) => (
            <Tr key={index} fontWeight="semibold">
              <Td>{index + 1}</Td>
              <Td>{club.name}</Td>
              <Td isNumeric>1</Td>
              <Td isNumeric>1</Td>
              <Td isNumeric>1</Td>
              <Td isNumeric>1</Td>
              <Td isNumeric>1</Td>
              <Td isNumeric>1</Td>
              <Td isNumeric>1</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableClassement;
