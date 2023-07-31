import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  RootWrapper,
  VectorOne,
  VectorThree,
  VectorTwo,
} from '@/components/elements';

import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { DetailPetaKegiatanBook } from './parts';

interface BreadcrumbObj {
  label: string;
  path: string;
}

interface IDetailPetaKegiatanPageProps {
  data: ArtistReportOneResponse;
  breadcrumbData: BreadcrumbObj[];
}

const DetailPetaKegiatanPage: React.FC<IDetailPetaKegiatanPageProps> = ({
  data,
  breadcrumbData,
}) => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs(breadcrumbData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <RootWrapper>
      <DetailPetaKegiatanBook data={data} />
      <VectorOne />
      <VectorTwo />
      <VectorThree />
    </RootWrapper>
  );
};

export default DetailPetaKegiatanPage;
