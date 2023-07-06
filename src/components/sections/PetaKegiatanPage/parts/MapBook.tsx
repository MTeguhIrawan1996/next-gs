import { ApolloError, useQuery } from '@apollo/client';
import { Box, Paper, SelectProps } from '@mantine/core';
import axios from 'axios';
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

import 'maplibre-gl/dist/maplibre-gl.css';

import { MapPopup, MultipleSelect } from '@/components/elements';

import {
  FilterYearResponse,
  READ_ALL_FILTER_YEAR,
} from '@/graphql/query/readAllFilterYear';

import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from './layers';

import { IMapFeature, IPropertiesId } from '@/types/map';

const MapBook = () => {
  const mapRef = React.useRef<MapRef>(null);
  const [data, setData] = React.useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry, IPropertiesId> | undefined
  >(undefined);
  const [clickInfo, setClickInfo] = React.useState<IMapFeature | null>(null);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [filterYearId, setFilterYearId] = React.useState<string | null>(null);

  const { data: filterYearData, loading: filterYearLoading } =
    useQuery<FilterYearResponse>(READ_ALL_FILTER_YEAR, {
      onError: (err: ApolloError) => {
        return err;
      },
      fetchPolicy: 'cache-first',
    });

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/landing-page/artist-reports/school-for-maps?activity-year=`
        );
        setData(res.data);
      } catch (err) {
        return;
      }
    };
    getData();
  }, []);

  const renderFilterYear = React.useCallback((value: number) => {
    return {
      label: value.toString(),
      value: value.toString(),
    };
  }, []);

  const filterYearItem = filterYearData?.activityYears.map(renderFilterYear);

  const filter = React.useMemo(() => {
    const item: SelectProps[] = [
      {
        onChange: (value: string | null) => {
          setFilterYearId(value);
        },
        data: filterYearItem ?? [],
        label: 'Tahun Kegiatan',
        placeholder: filterYearLoading ? 'Memuat...' : 'Pilih Tahun',
        clearable: true,
      },
    ];
    return item;
  }, [filterYearItem, filterYearLoading]);

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
        mapStyle="https://basemap.bukapeta.id/styles/klokantech-basic/style.json"
        interactiveLayerIds={[
          clusterLayer.id as string,
          unclusteredPointLayer.id as string,
        ]}
        ref={mapRef}
        onLoad={onLoad}
        onClick={onClick}
      >
        {data && (
          <Source
            id="my-data"
            type="geojson"
            data={data}
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
      </Map>
    </Box>
  );
};

export default MapBook;
