import { SiswaBerprestasiPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const SiswaBerprestasi: NextPageWithLayout = () => {
  return <SiswaBerprestasiPage />;
};

export default SiswaBerprestasi;

SiswaBerprestasi.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
