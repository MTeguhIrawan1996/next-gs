import Head from 'next/head';

import { EmptyState } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const Berita: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Berita</title>
      </Head>
      <EmptyState />
    </>
  );
};

export default Berita;

Berita.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
