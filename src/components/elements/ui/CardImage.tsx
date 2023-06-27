import { Icon } from '@iconify/react';
import { Box, Card, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { rgbDataURL } from '@/utils/helper/imagePlaceholder';

import ImgExample from '../../../../public/assets/example.png';

interface ICardImageProps {
  enableDate?: boolean;
}

const CardImage: React.FC<ICardImageProps> = ({ enableDate }) => {
  return (
    <Card shadow="xs" padding={0} radius="lg" withBorder w={320}>
      <Card.Section>
        <Link href="/galeri/1">
          <Box h={320} w="100%" pos="relative">
            <Image
              src={ImgExample}
              quality={100}
              alt="a"
              fill
              style={{
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
              placeholder="blur"
              blurDataURL={rgbDataURL(234, 233, 238)}
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            />
          </Box>
        </Link>
      </Card.Section>
      <Stack py="md" px="xs" pos="relative" spacing="xs">
        {enableDate ? (
          <Group spacing={8}>
            <Icon icon="tabler:calendar" fontSize={14} color="#868E96" />
            <Text fw={300} fz={10}>
              Senin, DD/MM/YY
            </Text>
          </Group>
        ) : null}
        <Text fw={500} fz={12} color="dark.6">
          Nama Sekolah
        </Text>
      </Stack>
    </Card>
  );
};

export default React.memo(CardImage);
