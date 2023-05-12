import Head from 'next/head';

import { EmptyState } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const PetaKegiatan: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Peta Kegiatan</title>
      </Head>
      <EmptyState />
    </>
  );
};

export default PetaKegiatan;

PetaKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
