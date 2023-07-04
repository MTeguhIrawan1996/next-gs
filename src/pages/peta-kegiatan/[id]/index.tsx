import LandingPageLayout from '@/components/layouts/landingPage';
import DetailPetaKegiatanPage from '@/components/sections/DetailPetaKegiatanPage';

import { NextPageWithLayout } from '@/pages/_app';

const DetailPetaKegiatan: NextPageWithLayout = () => {
  return <DetailPetaKegiatanPage />;
};

export default DetailPetaKegiatan;

DetailPetaKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
