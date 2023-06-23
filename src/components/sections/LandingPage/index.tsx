import { Box } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import { Banner, Hero, Information } from './parts';
import Vector1 from '../../../../public/vector1.svg';
import Vector2 from '../../../../public/vector2.svg';
import Vector3 from '../../../../public/vector3.svg';

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
    <>
      <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
        <Vector1 />
      </Box>
      <Banner scrollIntoView={() => scrollIntoView({ alignment: 'center' })} />
      <Hero />
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          right: 0,
          transform: 'translateY(100%)',
        }}
      >
        <Vector2 />
      </Box>
      <Information targetRef={targetRef} />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translateY(-10%)',
          zIndex: 0,
        }}
      >
        <Vector3 />
      </Box>
    </>
  );
};

export default LandingPage;
