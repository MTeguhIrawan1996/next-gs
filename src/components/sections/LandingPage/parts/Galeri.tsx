import { Flex } from '@mantine/core';
import * as React from 'react';

import { CardImage, LandingPageSectionWrapper } from '@/components/elements';

const Galeri = () => {
  return (
    <LandingPageSectionWrapper title="Galeri" href="/galeri">
      <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
        <CardImage />
        <CardImage />
        <CardImage />
      </Flex>
    </LandingPageSectionWrapper>
  );
};

export default Galeri;
