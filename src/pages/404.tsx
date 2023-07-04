import { Flex } from '@mantine/core';
import * as React from 'react';

import { EmptyStatePage } from '@/components/elements';

const NotFound = () => {
  return (
    <Flex h="100vh" justify="center" align="center">
      <EmptyStatePage
        title="Halaman tidak Ditemukan"
        message="URL Anda tidak dikenal atau Anda tidak mendapat otoritas untuk membuka halaman ini"
      />
    </Flex>
  );
};

export default NotFound;
