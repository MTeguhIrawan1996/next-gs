import {
  Button,
  CloseButton,
  Divider,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

import landingPageStyle from '@/styles/LandingPage';

import KeyValuePair from '../Display/KeyValuePair';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapPopupProps {}

const MapPopup: React.FunctionComponent<IMapPopupProps> = () => {
  const { classes } = landingPageStyle();

  return (
    <Stack
      bg="dark.5"
      spacing={6}
      w="240px"
      pos="absolute"
      sx={{ top: ' 20%', right: '30%', borderRadius: '8px' }}
      p="xs"
    >
      <Group position="right" pos="relative">
        <CloseButton
          title="Close"
          size="xs"
          iconSize={14}
          pos="absolute"
          right={0}
          top={0}
        />
      </Group>
      <Text fz={12} fw={600} c="#FFF">
        SDN Cideng Yogyakarta
      </Text>
      <KeyValuePair
        verticalSpacing={4}
        keyTextProps={{ c: '#FFF', fz: 10, fw: 300 }}
        valueTextProps={{ c: '#FFF', fz: 10, fw: 500 }}
        classNameKey={classes.keySectionPopupMaps}
        classNameValue={classes.valueSectionPopupMaps}
        data={[
          {
            key: 'Provinsi',
            value: 'Jawa Barat',
          },
          {
            key: 'Kabupaten',
            value: 'Cirebon',
          },
        ]}
      />
      <Divider my={2} opacity={0.5} bg="#FFF" w="100%" size="xs" />
      <KeyValuePair
        verticalSpacing={4}
        keyTextProps={{ c: '#FFF', fz: 10, fw: 300 }}
        valueTextProps={{ c: '#FFF', fz: 10, fw: 500 }}
        classNameKey={classes.keySectionPopupMaps}
        classNameValue={classes.valueSectionPopupMaps}
        data={[
          {
            key: 'Seniman',
            value: 'Budi',
          },
          {
            key: 'Tahun Kegiatan',
            value: '2023',
          },
        ]}
      />
      <Link
        href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
        className={classes.buttonStyle}
      >
        <Button fw={400} fz={12} color="violet.6" w="100%">
          Lihat Sekarang
        </Button>
      </Link>
    </Stack>
  );
};

export default MapPopup;
