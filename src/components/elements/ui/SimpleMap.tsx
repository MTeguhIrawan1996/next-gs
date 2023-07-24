import { Icon } from '@iconify/react';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import { Map, Marker, NavigationControl } from 'react-map-gl';

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
        zoom: 12,
      }}
      cursor="pointer"
      minZoom={3}
      maxZoom={18}
      mapStyle="https://basemap.bukapeta.id/styles/klokantech-basic/style.json"
      attributionControl={false}
    >
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <Icon icon="tabler:map-pin-filled" fontSize={26} color="#7950F2" />
      </Marker>
      <NavigationControl
        position="bottom-left"
        showCompass={false}
        style={{ borderRadius: '8px' }}
      />
    </Map>
  );
};

export default React.memo(SimpleMap);
