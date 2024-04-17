import { Flex, SelectProps, Stack, Title } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  GlobalDefaultTable,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  MultipleSelect,
  SearchBar,
  TitleContent,
} from '@/components/elements';

import { useReadAllFilterYear } from '@/graphql/query/readAllFilterYear';
import {
  IProvincies,
  useReadAllProvincies,
} from '@/graphql/query/readAllProvincies';
import {
  IRegencies,
  useReadAllRegencies,
} from '@/graphql/query/readAllRegencies';
import { useReadAllActivitesData } from '@/utils/rest-api/ActivityData/useReadAllActivitiesData';
import { useActivityYearStore } from '@/utils/store/zustand/counterYear';

import StatistikBook from './StatistikBook';

import { RestErrorResponse } from '@/types/global';

const DataKegiatanBook = () => {
  const router = useRouter();
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
  const [regenciesFilterId, setRegenciesFilterId] = React.useState<
    string | null
  >(null);
  const [regenciesSearchTerm, setRegenciesSearchTerm] =
    React.useState<string>('');
  const [regenciesQuery] = useDebouncedValue<string>(regenciesSearchTerm, 400);
  const [activityYearId, setActivityYear] = useActivityYearStore(
    (state) => [state.activityDataYearId, state.setActivityDataYear],
    shallow
  );
  const [limit, setLimit] = React.useState<number>(10);
  const { filterYearData, filterYearLoading } = useReadAllFilterYear();
  const { provinciesData, provinciesLoading } = useReadAllProvincies({
    limit: 10,
    page: null,
    orderBy: 'name',
    orderDir: 'asc',
    search: provinciesQuery === '' ? null : provinciesQuery,
  });
  const { regenciesData, regenciesLoading } = useReadAllRegencies({
    limit: 10,
    page: null,
    orderBy: 'name',
    orderDir: 'asc',
    search: regenciesQuery === '' ? null : regenciesQuery,
    provinceId: provincieFilterId,
  });
  const { data: activityData, isLoading: activityDataLoading } =
    useReadAllActivitesData({
      variable: {
        limit: limit,
        page: page,
        year: activityYearId,
        orderBy: 'provinceName',
        provinceId: provincieFilterId,
        regencyId: regenciesFilterId,
        search: searchQuery,
      },
      onError: (err: RestErrorResponse) => {
        notifications.show({
          color: 'red',
          title: 'Terjadi kesalahan',
          message: err.error,
        });
      },
    });

  const renderFilterYear = React.useCallback((value: number) => {
    return {
      label: value.toString(),
      value: value.toString(),
    };
  }, []);
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

  const filterYearItem = filterYearData?.activityYears
    .slice()
    .sort((a, b) => b - a)
    .map(renderFilterYear);
  const provinciesItem = provinciesData?.provinces.data.map(renderProvincies);
  const regenciesItem = regenciesData?.regencies.data.map(renderRegencies);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        defaultValue: activityYearId,
        onChange: (value: string | null) => {
          setPage(1);
          setActivityYear(!value ? `${filterYearItem?.[0].value}` : value);
        },
        data: filterYearItem ?? [],
        label: 'Tahun Kegiatan',
        placeholder: filterYearLoading ? 'Memuat...' : 'Pilih Tahun',
        clearable: false,
      },
      {
        onChange: (value: string | null) => {
          setPage(1);
          setProvincieFilterId(value);
          setRegenciesFilterId(null);
        },
        data: provinciesItem ?? [],
        label: 'Provinsi',
        placeholder: provinciesLoading
          ? 'Memuat...'
          : 'Ketik dan cari Provinsi',
        searchable: true,
        clearable: true,
        nothingFound: null,
        onSearchChange: setProvinciesSearchTerm,
        searchValue: provinciesSearchTerm,
      },
      {
        value: regenciesFilterId,
        onChange: (value: string | null) => {
          setPage(1);
          setRegenciesFilterId(value);
        },
        data: regenciesItem ?? [],
        label: 'Kabupaten',
        placeholder: regenciesLoading
          ? 'Memuat...'
          : 'Ketik dan cari Kabupaten',
        searchable: true,
        clearable: true,
        nothingFound: null,
        onSearchChange: setRegenciesSearchTerm,
        searchValue: regenciesSearchTerm,
      },
    ];
    return item;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activityYearId,
    filterYearItem,
    filterYearLoading,
    provinciesItem,
    provinciesLoading,
    regenciesFilterId,
    regenciesItem,
    regenciesLoading,
    setActivityYear,
  ]);

  const renderDataKegiatan = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          fetching: activityDataLoading,
          columns: [
            {
              accessor: 'name',
              title: 'Nama Sekolah',
              render: ({ school }) => school.name,
            },
            {
              accessor: 'provincies',
              title: 'Provinsi',
              render: ({ school }) => school.provinceName,
            },
            {
              accessor: 'regencies',
              title: 'Kabupaten',
              render: ({ school }) => school.regencyName,
            },
            {
              accessor: 'artistName',
              title: 'Nama Seniman',
              render: ({ artist }) => artist.name,
            },
            {
              accessor: 'year',
              title: 'Tahun Kegiatan',
              render: ({ activity }) => activity.year,
            },
          ],
          records: activityData?.data,
          onRowClick: ({ id }) => {
            router.push({
              pathname: `/data-kegiatan/${id}`,
              query: { year: activityYearId },
            });
          },
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityData?.data, activityDataLoading]);

  return (
    <InnerWrapper>
      <Flex direction="column" gap="lg">
        <TitleContent label="Statistik" />
        <MultipleSelect MultipleSelectProps={filter} />
        <Title order={4} fw={900} align="center">
          Grafik Jumlah Seniman dengan Bidang Seni yang Dipilih
        </Title>
        <StatistikBook />
        <TitleContent label="Data Kegiatan" />
        <GSMSBoxWrapper>
          <Stack w="100%" spacing="lg">
            <SearchBar
              placeholder="Pencarian nama sekolah atau seniman"
              onChange={(event) => {
                setSerachTerm(event.currentTarget.value);
              }}
              onSearch={() => {
                setPage(1);
                setSearchQuery(searchTerm === '' ? null : searchTerm);
              }}
            />
            {renderDataKegiatan}
            {activityData?.data.length ? (
              <GlobalPagination
                isFetching={activityDataLoading}
                setPage={setPage}
                currentPage={page}
                totalAllData={activityData?.meta.totalAllData ?? 0}
                totalData={activityData?.meta.totalData ?? 0}
                totalPage={activityData?.meta.totalPage ?? 0}
                currentLimit={limit}
                setLimit={setLimit}
              />
            ) : null}
          </Stack>
        </GSMSBoxWrapper>
      </Flex>
    </InnerWrapper>
  );
};

export default DataKegiatanBook;
