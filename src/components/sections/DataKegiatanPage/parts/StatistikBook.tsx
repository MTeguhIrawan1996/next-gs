import { Flex, Stack } from '@mantine/core';
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

export default function StatistikBook() {
  return (
    <Flex
      direction="row"
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
        <Stack w="50%" spacing="lg">
          <HorizontalBarChart {...statsDummyHorizon} />
        </Stack>
      </GSMSBoxWrapper>
    </Flex>
  );
}
