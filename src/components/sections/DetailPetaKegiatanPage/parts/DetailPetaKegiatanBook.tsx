import { Icon } from '@iconify/react';
import { Box, Button, Divider, Flex, Group, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';

import {
  GlobalDefaultTable,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  KeyValuePairs,
  NextImageFill,
  SimpleMap,
} from '@/components/elements';

import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import landingPageStyle from '@/styles/LandingPage';
import { useReadOneRestActivityPlan } from '@/utils/rest-api/ActivityPlan/useReadOneRestActivityPlan';
import { useReadOneRestDetailActivityPlan } from '@/utils/rest-api/ActivityPlan/useReadOneRestDetailActivityPlan';

import ModalDetailPelaporanKegiatan from '../elements/Modal/ModalDetailPelaporanKegiatan';

import { AxiosRestErrorResponse } from '@/types/global';

interface IDetailPetaKegiatanBookProps {
  data: ArtistReportOneResponse;
}

const DetailPetaKegiatanBook: React.FC<IDetailPetaKegiatanBookProps> = ({
  data,
}) => {
  const { school, artist } = data.data;
  const router = useRouter();
  const { classes } = landingPageStyle();
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(10);
  const [isModalDetail, setIsModalDetail] = React.useState<boolean>(false);
  const [idRow, setIdRow] = React.useState<string>('');
  const [order, setOrder] = React.useState<number>(0);
  const activityYear = router.query.year as string;
  const idActivityPlan = router.query.id as string;

  const { data: dataActivityPlan, isLoading: loadingActivityPlan } =
    useReadOneRestActivityPlan({
      variable: {
        id: idActivityPlan,
        limit: String(limit),
        page: page.toString(),
        year: activityYear.toString(),
      },
      onError: (err: AxiosRestErrorResponse) => {
        notifications.show({
          color: 'red',
          title: 'Terjadi kesalahan',
          message: <>{err.response?.data.message}</>,
        });
      },
    });

  const { data: dataDetailActivityPlan } = useReadOneRestDetailActivityPlan({
    variable: {
      idActivityPlan,
      year: activityYear,
      idRow,
    },
  });

  const renderActivityReportTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          fetching: loadingActivityPlan,
          onRowClick: ({ id, order }) => {
            handleOpenModal(id, order);
          },
          columns: [
            {
              accessor: 'order',
              title: 'Pertemuan',
              render: ({ order }) => `Pertemuan ${order}`,
            },
            {
              accessor: 'material',
              title: 'Materi',
              render: ({ material }) => material,
            },
            {
              accessor: 'kehadiran',
              title: 'Kehadiran Siswa',
              render: ({ studentAbsenceRecap }) => (
                <Group spacing={6} align="center">
                  <Button
                    compact
                    fz={12}
                    size="xs"
                    color={
                      studentAbsenceRecap.present /
                        studentAbsenceRecap.studentCount >=
                      0.5
                        ? 'blue'
                        : 'red'
                    }
                    leftIcon={<Icon icon="tabler:user-check" fontSize={14} />}
                    styles={() => ({
                      root: {
                        border: 0,
                        paddingLeft: 8,
                        paddingRight: 8,
                      },
                      leftIcon: {
                        marginRight: 8,
                      },
                    })}
                  >
                    {studentAbsenceRecap.present}
                  </Button>
                  <Button
                    compact
                    size="xs"
                    variant="light"
                    color="gray.9"
                    bg="gray.3"
                    leftIcon={<Icon icon="tabler:user" fontSize={14} />}
                    styles={() => ({
                      root: {
                        border: 0,
                        paddingLeft: 8,
                        paddingRight: 8,
                      },
                      leftIcon: {
                        marginRight: 8,
                      },
                    })}
                  >
                    {studentAbsenceRecap.studentCount}
                  </Button>
                </Group>
              ),
            },
          ],
          records: dataActivityPlan?.data,
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataActivityPlan?.data, loadingActivityPlan]);

  const handleOpenModal = async (id: string, order: number) => {
    setIsModalDetail((prev) => !prev);
    setIdRow(id);
    setOrder(order);
  };

  const onCloseModal = () => {
    setIsModalDetail((prev) => !prev);
  };

  return (
    <InnerWrapper>
      <GSMSBoxWrapper enableBack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={600} fz={24}>
            {school?.name}
          </Text>
          <Flex gap="sm" className={classes.rowToColumn}>
            <Box w="100%" sx={{ flex: 6 }}>
              <KeyValuePairs
                verticalSpacing={8}
                classNameKey={classes.keySectionDetailMaps}
                classNameValue={classes.valueSectionDetailMaps}
                data={[
                  {
                    key: 'Jenjang',
                    value: school?.stageAbbr ?? '-',
                  },
                  {
                    key: 'Dinas',
                    value: school?.dinasName ?? '-',
                  },
                  {
                    key: 'Provinsi',
                    value: school?.provinceName ?? '-',
                  },
                  {
                    key: 'Kabupaten/Kota',
                    value: school?.regencyName ?? '-',
                  },
                  {
                    key: 'Alamat',
                    value: school?.streetAddress ?? '-',
                  },
                ]}
              />
            </Box>
            <Stack sx={{ flex: 6 }} spacing="xs" align="center">
              <Link
                href={`https://www.google.com/maps/@${school?.latitude},${
                  school?.longitude
                },${17}z`}
                target="_blank"
                style={{ width: '100%' }}
              >
                <Text
                  fw={400}
                  fz={10}
                  sx={(theme) => ({ '&:hover': { color: theme.colors.brand } })}
                  align="center"
                >
                  Klik link ini untuk lihat lebih detail
                </Text>
              </Link>
              <Box h={240} bg="gray.5" w="100%" pos="relative">
                <SimpleMap
                  latitude={school?.latitude}
                  longitude={school?.longitude}
                />
              </Box>
            </Stack>
          </Flex>
          <Divider my={5} color="blue.1" opacity={1} />
        </Stack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={600} fz={24}>
            Detail Seniman
          </Text>
          <Flex gap="sm" className={classes.rowToColumn}>
            <Box w="100%" sx={{ flex: 6 }}>
              <KeyValuePairs
                verticalSpacing={8}
                classNameKey={classes.keySectionDetailMaps}
                classNameValue={classes.valueSectionDetailMaps}
                data={[
                  {
                    key: 'Nama Seniman',
                    value: artist?.name ?? '-',
                  },
                  {
                    key: 'Keahlian Bidang Seni',
                    value: artist?.artExpertise ?? '-',
                  },
                  {
                    key: 'Provinsi',
                    value: artist?.provinceName ?? '-',
                  },
                  {
                    key: 'Kabupaten/Kota',
                    value: artist?.regencyName ?? '-',
                  },
                  {
                    key: 'Nama Asisten',
                    value: artist?.assistantName ?? '-',
                  },
                ]}
              />
            </Box>
            <Box sx={{ flex: 6 }}>
              <Box
                h={200}
                w={200}
                sx={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <NextImageFill
                  src={artist?.photo?.url ?? '/assets/emptyimg.webp'}
                  alt={artist?.photo?.filename ?? 'not found'}
                />
              </Box>
            </Box>
          </Flex>
          <Divider my={5} color="blue.1" opacity={1} />
        </Stack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={600} fz={24}>
            Pelaporan Kegiatan
          </Text>
          {renderActivityReportTable}
          {dataActivityPlan?.data?.length ? (
            <GlobalPagination
              isFetching={loadingActivityPlan}
              setPage={setPage}
              currentLimit={limit}
              setLimit={setLimit}
              currentPage={dataActivityPlan.meta.currentPage ?? page}
              totalAllData={dataActivityPlan.meta.totalAllData ?? 0}
              totalData={dataActivityPlan.meta.totalData ?? 0}
              totalPage={dataActivityPlan.meta.totalPage ?? 0}
            />
          ) : null}
        </Stack>
      </GSMSBoxWrapper>
      <ModalDetailPelaporanKegiatan
        isOpen={isModalDetail}
        onCloseModal={onCloseModal}
        data={dataDetailActivityPlan}
        order={order}
      />
    </InnerWrapper>
  );
};

export default DetailPetaKegiatanBook;
