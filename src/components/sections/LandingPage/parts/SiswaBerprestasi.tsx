import * as React from 'react';

import {
  GlobalDefaultTable,
  LandingPageSectionWrapper,
} from '@/components/elements';

import { useReadAllAchievingStudents } from '@/graphql/query/readAllAchievingStudents';

const SiswaBerprestasi = () => {
  const { AchievingData, AchievingLoading } = useReadAllAchievingStudents({
    page: 1,
    limit: 10,
    orderBy: 'activityYear',
    orderDir: 'desc',
    search: null,
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
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AchievingData?.landingPageHighAchievingStudents.data]);

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
