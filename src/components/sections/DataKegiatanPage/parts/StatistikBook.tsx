import { Flex, Stack } from '@mantine/core';
import dynamic from 'next/dynamic';

import { GSMSBoxWrapper, InnerWrapper } from '@/components/elements';

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
    <InnerWrapper>
      <Flex
        align="center"
        justify="center"
        direction="row"
        sx={{
          width: '100%',
        }}
        gap="xl"
      >
        <GSMSBoxWrapper>
          <Stack w="50%" spacing="lg">
            <CountStats {...countStats} />
          </Stack>
        </GSMSBoxWrapper>
        <GSMSBoxWrapper>
          <Stack w="50%" spacing="lg">
            <HorizontalBarChart {...statsDummyHorizon} />
          </Stack>
        </GSMSBoxWrapper>
      </Flex>
    </InnerWrapper>
  );
}
