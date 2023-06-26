import { Flex, SelectProps, Stack } from '@mantine/core';
import * as React from 'react';

import {
  CardImage,
  GlobalPagination,
  GSMSBoxWrapper,
  InnerWrapper,
  MultipleSelect,
  SearchBar,
} from '@/components/elements';

const GalleryBook = () => {
  const [page, setPage] = React.useState<number>(1);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        // onChange: (value: string | null) => setValue(value),
        data: [
          {
            label: 'Foto',
            value: 'photo',
          },
          {
            label: 'Video',
            value: 'video',
          },
        ],
        label: 'Provinsi',
        placeholder: 'Ketik dan pilih Provinsi',
        searchable: true,
        clearable: true,
      },
      {
        data: [
          {
            label: 'Foto',
            value: 'photo',
          },
          {
            label: 'Video',
            value: 'video',
          },
        ],
        label: 'Kabupaten/Kota',
        placeholder: 'Ketik dan pilih Kabupaten/Kota',
        searchable: true,
        clearable: true,
      },
    ];
    return item;
  }, []);

  return (
    <InnerWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          <SearchBar placeholder="Pencarian" />
          <MultipleSelect MultipleSelectProps={filter} />
          <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
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
