import { useMediaQuery } from '@mantine/hooks';
import dynamic from 'next/dynamic';

import { useReadStatsCountArtistByField } from '@/graphql/query/stats/useReadStatsCountArtistByField';
const HorizontalBarChart = dynamic(
  () => import('@/components/elements/Stats/HorizontalBarChart'),
  {
    ssr: false,
  }
);

const BarChart = dynamic(() => import('@/components/elements/Stats/BarChart'), {
  ssr: false,
});

import { Flex, Skeleton, Text } from '@mantine/core';

import { StatistikProps } from '../../StatistikBook';

export default function ArtistByFieldBarChart(props: StatistikProps) {
  const { statsCountArtist, statsCountArtistLoading } =
    useReadStatsCountArtistByField({
      year: Number(props.year),
      provinceId: props.provinceId,
      regencyId: props.regencyId,
    });

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {statsCountArtistLoading ? (
        <Flex
          direction="column"
          gap="xl"
          sx={{
            width: '100%',
          }}
        >
          {isMobile ? (
            <>
              <Skeleton height={40} width={250} />
              <Skeleton height={350} width={250} />
            </>
          ) : (
            <>
              <Skeleton height={40} width={1100} />
              <Skeleton height={350} width={1100} />
            </>
          )}
        </Flex>
      ) : (
        <>
          <Text size="xl" fw={600} align="center">
            {statsCountArtist?.landingPageCountArtistByFields?.title}
          </Text>
          {isMobile ? (
            <BarChart
              stats={
                (statsCountArtist?.landingPageCountArtistByFields
                  ?.stats as Array<{
                  legend: string;
                  color: string;
                  data: number;
                }>) || []
              }
              showXLabel={true}
            />
          ) : (
            <HorizontalBarChart
              stats={
                (statsCountArtist?.landingPageCountArtistByFields
                  ?.stats as Array<{
                  legend: string;
                  color: string;
                  data: number;
                }>) || []
              }
            />
          )}
        </>
      )}
    </>
  );
}
