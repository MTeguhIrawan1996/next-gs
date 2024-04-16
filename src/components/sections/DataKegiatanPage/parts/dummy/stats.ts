import { CountStatsProps } from '@/components/elements/Stats/CountStats';
import { HorizontalBarChartProps } from '@/components/elements/Stats/HorizontalBarChart';

export const statsDummyHorizon: HorizontalBarChartProps = {
  stats: [
    {
      legend: 'Seni Tari',
      color: '#FF922B',
      data: 20,
    },
    {
      legend: 'Seni Musik',
      color: '#339AF0',
      data: 25,
    },
    {
      legend: 'Lagu',
      color: '#40C057',
      data: 36,
    },
    {
      legend: 'Seni Pertunjukan',
      color: '#22B8CF',
      data: 12,
    },
    {
      legend: 'Naskah Skenario',
      color: '#FF1DC0',
      data: 55,
    },
    {
      legend: 'Seni Sastra',
      color: '#A98017',
      data: 18,
    },
    {
      legend: 'Film',
      color: '#8E1DFF',
      data: 20,
    },
    {
      legend: 'Seni Media Baru',
      color: '#57D886',
      data: 45,
    },
    {
      legend: 'Seni Rupa',
      color: '#2E1DF9',
      data: 8,
    },
  ],
};

export const countStats: CountStatsProps = {
  stats: [
    {
      label: 'Jumlah Seniman dan Asisten',
      count: 1256,
    },
    {
      label: 'Jumlah Sekolah',
      count: 2467,
    },
  ],
};
