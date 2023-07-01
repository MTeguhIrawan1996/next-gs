import { ApolloError, useLazyQuery } from '@apollo/client';
import { Box, Flex, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';

import {
  GSMSBoxWrapper,
  InnerWrapper,
  KeyValuePairs,
  KeyValueSkeleton,
  NextImageFill,
} from '@/components/elements';

import {
  AchievingStudentRequest,
  AchievingStudentResponse,
  READ_ONE_ACHIEVING_STUNDENT,
} from '@/graphql/query/readOneAchievingStudent';
import landingPageStyle from '@/styles/LandingPage';

import { IFile } from '@/types/global';

const DetailSiswaBerprestasiBook = () => {
  const router = useRouter();
  const { classes } = landingPageStyle();
  const studentId = router.query.idSiswa as string;

  const [getStudent, { data, loading }] = useLazyQuery<
    AchievingStudentResponse,
    AchievingStudentRequest
  >(READ_ONE_ACHIEVING_STUNDENT, {
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const simpleData = data?.landingPageHighAchievingStudent;

  React.useEffect(() => {
    if (studentId) {
      const fetchData = async () => {
        await getStudent({
          variables: {
            id: studentId,
          },
        });
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  const achievmentDoc = React.useCallback((value: IFile, i: number) => {
    const { url, filename } = value;
    return (
      <Box
        w={110}
        h={110}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 8,
        }}
        key={i}
      >
        <NextImageFill src={url} alt={filename} />
      </Box>
    );
  }, []);

  const renderAchievmentDoc = simpleData?.achievementPhotos.map(achievmentDoc);

  if (loading) {
    return (
      <InnerWrapper>
        <GSMSBoxWrapper enableBack>
          <KeyValueSkeleton />
        </GSMSBoxWrapper>
      </InnerWrapper>
    );
  }

  return (
    <InnerWrapper>
      <Box mb={220}>
        <GSMSBoxWrapper enableBack>
          <Stack w="100%" spacing="md">
            <Text fw={600} fz={24}>
              {simpleData?.name}
            </Text>
            <Flex gap="md" className={classes.rowToColumn}>
              <Box className={classes.detailSiswaDinamisFlexPrimary}>
                {simpleData && (
                  <NextImageFill
                    src={simpleData.photo.url}
                    alt={simpleData.photo.filename}
                  />
                )}
              </Box>
              <Stack sx={{ flex: 9 }} spacing={6}>
                <KeyValuePairs
                  classNameKey={classes.keySectionPrimary}
                  classNameValue={classes.valueSectionPrimary}
                  data={[
                    {
                      key: 'NISN',
                      value: simpleData?.nisn,
                    },
                    {
                      key: 'Tahun Mengikuti GSMS',
                      value: simpleData?.activityYear,
                    },
                    {
                      key: ' Sekolah Saat Mengikuti GSMS',
                      value: simpleData?.gsmsSchool,
                    },
                    {
                      key: 'Sekolah Saat Ini',
                      value: simpleData?.school,
                    },
                    {
                      key: 'Prestasi',
                      value: simpleData?.achievement,
                    },
                  ]}
                />
                <Flex>
                  <Box className={classes.keySectionPrimary}>
                    <Text fz={12} fw={300} c="dark.4">
                      Foto Dokumentasi Prestasi
                    </Text>
                  </Box>
                  <Box className={classes.valueSectionPrimary}>
                    <Flex gap="sm" wrap="wrap">
                      {renderAchievmentDoc}
                    </Flex>
                  </Box>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </GSMSBoxWrapper>
      </Box>
    </InnerWrapper>
  );
};

export default DetailSiswaBerprestasiBook;
