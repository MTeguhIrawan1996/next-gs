import { EmptyState } from '@/components/elements';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const SiswaBerprestasi: NextPageWithLayout = () => {
  return (
    <>
      <EmptyState />
    </>
  );
};

export default SiswaBerprestasi;

SiswaBerprestasi.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
