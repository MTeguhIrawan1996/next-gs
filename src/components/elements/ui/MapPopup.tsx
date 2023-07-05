import { Button, Divider, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

import landingPageStyle from '@/styles/LandingPage';

import KeyValuePair from '../Display/KeyValuePair';

import { IMapFeature } from '@/types/map';

interface IMapPopupProps {
  clickInfo: IMapFeature;
}

const MapPopup: React.FunctionComponent<IMapPopupProps> = ({ clickInfo }) => {
  const { classes } = landingPageStyle();

  const data = React.useMemo(() => {
    const shcool: {
      name: string;
      provinceName: string;
      regencyName: string;
    } = JSON.parse(clickInfo?.feature.properties.school);
    const activity: { year: number } = JSON.parse(
      clickInfo?.feature.properties.activity
    );
    const artist: { name: string } = JSON.parse(
      clickInfo?.feature.properties.artist
    );
    const newObject = {
      name: artist.name,
      year: activity.year,
      school: shcool,
    };
    return newObject;
  }, [clickInfo]);

  return (
    <Stack
      bg="dark.5"
      spacing={6}
      miw="240px"
      sx={{ borderRadius: '8px', top: 0, left: 0 }}
    >
      <Text fz={12} fw={600} c="#FFF">
        {data.school.name}
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
            value: data.school.provinceName,
          },
          {
            key: 'Kabupaten',
            value: data.school.regencyName,
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
            value: data.name,
          },
          {
            key: 'Tahun Kegiatan',
            value: data.year,
          },
        ]}
      />
      <Link
        href={`/peta-kegiatan/${clickInfo.feature.properties.id}`}
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
