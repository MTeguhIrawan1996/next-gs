import LandingPageLayout from '@/components/layouts/landingPage';
import BeritaPage from '@/components/sections/BeritaPage';

import { NextPageWithLayout } from '../_app';

const Berita: NextPageWithLayout = () => {
  return <BeritaPage />;
};

export default Berita;

Berita.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
