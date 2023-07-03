import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { RootWrapper, VectorOne, VectorTwo } from '@/components/elements';

import { ArticleResponse } from '@/graphql/query/readOneArticle';
import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { DetailBeritaBook } from './parts';

interface IProps {
  data: ArticleResponse;
}

const DetailBeritaPage: React.FC<IProps> = ({ data }) => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Berita', path: '/berita' },
      { label: 'Detail Berita', path: router.asPath },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <RootWrapper>
      <VectorOne />
      <DetailBeritaBook data={data} />
      <VectorTwo />
    </RootWrapper>
  );
};

export default DetailBeritaPage;
