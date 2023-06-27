import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { RootWrapper, VectorOne, VectorTwo } from '@/components/elements';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { DetailSiswaBerprestasiBook } from './parts';

const DetailSiswaBerprestasiPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Siswa Berprestasi', path: '/siswa-berprestasi' },
      { label: 'Detail Siswa Berprestasi', path: router.asPath },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <RootWrapper>
      <VectorOne />
      <DetailSiswaBerprestasiBook />
      <VectorTwo />
    </RootWrapper>
  );
};

export default DetailSiswaBerprestasiPage;
