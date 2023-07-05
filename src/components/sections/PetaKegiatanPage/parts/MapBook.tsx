import { Box, Paper, SelectProps } from '@mantine/core';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import Map, { NavigationControl, ScaleControl } from 'react-map-gl';

import 'maplibre-gl/dist/maplibre-gl.css';

import { MapPopup, MultipleSelect } from '@/components/elements';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapBookProps {}

const MapBook: React.FC<IMapBookProps> = () => {
  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        data: [
          {
            label: '2023',
            value: '2023',
          },
          {
            label: '2022',
            value: '2022',
          },
        ],
        label: 'Tahun Kegiatan',
        clearable: true,
        placeholder: 'Pilih Tahun Kegiatan',
      },
    ];
    return item;
  }, []);

  return (
    <Box w="100%" sx={{ height: 'calc(100vh - 80px)' }}>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: 40.67,
          longitude: -103.59,
          zoom: 2,
        }}
        style={{ width: '100%', height: '100%' }}
        maxZoom={16}
        minZoom={1}
        cursor="auto"
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: [
                'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
              ],
              tileSize: 150,
            },
          },
          layers: [
            {
              id: 'raster-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 1,
              maxzoom: 22,
            },
          ],
        }}
      >
        <ScaleControl />
        <NavigationControl
          position="bottom-left"
          showCompass={false}
          style={{ borderRadius: '8px' }}
        />
        <MapPopup />
        <Box pos="absolute" mx={10} my={22}>
          <Paper shadow="xs" p="xs" bg="#FFFF" radius="md">
            <MultipleSelect MultipleSelectProps={filter as SelectProps[]} />
          </Paper>
        </Box>
      </Map>
    </Box>
  );
};

export default MapBook;
