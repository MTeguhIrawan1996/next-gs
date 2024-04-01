import { Icon } from '@iconify/react';
import {
  Badge,
  Box,
  Card,
  Flex,
  Group,
  Overlay,
  Stack,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

import { dateFromat } from '@/utils/helper/dateFormat';
import { googleDriveUrlRegex, youtubeUrlRegex } from '@/utils/helper/regex';

import NextImageFill from './NextImageFill';
import GDriveThumbnail from '../Global/GDriveThumbnail';
import YoutubeThumbnail from '../Global/YoutubeThumbnail';

import { IFile } from '@/types/global';

interface ICardImageProps {
  enableDate?: boolean;
  labelDate?: string;
  label?: string;
  imageProps?: IFile;
  href?: string;
  videoLink?: string;
  activityYear?: number;
  description?: string;
}

const CardImage: React.FC<ICardImageProps> = ({
  enableDate,
  label,
  labelDate,
  imageProps,
  href,
  videoLink,
  activityYear,
  description,
}) => {
  return (
    <Card shadow="xs" padding={0} radius="lg" withBorder w={320}>
      <Card.Section>
        <Link href={href ?? ''}>
          <Box h={320} w="100%" pos="relative">
            {imageProps ? (
              <NextImageFill src={imageProps.url} alt={imageProps.filename} />
            ) : videoLink && youtubeUrlRegex.test(videoLink) ? (
              <YoutubeThumbnail link={videoLink} />
            ) : videoLink && googleDriveUrlRegex.test(videoLink) ? (
              <GDriveThumbnail link={videoLink} />
            ) : null}
            <Overlay opacity={0} sx={{ zIndex: 10 }} />
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
        <Flex direction="row" align="center" gap="sm">
          <Text fw={500} fz={12} color="dark.6">
            {label ?? 'Label'}{' '}
          </Text>
          <Badge variant="filled" size="md">
            <Flex direction="row" gap="xs" align="center">
              <Icon icon="uil:calendar-alt" />
              {activityYear ?? '-'}
            </Flex>
          </Badge>
        </Flex>
        <Text fw={500} fz={12} color="dark.6">
          {description ?? null}
        </Text>
      </Stack>
    </Card>
  );
};

export default React.memo(CardImage);
