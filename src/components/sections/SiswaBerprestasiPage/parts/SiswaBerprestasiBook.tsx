import { ApolloError, useQuery } from '@apollo/client';
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

import {
  AchievingStundetsRequest,
  AchievingStundetsResponse,
  READ_ALL_ACHIEVING_STUDENTS,
} from '@/graphql/query/readAllAchievingStudents';

const SiswaBerprestasiBook = () => {
  const router = useRouter();
  const [page, setPage] = React.useState<number>(1);
  const [searchTerm, setSerachTerm] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);

  const { data, loading } = useQuery<
    AchievingStundetsResponse,
    AchievingStundetsRequest
  >(READ_ALL_ACHIEVING_STUDENTS, {
    variables: {
      page: page,
      limit: 5,
      orderBy: 'activityYear',
      orderDir: 'desc',
      search: searchQuery,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const renderSiswaTable = React.useMemo(() => {
    return (
      <GlobalDefaultTable
        tableProps={{
          fetching: loading,
          columns: [
            { accessor: 'name', title: 'Nama Siswa' },
            { accessor: 'activityYear', title: 'Tahun Mengikuti GSMS' },
            { accessor: 'achievement', title: 'Prestasi' },
          ],
          records: data?.landingPageHighAchievingStudents.data,
          onRowClick: ({ id }) => {
            router.push(`/siswa-berprestasi/${id}`);
          },
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.landingPageHighAchievingStudents.data, loading]);

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
          <GlobalPagination
            setPage={setPage}
            currentPage={page}
            totalAllData={
              data?.landingPageHighAchievingStudents.meta.totalAllData as number
            }
            totalData={
              data?.landingPageHighAchievingStudents.meta.totalData as number
            }
            totalPage={
              data?.landingPageHighAchievingStudents.meta.totalPage as number
            }
          />
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default SiswaBerprestasiBook;
