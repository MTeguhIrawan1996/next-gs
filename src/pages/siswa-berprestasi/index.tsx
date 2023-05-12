import Head from 'next/head';

import { EmptyState } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const SiswaBerprestasi: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Siswa Berprestasi</title>
      </Head>
      <EmptyState />
    </>
  );
};

export default SiswaBerprestasi;

SiswaBerprestasi.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
