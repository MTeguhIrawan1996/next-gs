import { Box, Loader, Paper, SelectProps } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import type { GeoJSONSource } from 'mapbox-gl';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import type { MapRef } from 'react-map-gl';
import Map, {
  Layer,
  NavigationControl,
  Popup,
  ScaleControl,
  Source,
} from 'react-map-gl';
import { shallow } from 'zustand/shallow';

import 'maplibre-gl/dist/maplibre-gl.css';

import { MapPopup, MultipleSelect } from '@/components/elements';

import { useReadAllFilterYear } from '@/graphql/query/readAllFilterYear';
import { useReadAllActivityMaps } from '@/utils/rest-api/ActivityMap/useReadAllActivityMaps';
import { useActivityYearStore } from '@/utils/store/zustand/counterYear';

import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from './layers';

import { AxiosRestErrorResponse } from '@/types/global';
import { IMapFeature } from '@/types/map';

const MapBook = () => {
  const mapRef = React.useRef<MapRef>(null);
  const [clickInfo, setClickInfo] = React.useState<IMapFeature | null>(null);
  const [activityYearId, setActivityYear] = useActivityYearStore(
    (state) => [state.activityYearId, state.setActivityYear],
    shallow
  );
  const { filterYearData, filterYearLoading } = useReadAllFilterYear();
  const { data: dataMaps, isLoading: loadingMaps } = useReadAllActivityMaps({
    variable: {
      activityYearId,
    },
    onError: (err: AxiosRestErrorResponse) => {
      notifications.show({
        color: 'red',
        title: 'Terjadi kesalahan',
        message: err.response?.data.message,
      });
    },
  });

  const MapStyleMemo: mapboxgl.Style = React.useMemo(() => {
    return {
      version: 8,
      sources: {
        'raster-tiles': {
          type: 'raster',
          tiles: [
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
          ],
          tileSize: 256,
        },
      },
      glyphs: 'https://fonts.openmaptiles.org/{fontstack}/{range}.pbf',
      layers: [
        {
          id: 'raster-tiles',
          type: 'raster',
          source: 'raster-tiles',
          minzoom: 1,
          maxzoom: 22,
          layout: {
            visibility: 'visible',
          },
        },
      ],
    };
  }, []);

  const renderFilterYear = React.useCallback((value: number) => {
    return {
      label: value.toString(),
      value: value.toString(),
    };
  }, []);

  const filterYearItem = filterYearData?.activityYears
    .slice()
    .sort((a, b) => b - a)
    .map(renderFilterYear);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        defaultValue: activityYearId,
        onChange: (value: string | null) => {
          setClickInfo(null);
          setActivityYear(!value ? `${filterYearItem?.[0].value}` : value);
        },
        data: filterYearItem ?? [],
        label: 'Tahun Kegiatan',
        placeholder: filterYearLoading ? 'Memuat...' : 'Pilih Tahun',
        clearable: false,
      },
    ];
    return item;
  }, [activityYearId, filterYearItem, filterYearLoading, setActivityYear]);

  const onLoad = () => {
    if (mapRef.current) {
      const pinImage = new Image();
      pinImage.onload = () => {
        if (!mapRef.current?.hasImage('Pin')) {
          mapRef.current?.addImage('Pin', pinImage);
        }
      };
      pinImage.src = '/assets/map-pin.svg'; // pin is your svg import
    }
  };

  const onClick = (event: any) => {
    const {
      features,
      lngLat: { lat, lng },
    } = event;
    const feature = features && features[0];

    if (!feature) {
      return;
    }
    if (feature.layer?.id === 'clusters') {
      const clusterId = feature.properties?.cluster_id;

      const mapboxSource = mapRef.current?.getSource(
        'my-data'
      ) as GeoJSONSource;

      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return;
        }

        mapRef.current?.easeTo({
          center: feature?.geometry?.coordinates,
          zoom: zoom as number,
          duration: 500,
        });
      });
    }
    if (feature?.layer?.id === 'unclustered-point') {
      setClickInfo(feature && { feature: feature, lat, lng });
    }
  };

  return (
    <Box w="100%" sx={{ height: 'calc(100vh - 80px)' }}>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 118,
          latitude: -1.5,
          zoom: 4,
        }}
        style={{ width: '100%', height: '100%' }}
        maxZoom={16}
        minZoom={1}
        cursor="pointer"
        mapStyle={MapStyleMemo}
        interactiveLayerIds={[
          clusterLayer.id as string,
          unclusteredPointLayer.id as string,
        ]}
        ref={mapRef}
        onLoad={onLoad}
        onClick={onClick}
      >
        {dataMaps && (
          <Source
            id="my-data"
            type="geojson"
            data={dataMaps}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={0}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        )}
        <ScaleControl />
        <NavigationControl
          position="bottom-left"
          showCompass={false}
          style={{ borderRadius: '8px' }}
        />
        {clickInfo && (
          <Popup
            anchor="top"
            longitude={clickInfo.lng}
            latitude={clickInfo.lat}
            onClose={() => setClickInfo(null)}
            maxWidth="none"
          >
            <MapPopup clickInfo={clickInfo} />
          </Popup>
        )}
        <Box pos="absolute" mx={10} my={22}>
          <Paper shadow="xs" p="xs" bg="#FFFF" radius="md">
            <MultipleSelect MultipleSelectProps={filter as SelectProps[]} />
          </Paper>
        </Box>
        {loadingMaps ? (
          <Loader
            pos="absolute"
            mx={10}
            my={22}
            sx={{ right: 0 }}
            color="violet"
          />
        ) : null}
      </Map>
    </Box>
  );
};

export default MapBook;
