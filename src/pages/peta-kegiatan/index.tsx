import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { EmptyState } from '@/components/elements';
import LandingPageLayout from '@/components/layouts/landingPage';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { NextPageWithLayout } from '../_app';

const PetaKegiatan: NextPageWithLayout = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <>
      <EmptyState />
    </>
  );
};

export default PetaKegiatan;

PetaKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
