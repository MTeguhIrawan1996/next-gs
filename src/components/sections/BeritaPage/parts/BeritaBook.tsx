import { ApolloError, useQuery } from '@apollo/client';
import { Box, Flex, SelectProps, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import * as React from 'react';

import {
  CardImage,
  CardImageSkeleton,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  MultipleSelect,
  SearchBar,
} from '@/components/elements';

import {
  Articles,
  ArticlesRequest,
  ArticlesResponse,
  READ_ALL_ARTICLES,
} from '@/graphql/query/readAllArticles';
import {
  IProvincies,
  ProvincesResponse,
  READ_ALL_PROVINCIES,
} from '@/graphql/query/readAllProvincies';
import {
  IRegencies,
  READ_ALL_REGENCIES,
  RegenciesRequest,
  RegenciesResponse,
} from '@/graphql/query/readAllRegencies';

import { IFilterGlobalRequest } from '@/types/global';

const BeritaBook = () => {
  const [page, setPage] = React.useState<number>(1);
  const [searchTerm, setSerachTerm] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const [provincieFilterId, setProvincieFilterId] = React.useState<
    string | null
  >(null);
  const [provinciesSearchTerm, setProvinciesSearchTerm] =
    React.useState<string>('');
  const [provinciesQuery] = useDebouncedValue<string>(
    provinciesSearchTerm,
    400
  );
  const [regencieFilterId, setRegencieFilterId] = React.useState<string | null>(
    null
  );
  const [regenciesSearchTerm, setRegenciesSearchTerm] =
    React.useState<string>('');
  const [regenciesQuery] = useDebouncedValue<string>(regenciesSearchTerm, 400);

  const { data: provinciesData, loading: provinciesLoading } = useQuery<
    ProvincesResponse,
    IFilterGlobalRequest
  >(READ_ALL_PROVINCIES, {
    variables: {
      limit: 10,
      page: null,
      orderBy: 'name',
      orderDir: 'asc',
      search: provinciesQuery === '' ? null : provinciesQuery,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const { data: regenciesData, loading: regenciesLoading } = useQuery<
    RegenciesResponse,
    RegenciesRequest
  >(READ_ALL_REGENCIES, {
    variables: {
      limit: 10,
      page: null,
      orderBy: 'name',
      orderDir: 'asc',
      search: regenciesQuery === '' ? null : regenciesQuery,
      provinceId: provincieFilterId,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const { data: articlesData, loading: articlesLoading } = useQuery<
    ArticlesResponse,
    ArticlesRequest
  >(READ_ALL_ARTICLES, {
    variables: {
      limit: 9,
      page: page,
      orderBy: 'publishedAt',
      orderDir: 'desc',
      search: searchQuery,
      createdById: null,
      dinasId: null,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const renderProvincies = React.useCallback((value: IProvincies) => {
    return {
      label: value.name,
      value: value.id,
    };
  }, []);

  const renderRegencies = React.useCallback((value: IRegencies) => {
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
      />
    );
  }, []);

  const provenciesItem = provinciesData?.provinces.data.map(renderProvincies);
  const regenciesItem = regenciesData?.regencies.data.map(renderRegencies);
  const articlesItem =
    articlesData?.landingPageArticles.data.map(renderArticles);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        value: provincieFilterId,
        onChange: (value: string | null) => setProvincieFilterId(value),
        data: provenciesItem ?? [],
        label: 'Provinsi',
        placeholder: provinciesLoading
          ? 'Memuat...'
          : 'Ketik dan pilih Provinsi',
        searchable: true,
        clearable: true,
        nothingFound: null,
        onSearchChange: setProvinciesSearchTerm,
        searchValue: provinciesSearchTerm,
      },
      {
        value: regencieFilterId,
        onChange: (value: string | null) => setRegencieFilterId(value),
        data: regenciesItem ?? [],
        label: 'Kabupaten/Kota',
        placeholder: regenciesLoading
          ? 'Memuat...'
          : 'Ketik dan pilih Kabupaten/Kota',
        searchable: true,
        clearable: true,
        nothingFound: null,
        onSearchChange: setRegenciesSearchTerm,
        searchValue: regenciesSearchTerm,
      },
    ];
    return item;
  }, [
    provincieFilterId,
    provenciesItem,
    provinciesLoading,
    provinciesSearchTerm,
    regencieFilterId,
    regenciesItem,
    regenciesLoading,
    regenciesSearchTerm,
  ]);

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
          <Box w={{ base: '100%', md: '60%' }}>
            <MultipleSelect MultipleSelectProps={filter} />
          </Box>
          <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
            {articlesLoading ? <CardImageSkeleton /> : articlesItem}
          </Flex>
          <GlobalPagination
            setPage={setPage}
            currentPage={page}
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
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default BeritaBook;
