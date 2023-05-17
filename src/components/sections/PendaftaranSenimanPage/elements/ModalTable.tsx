import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Flex,
  Group,
  Modal,
  Pagination,
  Text,
} from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import * as React from 'react';

import dataExample from '@/constans/dataExample';

interface IModalTableProps {
  isOpen: boolean;
  onActionModal: () => void;
}

const ModalTable: React.FC<IModalTableProps> = ({ isOpen, onActionModal }) => {
  const [activePage, setPage] = React.useState(1);

  return (
    <Modal.Root opened={isOpen} onClose={onActionModal} size="80%" radius="lg">
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
              onClick={onActionModal}
            >
              Kembali
            </Button>
            <Flex justify="center" align="center" w="100%">
              <Modal.Title fw={700} fz={26}>
                Nama Dinas
              </Modal.Title>
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
                columns={[
                  {
                    title: (
                      <Group>
                        <Text fw={500} fz={12}>
                          NAMA SENIMAN
                        </Text>
                      </Group>
                    ),
                    accessor: 'name',
                  },
                  {
                    title: (
                      <Group>
                        <Text fw={500} fz={12}>
                          ALAMAT EMAIL
                        </Text>
                      </Group>
                    ),
                    accessor: 'streetAddress',
                  },
                ]}
                records={dataExample}
              />
            </Box>
            <Flex
              w="100%"
              justify="space-between"
              align="center"
              sx={{ position: 'relative' }}
              py="md"
            >
              <Box sx={{ position: 'absolute', left: 0 }}>
                <Text fw={400} fz={12} color="#969BA4">
                  {activePage}-{10} dari 20
                </Text>
              </Box>
              <Box w="100%">
                <Pagination.Root
                  total={10}
                  value={activePage}
                  onChange={setPage}
                  size="xs"
                  styles={{
                    control: {
                      fontSize: '12px',
                      fontWeight: 400,
                    },
                  }}
                >
                  <Group spacing={5} position="center" fw={400} fz={12}>
                    <Pagination.First />
                    <Pagination.Previous />
                    <Pagination.Items />
                    <Pagination.Next />
                    <Pagination.Last />
                  </Group>
                </Pagination.Root>
              </Box>
            </Flex>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalTable;
