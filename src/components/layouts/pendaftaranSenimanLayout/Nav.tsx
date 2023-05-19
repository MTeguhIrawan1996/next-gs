import { Box, Header } from '@mantine/core';
import Image from 'next/image';
import * as React from 'react';

import layoutStyle from '@/styles/Layout';

import GsmsLogo from '../../../../public/logo-gsms.png';

const Navbar = () => {
  const { classes } = layoutStyle();

  return (
    <Header height={80} className={classes.header}>
      <Box h="55px" w="90px" sx={{ position: 'relative' }}>
        <Image
          src={GsmsLogo}
          alt="Logo-gsms"
          quality={100}
          priority
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </Header>
  );
};

export default Navbar;
