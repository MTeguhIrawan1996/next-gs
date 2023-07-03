import { Box, Divider } from '@mantine/core';
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

import { Banner, Berita, Galeri, Hero, SiswaBerprestasi } from './parts';

const LandingPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: '', path: '/' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <RootWrapper>
      <VectorOne />
      <Banner />
      <Hero />
      <Box px="xl" w="100%" mx="auto">
        <Divider my="xs" size="sm" opacity={1} color="blue.1" />
      </Box>
      <VectorTwo />
      <Galeri />
      <Box px="xl" w="100%" mx="auto">
        <Divider my="xs" size="sm" opacity={1} color="blue.1" />
      </Box>
      <Berita />
      <Box px="xl" w="100%" mx="auto">
        <Divider my="xs" size="sm" opacity={1} color="blue.1" />
      </Box>
      <SiswaBerprestasi />
      <VectorThree />
    </RootWrapper>
  );
};

export default LandingPage;
