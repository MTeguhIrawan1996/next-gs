import { ApolloError, useLazyQuery, useQuery } from '@apollo/client';
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

import {
  DetailActivityPlanRequest,
  DetailActivityPlanResponse,
  READ_ONE_ACTIVITY_PLAN,
} from '@/graphql/query/readOneActivityPlan';
import {
  ActivityPlanReportRequest,
  ActivityPlanReportResponse,
  READ_ONE_LANDINGPAGE_ACTIVITY_PLAN,
} from '@/graphql/query/readOneLandingPageActivityPlan';
import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import landingPageStyle from '@/styles/LandingPage';

import ModalDetailPelaporanKegiatan from '../elements/Modal/ModalDetailPelaporanKegiatan';

interface IDetailPetaKegiatanBookProps {
  data: ArtistReportOneResponse;
}

const DetailPetaKegiatanBook: React.FC<IDetailPetaKegiatanBookProps> = ({
  data,
}) => {
  const { commonIdentity, recommendation, dinas, goalExpectation } =
    data.landingPageArtistReport.form;
  const router = useRouter();
  const { classes } = landingPageStyle();
  const [page, setPage] = React.useState<number>(1);
  const [isModalDetail, setIsModalDetail] = React.useState<boolean>(false);
  const id = router.query.id as string;

  const { data: activityPlanData, loading } = useQuery<
    ActivityPlanReportResponse,
    ActivityPlanReportRequest
  >(READ_ONE_LANDINGPAGE_ACTIVITY_PLAN, {
    variables: {
      id: id,
      page: page,
      limit: 10,
      orderBy: 'order',
      orderDir: 'asc',
      search: null,
      isHaveReport: true,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const [getDetailActivityPlan, { data: detailActivityPlanData }] =
    useLazyQuery<DetailActivityPlanResponse, DetailActivityPlanRequest>(
      READ_ONE_ACTIVITY_PLAN,
      {
        onError: (err: ApolloError) => {
          return err;
        },
        fetchPolicy: 'cache-first',
      }
    );

  const renderActivityReportTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          fetching: loading,
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
  }, [activityPlanData?.landingPageArtistReport.activityPlans.data, loading]);

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
            {recommendation.school.name}
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
                    value: recommendation.school.stage.abbr,
                  },
                  {
                    key: 'Dinas',
                    value: dinas.name,
                  },
                  {
                    key: 'Provinsi',
                    value: recommendation.school.province.name ?? '-',
                  },
                  {
                    key: 'Kabupaten/Kota',
                    value: recommendation.school.regency.name ?? '-',
                  },
                  {
                    key: 'Alamat',
                    value: recommendation.school.streetAddress,
                  },
                ]}
              />
            </Box>
            <Stack sx={{ flex: 6 }} spacing="xs" align="center">
              <Text fw={400} fz={10}>
                Klik peta untuk lihat lebih detail
              </Text>
              <Link
                href={`https://www.google.com/maps/@${
                  recommendation.school.latitude
                },${recommendation.school.longitude},${17}z`}
                target="_blank"
                style={{ width: '100%' }}
              >
                <Box h={240} bg="gray.5" w="100%" pos="relative">
                  <SimpleMap
                    latitude={recommendation.school.latitude}
                    longitude={recommendation.school.longitude}
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
                    value: commonIdentity.name,
                  },
                  {
                    key: 'Keahlian Bidang Seni',
                    value: goalExpectation.artExpertise,
                  },
                  {
                    key: 'Provinsi',
                    value: commonIdentity.province.name,
                  },
                  {
                    key: 'Kabupaten/Kota',
                    value: commonIdentity.regency.name,
                  },
                  {
                    key: 'Nama Asisten',
                    value: recommendation.assistant.name,
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
                  src={commonIdentity.photo.url ?? '/'}
                  alt={commonIdentity.photo.filename ?? 'not found'}
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
          <GlobalPagination
            isFetching={loading}
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
