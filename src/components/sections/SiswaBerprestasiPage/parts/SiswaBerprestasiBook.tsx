import { Flex, SelectProps, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import * as React from 'react';
import {
  IActivityData,
  useReadAllActivity,
} from '@/graphql/query/readAllActivity';
import {
  CardImage,
  CardImageSkeleton,
  EmptyTableState,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  MultipleSelect,
  SearchBar,
} from '@/components/elements';

import {
  IDinases,
  useReadAllActiveDinases,
} from '@/graphql/query/readAllActiveDinases';
import {
  IGallery,
  useReadAllGalleryLandingPage,
} from '@/graphql/query/readAllGalleryLandingPage';
import { ISchools, useReadAllSchools } from '@/graphql/query/readAllSchools';
import {
  AchievingStudents,
  AchievingStundets,
  useReadAllAchievingStudents,
} from '@/graphql/query/readAllAchievingStudents';

import { IFile } from '@/types/global';

const SiswaBerprestasiBook = () => {
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(9);
  const [searchTerm, setSerachTerm] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);

  const { AchievingData, AchievingLoading } = useReadAllAchievingStudents({
    page: page,
    limit: limit,
    orderBy: 'activityYear',
    orderDir: 'desc',
    search: searchQuery,
  });

  const renderAchieving = React.useCallback(
    (value: AchievingStudents, index: number) => {
      const { achievement, id, photo, activityYear, name } = value;

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

  const achievingItem =
    AchievingData?.landingPageHighAchievingStudents.data.map(renderAchieving);

  return (
    <InnerWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          <SearchBar
            placeholder="Cari nama seniman"
            onChange={(event) => {
              setSerachTerm(event.currentTarget.value);
            }}
            onSearch={() => {
              setPage(1);
              setSearchQuery(searchTerm === '' ? null : searchTerm);
            }}
          />

          <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
            {AchievingLoading ? <CardImageSkeleton /> : achievingItem}
          </Flex>
          {!achievingItem?.length && !AchievingLoading ? (
            <EmptyTableState />
          ) : (
            <GlobalPagination
              currentLimit={limit}
              setLimit={setLimit}
              setPage={setPage}
              isFetching={AchievingLoading}
              currentPage={
                AchievingData?.landingPageHighAchievingStudents.meta
                  .currentPage as number
              }
              totalAllData={
                AchievingData?.landingPageHighAchievingStudents.meta
                  .totalAllData as number
              }
              totalData={
                AchievingData?.landingPageHighAchievingStudents.meta
                  .totalData as number
              }
              totalPage={
                AchievingData?.landingPageHighAchievingStudents.meta
                  .totalPage as number
              }
            />
          )}
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default SiswaBerprestasiBook;
