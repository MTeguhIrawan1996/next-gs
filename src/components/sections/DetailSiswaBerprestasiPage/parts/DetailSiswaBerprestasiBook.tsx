import { Box, Flex, Stack, Text } from '@mantine/core';
import * as React from 'react';

import {
  GSMSBoxWrapper,
  InnerWrapper,
  KeyValuePairs,
  NextImageFill,
} from '@/components/elements';

import landingPageStyle from '@/styles/LandingPage';

import ImgExample from '../../../../../public/assets/example.png';

const DetailSiswaBerprestasiBook = () => {
  const { classes } = landingPageStyle();
  return (
    <InnerWrapper>
      <Box mb={220}>
        <GSMSBoxWrapper enableBack>
          <Stack w="100%" spacing="md">
            <Text fw={600} fz={24}>
              Nama Siswa
            </Text>
            <Flex gap="md" className={classes.rowToColumn}>
              <Box className={classes.detailSiswaDinamisFlexPrimary}>
                <NextImageFill src={ImgExample} alt="a" />
              </Box>
              <Stack sx={{ flex: 9 }} spacing={6}>
                <KeyValuePairs
                  classNameKey={classes.keySectionPrimary}
                  classNameValue={classes.valueSectionPrimary}
                  data={[
                    {
                      key: 'NISN',
                      value: '-',
                    },
                    {
                      key: 'Tahun Mengikuti GSMS',
                      value: '-',
                    },
                    {
                      key: ' Sekolah Saat Mengikuti GSMS',
                      value:
                        'Dinas Pendidikan, Kebudayaan, Pemuda dan Olah Raga Kabupaten Bima',
                    },
                    {
                      key: 'Sekolah Saat Ini',
                      value: '-',
                    },
                    {
                      key: 'Prestasi',
                      value: '-',
                    },
                  ]}
                />
                <Flex>
                  <Box className={classes.keySectionPrimary}>
                    <Text fz={12} fw={300} c="dark.4">
                      Foto Dokumentasi Prestasi
                    </Text>
                  </Box>
                  <Box className={classes.valueSectionPrimary}>
                    <Flex gap="sm" wrap="wrap">
                      <Box
                        w={110}
                        h={110}
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: 8,
                        }}
                      >
                        <NextImageFill src={ImgExample} alt="a" />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </GSMSBoxWrapper>
      </Box>
    </InnerWrapper>
  );
};

export default DetailSiswaBerprestasiBook;
