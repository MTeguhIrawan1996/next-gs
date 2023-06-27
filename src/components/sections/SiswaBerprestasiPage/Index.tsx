import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  RootWrapper,
  TitleContent,
  VectorOne,
  VectorTwo,
} from '@/components/elements';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { SiswaBerprestasiBook } from './parts';

const SiswaBerprestasiPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Siswa Berprestasi', path: '/siswa-berprestasi' },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <RootWrapper>
      <TitleContent label="Siswa Berprestasi" />
      <VectorOne />
      <SiswaBerprestasiBook />
      <VectorTwo />
    </RootWrapper>
  );
};

export default SiswaBerprestasiPage;
