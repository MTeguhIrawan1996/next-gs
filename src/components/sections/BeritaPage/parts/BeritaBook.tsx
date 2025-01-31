import { Box, Flex, SelectProps, Stack } from '@mantine/core';
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
  IDinases,
  useReadAllActiveDinases,
} from '@/graphql/query/readAllActiveDinases';
import { Articles, useReadAllArticles } from '@/graphql/query/readAllArticles';

const BeritaBook = () => {
  const [page, setPage] = React.useState<number>(1);
  const [searchTerm, setSerachTerm] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const [dinasesFilterId, setDinasesFilterId] = React.useState<string | null>(
    null
  );
  const [dinasesSearchTerm, setDinasesSearchTerm] = React.useState<string>('');
  const [dinasesQuery] = useDebouncedValue<string>(dinasesSearchTerm, 400);
  const [limit, setLimit] = React.useState<number>(9);

  const { dinasesData, dinasesLoading } = useReadAllActiveDinases({
    activityId: `${process.env.NEXT_PUBLIC_ACTIVITY_ID}`,
    limit: 10,
    page: null,
    orderBy: 'name',
    orderDir: 'asc',
    search: dinasesQuery === '' ? null : dinasesQuery,
    level: null,
  });
  const { articlesData, articlesLoading } = useReadAllArticles({
    limit: limit,
    page: page,
    orderBy: 'publishedAt',
    orderDir: 'desc',
    search: searchQuery,
    createdById: null,
    dinasId: dinasesFilterId,
  });

  const renderDinases = React.useCallback((value: IDinases) => {
    return {
      label: value.name,
      value: value.id,
    };
  }, []);
  const renderArticles = React.useCallback((value: Articles, index: number) => {
    const { title, publishedAt, featureImage, slug } = value;
    return (
      <CardImage
        enableDate
        key={index}
        label={title}
        labelDate={publishedAt}
        imageProps={featureImage}
        href={`/berita/${slug}`}
        enableActivityYear={false}
      />
    );
  }, []);

  const dinasesItem = dinasesData?.activity.dinases.data.map(renderDinases);
  const articlesItem =
    articlesData?.landingPageArticles.data.map(renderArticles);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        value: dinasesFilterId,
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
    ];
    return item;
  }, [dinasesFilterId, dinasesItem, dinasesLoading, dinasesSearchTerm]);

  return (
    <InnerWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          <SearchBar
            placeholder="Pencarian"
            onChange={(event) => {
              setSerachTerm(event.currentTarget.value);
            }}
            onSearch={() => {
              setPage(1);
              setSearchQuery(searchTerm === '' ? null : searchTerm);
            }}
          />
          <Box w={{ base: '100%', md: '30%' }}>
            <MultipleSelect MultipleSelectProps={filter} />
          </Box>
          <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
            {articlesLoading ? <CardImageSkeleton /> : articlesItem}
          </Flex>
          {!articlesItem?.length && !articlesLoading ? (
            <EmptyTableState />
          ) : (
            <GlobalPagination
              isFetching={articlesLoading}
              setPage={setPage}
              currentPage={page}
              currentLimit={limit}
              setLimit={setLimit}
              totalAllData={
                articlesData?.landingPageArticles.meta.totalAllData as number
              }
              totalData={
                articlesData?.landingPageArticles.meta.totalData as number
              }
              totalPage={
                articlesData?.landingPageArticles.meta.totalPage as number
              }
            />
          )}
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default BeritaBook;
