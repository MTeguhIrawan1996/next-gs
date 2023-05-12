import Head from 'next/head';

import { EmptyState } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const Galeri: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Galeri</title>
      </Head>
      <EmptyState />
    </>
  );
};

export default Galeri;

Galeri.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
