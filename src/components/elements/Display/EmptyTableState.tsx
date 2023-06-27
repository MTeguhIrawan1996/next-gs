import { Stack, Text, Title } from '@mantine/core';
import * as React from 'react';

import globalStyle from '@/styles/EmptyState';

import LaptopMan from '../../../../public/assets/laptop-man.svg';

interface IEmptyTableStateProps {
  title?: string;
  message?: string;
}

const EmptyTableState: React.FC<IEmptyTableStateProps> = ({
  message,
  title,
}) => {
  const { classes: typo } = globalStyle();
  return (
    <Stack align="center" spacing="lg" p="sm">
      <LaptopMan />
      <Stack align="center" spacing={6}>
        <Title
          order={2}
          className={typo.heading4}
          sx={(theme) => ({ color: theme.colors.dark[4] })}
        >
          {title ?? 'Tidak Ada Data'}
        </Title>
        <Text>{message}</Text>
      </Stack>
    </Stack>
  );
};

export default EmptyTableState;
