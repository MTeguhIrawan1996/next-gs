import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  RootWrapper,
  VectorOne,
  VectorThree,
  VectorTwo,
} from '@/components/elements';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { DetailPetaKegiatanBook } from './parts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDetailPetaKegiatanPageProps {}

const DetailPetaKegiatanPage: React.FC<IDetailPetaKegiatanPageProps> = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Peta Kegiatan', path: '/peta-kegiatan' },
      { label: 'Detail Peta Kegiatan', path: router.asPath },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <RootWrapper>
      <DetailPetaKegiatanBook />
      <VectorOne />
      <VectorTwo />
      <VectorThree />
    </RootWrapper>
  );
};

export default DetailPetaKegiatanPage;
