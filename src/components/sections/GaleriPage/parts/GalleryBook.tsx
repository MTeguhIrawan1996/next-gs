import { Card, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import * as React from 'react';

import {
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  SelectInput,
} from '@/components/elements';
import SearchBar from '@/components/elements/ui/SearchBar';

import { rgbDataURL } from '@/utils/helper/imagePlaceholder';

import ImgExample from '../../../../../public/assets/example.png';

const GalleryBook = () => {
  const [page, setPage] = React.useState<number>(1);

  return (
    <InnerWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          <SearchBar placeholder="Pencarian" />
          <Flex w="100%" gap="md">
            <SelectInput
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
              searchable
              label="Provinsi"
              placeholder="Ketik dan cari Provinsi"
              sx={{ flex: 1 }}
            />
            <SelectInput
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
              searchable
              label="Provinsi"
              placeholder="Ketik dan cari Provinsi"
              sx={{ flex: 1 }}
            />
          </Flex>
          <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
            <Card shadow="xs" padding={0} radius="lg" withBorder w={320}>
              <Card.Section
                component="a"
                href="https://mantine.dev/"
                pos="relative"
                h={320}
                w="100%"
              >
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
              </Card.Section>
              <Stack py="md" px="xs" pos="relative">
                <Text fw={500} fz={12} color="dark.6">
                  Nama Sekolah
                </Text>
              </Stack>
            </Card>
          </Flex>
          <GlobalPagination
            setPage={setPage}
            currentPage={page}
            totalAllData={11}
            totalData={2}
            totalPage={2}
          />
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default GalleryBook;
