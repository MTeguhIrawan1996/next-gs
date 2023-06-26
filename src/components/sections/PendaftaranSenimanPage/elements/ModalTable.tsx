import { LazyQueryExecFunction } from '@apollo/client';
import { Icon } from '@iconify/react';
import { Box, Button, Flex, Group, Modal, Text } from '@mantine/core';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { DataTable } from 'mantine-datatable';
import * as React from 'react';
import 'dayjs/locale/id';

import { GlobalPagination } from '@/components/elements';

import { GetRecapSenimanRes, RecapSenimanVariable } from '@/types/rekapSeniman';

dayjs.locale('id');
dayjs.extend(localizedFormat);

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
            <Box w="100%">
              <DataTable
                shadow="lg"
                fontSize={12}
                highlightOnHover
                horizontalSpacing="sm"
                verticalSpacing="sm"
                verticalAlignment="center"
                borderColor="#4C6EF5"
                minHeight={150}
                fetching={loading}
                columns={[
                  {
                    title: (
                      <Group>
                        <Text fw={500} fz={12}>
                          NAMA SENIMAN
                        </Text>
                      </Group>
                    ),
                    accessor: 'commonIdentity.name',
                  },
                  {
                    title: (
                      <Group>
                        <Text fw={500} fz={12}>
                          ALAMAT EMAIL
                        </Text>
                      </Group>
                    ),
                    accessor: 'commonIdentity.email',
                  },
                  {
                    title: (
                      <Group>
                        <Text fw={500} fz={12}>
                          TANGGAL PENGAJUAN
                        </Text>
                      </Group>
                    ),
                    accessor: 'submittedAt',
                    render: ({ submittedAt }) =>
                      `${dayjs(submittedAt).locale('id').format('LLLL')} WIB`,
                  },
                ]}
                records={record}
              />
            </Box>
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
