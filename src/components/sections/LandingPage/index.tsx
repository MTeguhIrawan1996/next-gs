import { useScrollIntoView } from '@mantine/hooks';
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

import { Banner, Hero, Information } from './parts';

const LandingPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  React.useEffect(() => {
    setBreadcrumbs([{ label: '', path: '/' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <RootWrapper>
      <VectorOne />
      <Banner scrollIntoView={() => scrollIntoView({ alignment: 'center' })} />
      <Hero />
      <VectorTwo />
      <Information targetRef={targetRef} />
      <VectorThree />
    </RootWrapper>
  );
};

export default LandingPage;
