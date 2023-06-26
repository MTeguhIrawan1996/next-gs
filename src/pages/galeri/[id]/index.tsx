import * as React from 'react';

import { DetailGalleryPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '@/pages/_app';

const DetailGallery: NextPageWithLayout = () => {
  return <DetailGalleryPage />;
};

export default DetailGallery;

DetailGallery.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
