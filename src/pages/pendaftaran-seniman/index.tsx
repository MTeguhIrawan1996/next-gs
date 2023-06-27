import { PendaftaranSenimanPage } from '@/components';
import PendaftaranSenimanLayout from '@/components/layouts/pendaftaranSenimanLayout';

import { NextPageWithLayout } from '../_app';

const PendaftaranSeniman: NextPageWithLayout = () => {
  return <PendaftaranSenimanPage />;
};

export default PendaftaranSeniman;

PendaftaranSeniman.getLayout = function getLayout(page: React.ReactElement) {
  return <PendaftaranSenimanLayout>{page}</PendaftaranSenimanLayout>;
};
