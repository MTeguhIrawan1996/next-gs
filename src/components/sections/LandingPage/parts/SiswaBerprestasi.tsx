import { Flex } from '@mantine/core';
import * as React from 'react';

import {
  CardImage,
  CardImageSkeleton,
  EmptyTableState,
  LandingPageSectionWrapper,
} from '@/components/elements';

import {
  IGallery,
  useReadAllGalleryLandingPage,
} from '@/graphql/query/readAllGalleryLandingPage';

import { IFile } from '@/types/global';
import {
  AchievingStudents,
  useReadAllAchievingStudents,
} from '@/graphql/query/readAllAchievingStudents';

const SiswaBerprestasi = () => {
  const { AchievingData, AchievingLoading } = useReadAllAchievingStudents({
    page: 1,
    limit: 3,
    orderBy: 'activityYear',
    orderDir: 'desc',
    search: null,
  });

  const renderAchievement = React.useCallback(
    (value: AchievingStudents, index: number) => {
      const { name, id, photo, achievement, activityYear } = value;

      return (
        <CardImage
          key={index}
          label={name}
          imageProps={photo as IFile}
          href={`/siswa-berprestasi/${id}`}
          activityYear={activityYear}
          description={achievement}
        />
      );
    },
    []
  );

  const achievementItem =
    AchievingData?.landingPageHighAchievingStudents.data.map(renderAchievement);

  return (
    <LandingPageSectionWrapper
      title="Siswa Berprestasi"
      href="/siswa-berprestasi"
    >
      <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
        {!achievementItem?.length && !AchievingLoading ? (
          <EmptyTableState />
        ) : (
          achievementItem
        )}
        {AchievingLoading ? <CardImageSkeleton /> : null}
      </Flex>
    </LandingPageSectionWrapper>
  );
};

export default SiswaBerprestasi;
