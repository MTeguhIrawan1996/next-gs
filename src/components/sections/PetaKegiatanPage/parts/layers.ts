import type { LayerProps } from 'react-map-gl';

export const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  source: 'my-data',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#7950F2',
      5,
      '#7950F2',
      50,
      '#7950F2',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 20, 5, 30, 50, 40],
    'circle-stroke-color': '#ffffff', // Warna border
    'circle-stroke-width': 1,
  },
};

export const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'my-data',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['Open Sans Bold'],
    'text-size': 16,
  },
  paint: {
    'text-color': '#ffffff', // Optional: Mengatur warna teks
  },
};

export const unclusteredPointLayer: LayerProps = {
  id: 'unclustered-point',
  type: 'symbol',
  source: 'my-data',
  filter: ['!', ['has', 'point_count']],
  layout: {
    'icon-image': 'Pin', // Nama gambar ikon pin yang digunakan
    'icon-size': 1, // Ukuran ikon relatif terhadap ukuran aslinya
    'icon-allow-overlap': true, // Mengizinkan ikon tumpang tindih
  },
};
