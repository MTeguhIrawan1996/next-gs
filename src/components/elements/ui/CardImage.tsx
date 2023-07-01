import { Icon } from '@iconify/react';
import { Box, Card, Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

import { dateFromat } from '@/utils/helper/dateFormat';

import NextImageFill from './NextImageFill';

import { IFile } from '@/types/global';

interface ICardImageProps {
  enableDate?: boolean;
  labelDate?: string;
  label?: string;
  imageProps?: IFile;
  href?: string;
}

const CardImage: React.FC<ICardImageProps> = ({
  enableDate,
  label,
  labelDate,
  imageProps,
  href,
}) => {
  return (
    <Card shadow="xs" padding={0} radius="lg" withBorder w={320}>
      <Card.Section>
        <Link href={href ?? ''}>
          <Box h={320} w="100%" pos="relative">
            {imageProps ? (
              <NextImageFill src={imageProps.url} alt={imageProps.filename} />
            ) : null}
          </Box>
        </Link>
      </Card.Section>
      <Stack py="md" px="xs" pos="relative" spacing="xs">
        {enableDate ? (
          <Group spacing={8}>
            <Icon icon="tabler:calendar" fontSize={14} color="#868E96" />
            <Text fw={300} fz={10}>
              {dateFromat(labelDate, 'dddd, LL') ?? 'Senin, DD/MM/YY'}
            </Text>
          </Group>
        ) : null}
        <Text fw={500} fz={12} color="dark.6">
          {label ?? 'Label'}
        </Text>
      </Stack>
    </Card>
  );
};

export default React.memo(CardImage);
