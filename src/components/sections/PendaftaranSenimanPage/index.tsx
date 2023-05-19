import { Flex } from '@mantine/core';

import { VectorOne, VectorThree, VectorTwo } from '@/components';

import { Content, Header } from './parts';

const PendaftaranSenimanPage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="xl"
      className="rootYPaddings"
      sx={{ position: 'relative' }}
    >
      <VectorOne />
      <Header />
      <VectorTwo />
      <Content />
      <VectorThree />
    </Flex>
  );
};

export default PendaftaranSenimanPage;
