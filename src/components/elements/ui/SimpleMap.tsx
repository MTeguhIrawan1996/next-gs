import { Icon } from '@iconify/react';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import { Map, Marker } from 'react-map-gl';

import 'maplibre-gl/dist/maplibre-gl.css';

interface ISimpleMapProps {
  longitude: number;
  latitude: number;
}

const SimpleMap: React.FC<ISimpleMapProps> = ({ latitude, longitude }) => {
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 18,
      }}
      cursor="pointer"
      minZoom={3}
      maxZoom={18}
      mapStyle="https://basemap.bukapeta.id/styles/klokantech-basic/style.json"
    >
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <Icon icon="tabler:map-pin" fontSize={26} color="red" />
      </Marker>
    </Map>
  );
};

export default React.memo(SimpleMap);
