import { Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';

import {
  GlobalDefaultTable,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  SearchBar,
} from '@/components/elements';

import { useReadAllAchievingStudents } from '@/graphql/query/readAllAchievingStudents';

const SiswaBerprestasiBook = () => {
  const router = useRouter();
  const [page, setPage] = React.useState<number>(1);
  const [searchTerm, setSerachTerm] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);

  const { AchievingData, AchievingLoading } = useReadAllAchievingStudents({
    page: page,
    limit: 5,
    orderBy: 'activityYear',
    orderDir: 'desc',
    search: searchQuery,
  });

  const renderSiswaTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          fetching: AchievingLoading,
          columns: [
            { accessor: 'name', title: 'Nama Siswa' },
            { accessor: 'activityYear', title: 'Tahun Mengikuti GSMS' },
            { accessor: 'achievement', title: 'Prestasi' },
          ],
          records: AchievingData?.landingPageHighAchievingStudents.data,
          onRowClick: ({ id }) => {
            router.push(`/siswa-berprestasi/${id}`);
          },
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AchievingData?.landingPageHighAchievingStudents.data, AchievingLoading]);

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
          {renderSiswaTable}
          {AchievingData?.landingPageHighAchievingStudents.data.length ? (
            <GlobalPagination
              isFetching={AchievingLoading}
              setPage={setPage}
              currentPage={page}
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
          ) : null}
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default SiswaBerprestasiBook;
