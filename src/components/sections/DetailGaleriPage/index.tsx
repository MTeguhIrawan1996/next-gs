import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { RootWrapper, VectorOne, VectorTwo } from '@/components/elements';

import { GalleryOneResponse } from '@/graphql/query/readOneGalleryLandingPage';
import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { SchoolInformation } from './parts';

const DetailGalleryPage: React.FC<{ data: GalleryOneResponse }> = ({
  data,
}) => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Galeri', path: '/galeri' },
      { label: 'Detail Galeri', path: router.asPath },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <RootWrapper>
      <SchoolInformation data={data} />
      <VectorOne />
      <VectorTwo />
    </RootWrapper>
  );
};

export default DetailGalleryPage;
