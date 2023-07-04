import { DetailSiswaBerprestasiPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '@/pages/_app';

const DetailSiswaBerprestasi: NextPageWithLayout = () => {
  return <DetailSiswaBerprestasiPage />;
};

export default DetailSiswaBerprestasi;

DetailSiswaBerprestasi.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
