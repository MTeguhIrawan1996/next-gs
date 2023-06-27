import { Box, Paper, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import * as React from 'react';

import {
  GSMSBoxWrapper,
  InnerWrapper,
  KeyValuePairs,
} from '@/components/elements';

import { rgbDataURL } from '@/utils/helper/imagePlaceholder';

import ImgExample from '../../../../../public/assets/example.png';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISchoolInformationProps {}

const SchoolInformation: React.FC<ISchoolInformationProps> = () => {
  return (
    <InnerWrapper>
      <Stack spacing="md">
        <GSMSBoxWrapper enableBack>
          <Stack w="100%" spacing="md">
            <Text fw={600} fz={24}>
              Nama Sekolah
            </Text>
            <Box w="95%" mx="auto">
              <KeyValuePairs
                data={[
                  {
                    key: 'Seniman',
                    value: 'Raihan',
                  },
                  {
                    key: 'Asisten',
                    value: 'Budi',
                  },
                  {
                    key: ' Dinas',
                    value:
                      'Dinas Pendidikan, Kebudayaan, Pemuda dan Olah Raga Kabupaten Bima',
                  },
                  {
                    key: 'Materi',
                    value:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`",
                  },
                ]}
              />
            </Box>
          </Stack>
        </GSMSBoxWrapper>
        <Paper bg="gray.1" radius="lg" sx={{ overflow: 'hidden' }}>
          <Box
            w={{ base: '100%', sm: '60%' }}
            h="420px"
            mx="auto"
            pos="relative"
          >
            <Image
              src={ImgExample}
              quality={100}
              alt="example"
              fill
              style={{
                objectFit: 'cover',
                backgroundPosition: 'center',
                fontSize: '12px',
                textAlign: 'center',
              }}
              placeholder="blur"
              blurDataURL={rgbDataURL(234, 233, 238)}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </Box>
        </Paper>
      </Stack>
    </InnerWrapper>
  );
};

export default SchoolInformation;
