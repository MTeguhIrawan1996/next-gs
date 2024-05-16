import { Flex, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { GSMSBoxWrapper } from '@/components/elements';

import ArtistByFieldBarChart from './stats/artist-by-filled';
import CountSummaryStats from './stats/count-summary';

export type StatistikProps = {
  year: string | number;
  provinceId: string;
  regencyId: string;
};

export default function StatistikBook(props: StatistikProps) {
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
        <CountSummaryStats {...props} />
      </GSMSBoxWrapper>
      <GSMSBoxWrapper>
        <Stack w="100%" spacing="lg">
          <ArtistByFieldBarChart {...props} />
        </Stack>
      </GSMSBoxWrapper>
    </Flex>
  );
}
