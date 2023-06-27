import { GalleryPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const Galeri: NextPageWithLayout = () => {
  return <GalleryPage />;
};

export default Galeri;

Galeri.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
