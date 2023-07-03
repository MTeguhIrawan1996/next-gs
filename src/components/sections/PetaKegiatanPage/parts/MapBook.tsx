import { Box } from '@mantine/core';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import Map, { NavigationControl, ScaleControl } from 'react-map-gl';

import 'maplibre-gl/dist/maplibre-gl.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapBookProps {}

const MapBook: React.FC<IMapBookProps> = () => {
  return (
    <Box w="100%" h="100vh">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: 40.67,
          longitude: -103.59,
          zoom: 2,
        }}
        style={{ width: '100%', height: '100%' }}
        maxZoom={17}
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
      </Map>
    </Box>
  );
};

export default MapBook;
