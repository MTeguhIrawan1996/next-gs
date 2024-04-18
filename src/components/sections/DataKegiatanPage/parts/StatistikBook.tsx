import { Flex, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import dynamic from 'next/dynamic';

import { GSMSBoxWrapper } from '@/components/elements';

import { countStats, statsDummyHorizon } from './dummy/stats';

const CountStats = dynamic(
  () => import('@/components/elements/Stats/CountStats'),
  {
    ssr: false,
  }
);

const HorizontalBarChart = dynamic(
  () => import('@/components/elements/Stats/HorizontalBarChart'),
  {
    ssr: false,
  }
);

const BarChart = dynamic(() => import('@/components/elements/Stats/BarChart'), {
  ssr: false,
});

export default function StatistikBook() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      justify="space-between"
      align=""
      sx={{
        width: '100%',
        height: '100%',
      }}
      gap="xl"
    >
      <GSMSBoxWrapper>
        <CountStats {...countStats} />
      </GSMSBoxWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          {isMobile ? (
            <BarChart {...statsDummyHorizon} showXLabel />
          ) : (
            <HorizontalBarChart {...statsDummyHorizon} />
          )}
        </Stack>
      </GSMSBoxWrapper>
    </Flex>
  );
}
