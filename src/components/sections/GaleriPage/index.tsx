import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  RootWrapper,
  TitleContent,
  VectorOne,
  VectorThree,
  VectorTwo,
} from '@/components/elements';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { GalleryBook } from './parts';

const GalleryPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Galeri', path: '/galeri' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <RootWrapper>
      <VectorOne />
      <TitleContent label="Galeri" />
      <VectorTwo />
      <GalleryBook />
      <VectorThree />
    </RootWrapper>
  );
};

export default GalleryPage;
