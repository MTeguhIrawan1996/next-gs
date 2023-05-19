import { ApolloError, useQuery } from '@apollo/client';
import { Box, Button, Group, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

import { GET_RECAPS_SUBMISSIONS } from '@/graphql/query/rekapSeniman';

import {
  GetRecapsSenimanRes,
  RecapsSenimanVariable,
} from '@/types/rekapSeniman';

interface ITableProps {
  onOpenModal: (id: string) => void;
}

const Table: React.FC<ITableProps> = ({ onOpenModal }) => {
  const { data, loading } = useQuery<
    GetRecapsSenimanRes,
    RecapsSenimanVariable
  >(GET_RECAPS_SUBMISSIONS, {
    variables: {
      findAllInput: {
        page: null,
        limit: null,
        search: null,
        orderBy: null,
        orderDir: null,
        activityId: `${process.env.NEXT_PUBLIC_ACTIVITY_ID}`,
      },
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-and-network',
  });

  const record = data?.landingPageSubmissionFormRecaps.data;

  return (
    <Box w="100%" sx={{ zIndex: 1, backgroundColor: '#FFFFFF' }}>
      <DataTable
        shadow="lg"
        fontSize={12}
        horizontalSpacing="xl"
        verticalSpacing="md"
        verticalAlignment="center"
        borderColor="#4C6EF5"
        minHeight={250}
        fetching={loading}
        columns={[
          {
            title: (
              <Text fw={500} fz={12}>
                NAMA DINAS
              </Text>
            ),
            accessor: 'dinas.name',
          },
          {
            title: (
              <Text fw={500} fz={12}>
                JUMLAH SENIMAN YANG MENGAJUKAN
              </Text>
            ),
            accessor: 'artistCount',
          },
          {
            accessor: 'actions',
            title: '',
            textAlignment: 'right',
            render: (val) => (
              <Group spacing={4} position="right" noWrap>
                <Button
                  size="xs"
                  radius="md"
                  fz={10}
                  fw={400}
                  compact
                  onClick={() => onOpenModal(val.dinas.id)}
                >
                  Lihat Daftar Seniman
                </Button>
              </Group>
            ),
          },
        ]}
        records={record}
        idAccessor="dinas.id"
      />
    </Box>
  );
};

export default Table;
