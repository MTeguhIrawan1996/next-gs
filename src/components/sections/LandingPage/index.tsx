import { Box } from '@mantine/core';
import * as React from 'react';

import { Hero, Information } from './parts';
import Vector1 from '../../../../public/vector1.svg';
import Vector2 from '../../../../public/vector2.svg';

const LandingPage = () => {
  return (
    <>
      <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
        <Vector1 />
      </Box>
      <Hero />
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          right: 0,
          transform: 'translateY(60%)',
        }}
      >
        <Vector2 />
      </Box>
      <Information />
    </>
  );
};

export default LandingPage;
