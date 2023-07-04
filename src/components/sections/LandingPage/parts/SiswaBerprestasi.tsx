import { ApolloError, useQuery } from '@apollo/client';
import * as React from 'react';

import {
  GlobalDefaultTable,
  LandingPageSectionWrapper,
} from '@/components/elements';

import {
  AchievingStundetsRequest,
  AchievingStundetsResponse,
  READ_ALL_ACHIEVING_STUDENTS,
} from '@/graphql/query/readAllAchievingStudents';

const SiswaBerprestasi = () => {
  const { data, loading } = useQuery<
    AchievingStundetsResponse,
    AchievingStundetsRequest
  >(READ_ALL_ACHIEVING_STUDENTS, {
    variables: {
      page: 1,
      limit: 10,
      orderBy: 'activityYear',
      orderDir: 'desc',
      search: null,
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
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.landingPageHighAchievingStudents.data]);

  return (
    <LandingPageSectionWrapper
      title="Siswa Berprestasi"
      href="/siswa-berprestasi"
    >
      {renderSiswaTable}
    </LandingPageSectionWrapper>
  );
};

export default SiswaBerprestasi;
