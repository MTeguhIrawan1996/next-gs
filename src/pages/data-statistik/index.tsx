import { DataKegiatanPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from '../_app';

const DataKegiatan: NextPageWithLayout = () => {
  return <DataKegiatanPage />;
};

export default DataKegiatan;

DataKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
