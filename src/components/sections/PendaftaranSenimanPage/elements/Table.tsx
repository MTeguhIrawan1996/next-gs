import { Box, Button, Group, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

import dataExample from '@/constans/dataExample';

interface ITableProps {
  onActionModal: () => void;
}

const Table: React.FC<ITableProps> = ({ onActionModal }) => {
  return (
    <Box w="100%" sx={{ zIndex: 1 }}>
      <DataTable
        shadow="lg"
        fontSize={12}
        highlightOnHover
        horizontalSpacing="xl"
        verticalSpacing="md"
        verticalAlignment="center"
        borderColor="#4C6EF5"
        minHeight={150}
        columns={[
          {
            title: (
              <Group>
                <Text fw={500} fz={12}>
                  NAMA DINAS
                </Text>
              </Group>
            ),
            accessor: 'name',
          },
          {
            title: (
              <Group>
                <Text fw={500} fz={12}>
                  JUMLAH SENIMAN YANG MENGAJUKAN
                </Text>
              </Group>
            ),
            accessor: 'streetAddress',
          },
          {
            accessor: 'actions',
            title: '',
            textAlignment: 'right',
            render: () => (
              <Group spacing={4} position="right" noWrap>
                <Button
                  size="xs"
                  radius="md"
                  fz={10}
                  fw={400}
                  compact
                  onClick={onActionModal}
                >
                  Lihat Daftar Seniman
                </Button>
              </Group>
            ),
          },
        ]}
        records={dataExample}
      />
    </Box>
  );
};

export default Table;
