import { ApolloError, useQuery } from '@apollo/client';
import { Flex, SelectProps, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import * as React from 'react';

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
  DinasesRequest,
  DinasesResponse,
  IDinases,
  READ_ALL_ACTIVE_DINASES,
} from '@/graphql/query/readAllActiveDinases';
import {
  GalleryRequest,
  GalleryResponse,
  IGallery,
  READ_ALL_GALLERY_LANDINGPAGE,
} from '@/graphql/query/readAllGalleryLandingPage';
import {
  ISchools,
  READ_ALL_SCHOOLS,
  SchoolsRequest,
  SchoolsResponse,
} from '@/graphql/query/readAllSchools';

const GalleryBook = () => {
  const [page, setPage] = React.useState<number>(1);
  const [searchTerm, setSerachTerm] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const [dinasesFilterId, setDinasesFilterId] = React.useState<string | null>(
    null
  );
  const [dinasesSearchTerm, setDinasesSearchTerm] = React.useState<string>('');
  const [dinasesQuery] = useDebouncedValue<string>(dinasesSearchTerm, 400);
  const [schoolsFilterId, setSchoolsFilterId] = React.useState<string | null>(
    null
  );
  ``;
  const [schoolsSearchTerm, setSchoolsSearchTerm] = React.useState<string>('');
  const [schoolsQuery] = useDebouncedValue<string>(schoolsSearchTerm, 400);
  const [typeId, setTypeId] = React.useState<string | null>(null);

  const { data: galleryData, loading: galleryLoading } = useQuery<
    GalleryResponse,
    GalleryRequest
  >(READ_ALL_GALLERY_LANDINGPAGE, {
    variables: {
      limit: 9,
      page: page,
      orderBy: 'checkedAt',
      orderDir: 'desc',
      search: searchQuery,
      dinasId: dinasesFilterId,
      schoolId: schoolsFilterId,
      type: typeId,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });
  const { data: dinasesData, loading: dinasesLoading } = useQuery<
    DinasesResponse,
    DinasesRequest
  >(READ_ALL_ACTIVE_DINASES, {
    variables: {
      activityId: `${process.env.NEXT_PUBLIC_ACTIVITY_ID}`,
      limit: 10,
      page: null,
      orderBy: 'name',
      orderDir: 'asc',
      search: dinasesQuery === '' ? null : dinasesQuery,
      level: null,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });
  const { data: schoolsData, loading: schoolsLoading } = useQuery<
    SchoolsResponse,
    SchoolsRequest
  >(READ_ALL_SCHOOLS, {
    variables: {
      limit: 10,
      page: null,
      orderBy: 'name',
      orderDir: 'asc',
      search: schoolsQuery === '' ? null : schoolsQuery,
      provinceId: null,
      regencyId: null,
      stageId: null,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const renderSchools = React.useCallback((value: ISchools) => {
    return {
      label: value.name,
      value: value.id,
    };
  }, []);
  const renderDinases = React.useCallback((value: IDinases) => {
    return {
      label: value.name,
      value: value.id,
    };
  }, []);
  const renderGallery = React.useCallback((value: IGallery, index: number) => {
    const { activityReport, id } = value;
    const label =
      activityReport.activityPlan.artistReport.form.recommendation.school.name;
    return (
      <CardImage
        key={index}
        label={label}
        // imageProps={featureImage}
        href={`/berita/${id}`}
      />
    );
  }, []);

  const schoolsItem = schoolsData?.landingPageSchools.data.map(renderSchools);
  const dinasesItem = dinasesData?.activity.dinases.data.map(renderDinases);
  const galleryItem =
    galleryData?.landingPageActivityReportAttachments.data.map(renderGallery);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        onChange: (value: string | null) => {
          setPage(1);
          setDinasesFilterId(value);
        },
        data: dinasesItem ?? [],
        label: 'Dinas',
        placeholder: dinasesLoading ? 'Memuat...' : 'Ketik dan pilih Dinas',
        searchable: true,
        clearable: true,
        nothingFound: null,
        onSearchChange: setDinasesSearchTerm,
        searchValue: dinasesSearchTerm,
      },
      {
        onChange: (value: string | null) => {
          setPage(1);
          setSchoolsFilterId(value);
        },
        data: schoolsItem ?? [],
        label: 'Sekolah',
        placeholder: schoolsLoading ? 'Memuat...' : 'Ketik dan pilih Sekolah',
        searchable: true,
        clearable: true,
        nothingFound: null,
        onSearchChange: setSchoolsSearchTerm,
        searchValue: schoolsSearchTerm,
      },
      {
        value: typeId,
        onChange: (value: string) => setTypeId(value),
        data: [
          {
            label: 'Foto',
            value: 'photo',
          },
          {
            label: 'Video',
            value: 'video',
          },
        ],
        label: 'Jenis',
        clearable: true,
        placeholder: 'Pilih jenis galeri',
      },
    ];
    return item;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dinasesItem, dinasesLoading, schoolsItem, schoolsLoading, typeId]);

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
          <MultipleSelect MultipleSelectProps={filter} />

          <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
            {galleryLoading ? <CardImageSkeleton /> : galleryItem}
          </Flex>
          {galleryItem?.length ? (
            <GlobalPagination
              setPage={setPage}
              currentPage={
                galleryData?.landingPageActivityReportAttachments.meta
                  .currentPage as number
              }
              totalAllData={
                galleryData?.landingPageActivityReportAttachments.meta
                  .totalAllData as number
              }
              totalData={
                galleryData?.landingPageActivityReportAttachments.meta
                  .totalData as number
              }
              totalPage={
                galleryData?.landingPageActivityReportAttachments.meta
                  .totalPage as number
              }
            />
          ) : (
            <EmptyTableState />
          )}
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default GalleryBook;
