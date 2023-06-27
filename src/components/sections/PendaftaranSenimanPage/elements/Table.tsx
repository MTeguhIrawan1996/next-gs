import { ApolloError, useQuery } from '@apollo/client';
import { Box, Button, Group } from '@mantine/core';
import * as React from 'react';

import { GlobalDefaultTable } from '@/components/elements';

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

  const renderDataTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          columns: [
            {
              title: 'Nama Seniman',
              accessor: 'dinas.name',
              render: ({ dinas }) => dinas.name,
            },
            {
              title: 'Jumlah Seniman Yang Mengajukan',
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
          ],
          records: record,
          fetching: loading,
          idAccessor: 'dinas.id',
        }}
      />
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record]);

  return (
    <Box w="100%" sx={{ zIndex: 1, backgroundColor: '#FFFFFF' }}>
      {renderDataTable}
    </Box>
  );
};

export default Table;
