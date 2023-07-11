import { Icon } from '@iconify/react';
import { Box, Button, Divider, Flex, Group, Stack, Text } from '@mantine/core';
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

import { useReadOneActivityPlan } from '@/graphql/query/readOneActivityPlan';
import { useReadOneLandingPageActivityPlan } from '@/graphql/query/readOneLandingPageActivityPlan';
import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import landingPageStyle from '@/styles/LandingPage';

import ModalDetailPelaporanKegiatan from '../elements/Modal/ModalDetailPelaporanKegiatan';

interface IDetailPetaKegiatanBookProps {
  data: ArtistReportOneResponse;
}

const DetailPetaKegiatanBook: React.FC<IDetailPetaKegiatanBookProps> = ({
  data,
}) => {
  // const { commonIdentity, recommendation, dinas, goalExpectation } =
  //   data.landingPageArtistReport.form;
  const { school, artist } = data.data;
  const router = useRouter();
  const { classes } = landingPageStyle();
  const [page, setPage] = React.useState<number>(1);
  const [isModalDetail, setIsModalDetail] = React.useState<boolean>(false);
  // console.log(router.query.year);
  const id = router.query.id as string;

  const { activityPlanData, activityPlanloading } =
    useReadOneLandingPageActivityPlan({
      id: id,
      page: page,
      limit: 10,
      orderBy: 'order',
      orderDir: 'asc',
      search: null,
      isHaveReport: true,
    });

  const { getDetailActivityPlan, detailActivityPlanData } =
    useReadOneActivityPlan();

  const renderActivityReportTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          fetching: activityPlanloading,
          onRowClick: ({ id }) => {
            handleOpenModal(id);
          },
          columns: [
            {
              accessor: 'order',
              title: 'Pertemuan',
              render: ({ order }) => `Pertemuan ${order}`,
            },
            {
              accessor: 'report.material',
              title: 'Materi',
              render: ({ report }) => report?.material,
            },
            {
              accessor: 'kehadiran',
              title: 'Kehadiran Siswa',
              render: ({ report }) => (
                <Group spacing={6} align="center">
                  <Button
                    compact
                    fz={12}
                    size="xs"
                    color={
                      report?.studentAbsenceRecap.present /
                        report?.studentAbsenceRecap.studentCount >=
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
                    {report?.studentAbsenceRecap.present}
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
                    {report?.studentAbsenceRecap.studentCount}
                  </Button>
                </Group>
              ),
            },
          ],
          records: activityPlanData?.landingPageArtistReport.activityPlans.data,
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activityPlanData?.landingPageArtistReport.activityPlans.data,
    activityPlanloading,
  ]);

  const handleOpenModal = async (id: string) => {
    setIsModalDetail((prev) => !prev);
    await getDetailActivityPlan({
      variables: {
        id: id,
      },
    });
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
              <Text fw={400} fz={10}>
                Klik peta untuk lihat lebih detail
              </Text>
              <Link
                href={`https://www.google.com/maps/@${school?.latitude},${
                  school?.longitude
                },${17}z`}
                target="_blank"
                style={{ width: '100%' }}
              >
                <Box h={240} bg="gray.5" w="100%" pos="relative">
                  <SimpleMap
                    latitude={school?.latitude}
                    longitude={school?.longitude}
                  />
                </Box>
              </Link>
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
                  src={artist?.photo?.url ?? '/'}
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
          {activityPlanData?.landingPageArtistReport.activityPlans.data
            .length ? (
            <GlobalPagination
              isFetching={activityPlanloading}
              setPage={setPage}
              currentPage={page}
              totalAllData={
                activityPlanData?.landingPageArtistReport.activityPlans.meta
                  .totalAllData ?? 0
              }
              totalData={
                activityPlanData?.landingPageArtistReport.activityPlans.meta
                  .totalData ?? 0
              }
              totalPage={
                activityPlanData?.landingPageArtistReport.activityPlans.meta
                  .totalPage ?? 0
              }
            />
          ) : null}
        </Stack>
      </GSMSBoxWrapper>
      <ModalDetailPelaporanKegiatan
        isOpen={isModalDetail}
        onCloseModal={onCloseModal}
        data={detailActivityPlanData}
      />
    </InnerWrapper>
  );
};

export default DetailPetaKegiatanBook;
