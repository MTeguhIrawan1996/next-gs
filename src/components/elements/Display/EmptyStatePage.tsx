import { Box, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import * as React from 'react';

import emptyState from '@/styles/EmptyState';

import EmptyImg from '../../../../public/assets/emptystate.png';

interface IEmptyStatePageProps {
  title?: string;
  message?: string;
}

const EmptyStatePage: React.FunctionComponent<IEmptyStatePageProps> = (
  props
) => {
  const { classes } = emptyState();

  return (
    <Stack align="center">
      <Box className={classes.imageBox}>
        <Image
          src={EmptyImg}
          quality={80}
          alt="Dokumen"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            backgroundPosition: 'center',
          }}
          priority
          placeholder="blur"
        />
      </Box>
      <Title order={2} fw={700} fz={26}>
        {props.title ?? 'Coming Soon'}
      </Title>
      <Text fw={400} fz={16}>
        {props.message ?? 'Halaman ini akan segera terbit'}
      </Text>
    </Stack>
  );
};

export default EmptyStatePage;
