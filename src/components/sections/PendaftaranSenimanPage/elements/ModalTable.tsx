import { LazyQueryExecFunction } from '@apollo/client';
import { Icon } from '@iconify/react';
import { Box, Button, Flex, Modal, Text } from '@mantine/core';
import * as React from 'react';
import 'dayjs/locale/id';

import { GlobalDefaultTable, GlobalPagination } from '@/components/elements';

import { dateFromat } from '@/utils/helper/dateFormat';

import { GetRecapSenimanRes, RecapSenimanVariable } from '@/types/rekapSeniman';

interface IModalTableProps {
  data?: GetRecapSenimanRes;
  loading: boolean;
  isOpen: boolean;
  onCloseModal: () => void;
  getRecapSeniman: LazyQueryExecFunction<
    GetRecapSenimanRes,
    RecapSenimanVariable
  >;
}

const ModalTable: React.FC<IModalTableProps> = ({
  isOpen,
  onCloseModal,
  data,
  loading,
  getRecapSeniman,
}) => {
  const [activePage, setPage] = React.useState(1);
  const value = data?.landingPageDinas;
  const record = value?.activityForms.data;
  const meta = value?.activityForms.meta;

  React.useEffect(() => {
    if (data) {
      const refetch = async () => {
        await getRecapSeniman({
          variables: {
            id: data.landingPageDinas.id,
            findAllDinasActivityFormsInput: {
              page: activePage,
              limit: 10,
              search: null,
              orderBy: 'createdAt',
              orderDir: 'desc',
              activityId: `${process.env.NEXT_PUBLIC_ACTIVITY_ID}`,
            },
          },
        });
      };
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const onSetPage = (key: number) => {
    setPage(key);
  };

  const renderDataTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          columns: [
            {
              title: 'Nama Seniman',
              accessor: 'commonIdentity.name',
              render: ({ commonIdentity }) => commonIdentity.name,
            },
            {
              title: 'Alamat Email',
              accessor: 'commonIdentity.email',
              render: ({ commonIdentity }) => commonIdentity.email,
            },
            {
              title: 'Tanggal Pengajuan',
              accessor: 'submittedAt',
              render: ({ submittedAt }) => dateFromat(submittedAt, 'LLLL WIB'),
            },
          ],
          records: record,
          fetching: loading,
        }}
      />
    );
  }, [record, loading]);

  return (
    <Modal.Root opened={isOpen} onClose={onCloseModal} size="80%" radius="lg">
      <Modal.Overlay />
      <Modal.Content px="sm">
        <Modal.Header>
          <Flex
            direction="column"
            justify="center"
            align="flex-start"
            w="100%"
            gap="xl"
            mb="lg"
          >
            <Button
              leftIcon={
                <Icon icon="tabler:chevron-left" style={{ fontSize: '12px' }} />
              }
              variant="subtle"
              size="xs"
              color="dark"
              compact
              fz={12}
              fw={400}
              onClick={onCloseModal}
            >
              Kembali
            </Button>
            <Flex justify="center" align="center" w="100%">
              <Text
                color="dark.4"
                fw={700}
                fz={24}
                sx={{ textAlign: 'center' }}
              >
                {value?.name}
              </Text>
            </Flex>
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <Flex direction="column" justify="center" align="center" gap="xl">
            {renderDataTable}
            <Box w="100%">
              <GlobalPagination
                currentPage={meta?.currentPage ?? 0}
                setPage={onSetPage}
                totalAllData={meta?.totalAllData ?? 0}
                totalData={meta?.totalData ?? 0}
                totalPage={meta?.totalPage ?? 0}
              />
            </Box>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalTable;
