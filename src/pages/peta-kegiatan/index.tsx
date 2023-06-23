import { EmptyState } from '@/components/elements';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const PetaKegiatan: NextPageWithLayout = () => {
  return (
    <>
      <EmptyState />
    </>
  );
};

export default PetaKegiatan;

PetaKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
