import { Badge, Box, Flex, Paper, Stack, Text } from '@mantine/core';
import * as React from 'react';

import {
  GDriveThumbnail,
  GSMSBoxWrapper,
  InnerWrapper,
  KeyValuePairs,
  NextImageFill,
  YoutubeThumbnail,
} from '@/components/elements';

import { GalleryOneResponse } from '@/graphql/query/readOneGalleryLandingPage';
import { dateFromat } from '@/utils/helper/dateFormat';
import { googleDriveUrlRegex, youtubeUrlRegex } from '@/utils/helper/regex';
import { Icon } from '@iconify/react';

interface ISchoolInformationProps {
  data: GalleryOneResponse;
}

const SchoolInformation: React.FC<ISchoolInformationProps> = ({ data }) => {
  const { activityPlan, material, activityDate } =
    data.landingPageActivityReportAttachment.activityReport;
  const { photo, videoLink } = data.landingPageActivityReportAttachment;

  return (
    <InnerWrapper>
      <Stack spacing="md">
        <GSMSBoxWrapper enableBack>
          <Stack w="100%" spacing="md">
            <Flex direction="row" align="center" gap="sm">
              <Text fw={600} fz={24}>
                {activityPlan.artistReport.form.recommendation.school.name}
              </Text>{' '}
              <Badge variant="filled" size="md">
                <Flex direction="row" gap="xs" align="center">
                  <Icon icon="uil:calendar-alt" />
                  {new Date(
                    data.landingPageActivityReportAttachment.activityReport.activityDate
                  ).getFullYear()}
                </Flex>
              </Badge>
            </Flex>
            <Box w="95%" mx="auto">
              <KeyValuePairs
                data={[
                  {
                    key: 'Seniman',
                    value:
                      activityPlan.artistReport.form.commonIdentity?.name ??
                      '-',
                  },
                  {
                    key: 'Asisten',
                    value:
                      activityPlan.artistReport.form.recommendation.assistant
                        ?.name ?? '-',
                  },
                  {
                    key: ' Dinas',
                    value: activityPlan.artistReport.form.dinas?.name ?? '-',
                  },
                  {
                    key: 'Materi Kegiatan',
                    value: material,
                  },
                  {
                    key: 'Waktu Kegiatan',
                    value: dateFromat(activityDate, 'dddd, LL'),
                  },
                ]}
              />
            </Box>
          </Stack>
        </GSMSBoxWrapper>
        <Paper bg="gray.1" radius="lg" sx={{ overflow: 'hidden' }}>
          <Box
            w={{ base: '100%', sm: '60%' }}
            h="420px"
            mx="auto"
            pos="relative"
          >
            {photo ? (
              <NextImageFill src={photo.url} alt={photo.filename} />
            ) : videoLink && youtubeUrlRegex.test(videoLink) ? (
              <YoutubeThumbnail link={videoLink} />
            ) : videoLink && googleDriveUrlRegex.test(videoLink) ? (
              <GDriveThumbnail link={videoLink} />
            ) : null}
          </Box>
        </Paper>
      </Stack>
    </InnerWrapper>
  );
};

export default SchoolInformation;
