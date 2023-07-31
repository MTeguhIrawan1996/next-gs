import { SelectProps, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  GlobalDefaultTable,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  MultipleSelect,
  SearchBar,
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
import { useActivityYearStore } from '@/utils/store/zustand/counterYear';

const DataKegiatanBook = () => {
  const [page, setPage] = React.useState<number>(1);
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
          setActivityYear(!value ? `${filterYearItem?.[0].value}` : value);
        },
        data: filterYearItem ?? [],
        label: 'Tahun Kegiatan',
        placeholder: filterYearLoading ? 'Memuat...' : 'Pilih Tahun',
        clearable: false,
      },
      {
        onChange: (value: string | null) => {
          // setPage(1);
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
          // setPage(1);
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
          // fetching: AchievingLoading,
          columns: [
            { accessor: 'name', title: 'Nama Sekolah' },
            { accessor: 'activityYear', title: 'Provinsi' },
            { accessor: 'achievement1', title: 'Kabupaten' },
            { accessor: 'achievement2', title: 'Nama Seniman' },
            { accessor: 'achievement3', title: 'Tahun Kegiatan' },
          ],
          records: [],
          // onRowClick: ({ id }) => {
          //   router.push(`/siswa-berprestasi/${id}`);
          // },
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InnerWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          <SearchBar
            placeholder="Pencarian nama sekolah atau seniman"
            // onChange={(event) => {
            //   setSerachTerm(event.currentTarget.value);
            // }}
            // onSearch={() => {
            //   setPage(1);
            //   setSearchQuery(searchTerm === '' ? null : searchTerm);
            // }}
          />
          <MultipleSelect MultipleSelectProps={filter} />
          {renderDataKegiatan}
          <GlobalPagination
            // isFetching={AchievingLoading}
            setPage={setPage}
            currentPage={page}
            totalAllData={1}
            totalData={1}
            totalPage={1}
          />
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default DataKegiatanBook;
