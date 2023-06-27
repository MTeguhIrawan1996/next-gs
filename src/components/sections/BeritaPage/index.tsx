import { useRouter } from 'next/router';
import React from 'react';
import { shallow } from 'zustand/shallow';

import {
  RootWrapper,
  TitleContent,
  VectorOne,
  VectorTwo,
} from '@/components/elements';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { BeritaBook } from './parts';

const BeritaPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Berita', path: '/berita' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <RootWrapper>
      <VectorOne />
      <TitleContent label="Berita" />
      <VectorTwo />
      <BeritaBook />
    </RootWrapper>
  );
};

export default BeritaPage;
