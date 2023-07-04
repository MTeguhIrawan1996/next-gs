import { Box, Divider, Flex, Stack, Text } from '@mantine/core';
import * as React from 'react';

import {
  GlobalDefaultTable,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  KeyValuePairs,
} from '@/components/elements';

import landingPageStyle from '@/styles/LandingPage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDetailPetaKegiatanBookProps {}

const exmapleData = [
  {
    id: '1',
    kegiatan: 'lorem',
    materi: 'lorem',
    kehadiran: 'lorem',
  },
  {
    id: '2',
    kegiatan: 'lorem',
    materi: 'lorem',
    kehadiran: 'lorem',
  },
  {
    id: '3',
    kegiatan: 'lorem',
    materi: 'lorem',
    kehadiran: 'lorem',
  },
];

const DetailPetaKegiatanBook: React.FC<IDetailPetaKegiatanBookProps> = () => {
  const { classes } = landingPageStyle();
  const [page, setPage] = React.useState<number>(1);

  return (
    <InnerWrapper>
      <GSMSBoxWrapper enableBack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={600} fz={24}>
            Nama Sekolah
          </Text>
          <Flex gap="sm">
            <Box w="100%" sx={{ flex: 6 }}>
              <KeyValuePairs
                classNameKey={classes.keySectionDetailMaps}
                classNameValue={classes.valueSectionDetailMaps}
                data={[
                  {
                    key: 'Jenjang',
                    value: '-',
                  },
                  {
                    key: 'Dinas',
                    value: '-',
                  },
                  {
                    key: 'Provinsi',
                    value: '-',
                  },
                  {
                    key: 'Kabupaten/Kota',
                    value: '-',
                  },
                  {
                    key: 'Alamat',
                    value: '-',
                  },
                ]}
              />
            </Box>
            <Stack sx={{ flex: 6 }} spacing="xs" align="center">
              <Text fw={400} fz={10}>
                Klik peta untuk lihat lebih detail
              </Text>
              <Box h={240} bg="gray.5" w="100%"></Box>
            </Stack>
          </Flex>
          <Divider my={5} color="blue.1" opacity={1} />
        </Stack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={600} fz={24}>
            Detail Seniman
          </Text>
          <Flex gap="sm">
            <Box w="100%" sx={{ flex: 6 }}>
              <KeyValuePairs
                classNameKey={classes.keySectionDetailMaps}
                classNameValue={classes.valueSectionDetailMaps}
                data={[
                  {
                    key: 'Nama Seniman',
                    value: '-',
                  },
                  {
                    key: 'Keahlian Bidang Seni',
                    value: '-',
                  },
                  {
                    key: 'Provinsi',
                    value: '-',
                  },
                  {
                    key: 'Kabupaten/Kota',
                    value: '-',
                  },
                  {
                    key: 'Nama Asisten',
                    value: '-',
                  },
                ]}
              />
            </Box>
            <Box sx={{ flex: 6 }}>
              <Box
                h={200}
                bg="gray.5"
                w={200}
                sx={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              ></Box>
            </Box>
          </Flex>
          <Divider my={5} color="blue.1" opacity={1} />
        </Stack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={600} fz={24}>
            Pelaporan Kegiatan
          </Text>
          <GlobalDefaultTable
            tableProps={{
              // fetching: loading,
              columns: [
                { accessor: 'kegiatan', title: 'Pertemuan' },
                { accessor: 'materi', title: 'Materi' },
                { accessor: 'kehadiran', title: 'Kehadiran Siswa' },
              ],
              records: exmapleData,
            }}
          />
          <GlobalPagination
            // isFetching={loading}
            setPage={setPage}
            currentPage={page}
            totalAllData={1}
            totalData={1}
            totalPage={1}
          />
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default DetailPetaKegiatanBook;
