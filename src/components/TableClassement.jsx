import { Flex, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

const TableClassement = () => {
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
          <Tr fontWeight="semibold">
            <Td>1</Td>
            <Td>Club1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
          </Tr>
          <Tr fontWeight="semibold">
            <Td>1</Td>
            <Td>Club1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
          </Tr>
          <Tr fontWeight="semibold">
            <Td>1</Td>
            <Td>Club1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>1</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableClassement;
