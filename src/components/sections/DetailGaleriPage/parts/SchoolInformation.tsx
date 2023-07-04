import { Box, Paper, Stack, Text } from '@mantine/core';
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
import { googleDriveUrlRegex, youtubeUrlRegex } from '@/utils/helper/regex';

interface ISchoolInformationProps {
  data: GalleryOneResponse;
}

const SchoolInformation: React.FC<ISchoolInformationProps> = ({ data }) => {
  const { activityPlan, material } =
    data.landingPageActivityReportAttachment.activityReport;
  const { photo, videoLink } = data.landingPageActivityReportAttachment;

  return (
    <InnerWrapper>
      <Stack spacing="md">
        <GSMSBoxWrapper enableBack>
          <Stack w="100%" spacing="md">
            <Text fw={600} fz={24}>
              {activityPlan.artistReport.form.recommendation.school.name}
            </Text>
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
                    key: 'Materi',
                    value: material,
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
