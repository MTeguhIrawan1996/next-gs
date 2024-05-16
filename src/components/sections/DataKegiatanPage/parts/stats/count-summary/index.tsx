import { Flex, Skeleton } from '@mantine/core';
import dynamic from 'next/dynamic';

import { useReadStatsCountSummary } from '@/graphql/query/stats/useReadCountSummary';

const CountStats = dynamic(
  () => import('@/components/elements/Stats/CountStats'),
  {
    ssr: false,
  }
);

import { StatistikProps } from '../../StatistikBook';

export default function CountSummaryStats(props: StatistikProps) {
  const { statsCountSummary, statsCountSummaryLoading } =
    useReadStatsCountSummary({
      year: Number(props.year),
      provinceId: props.provinceId,
      regencyId: props.regencyId,
    });

  return (
    <>
      {statsCountSummaryLoading ? (
        <Flex
          direction="column"
          gap="md"
          justify="space-evenly"
          sx={{
            width: '100%',
          }}
        >
          <Skeleton h={85} w={200} />
          <Skeleton h={85} w={200} />
          <Skeleton h={85} w={200} />
          <Skeleton h={85} w={200} />
        </Flex>
      ) : (
        <>
          {statsCountSummary?.landingPageCountSummary?.map((el) => (
            <CountStats key={el.title} {...el} />
          ))}
        </>
      )}
    </>
  );
}
