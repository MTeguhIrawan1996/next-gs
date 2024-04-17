import { Flex, Text, Title } from '@mantine/core';

interface CountStatsData {
  label: string;
  count: number;
}

export interface CountStatsProps {
  stats: Array<CountStatsData>;
}

export default function CountStats(PROPS: CountStatsProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="end"
      sx={{
        gap: '3.25rem',
        width: '100%',
        height: '100%',
      }}
    >
      {PROPS.stats?.map((el) => (
        <Flex
          direction="column"
          align="start"
          sx={{
            width: '100%',
          }}
          key={el.label}
        >
          <Text
            size="xs"
            weight={700}
            color="gray.7"
            tt="uppercase"
            sx={{
              // border bottom
              width: '100%',
            }}
          >
            {el.label}
          </Text>
          <hr
            style={{
              width: '100%',
            }}
          />

          <Title
            order={2}
            fw={700}
            sx={{
              fontSize: '1.35rem',
            }}
          >
            {el.count
              .toLocaleString('id-ID', { minimumFractionDigits: 3 })
              .split(',')
              .filter((_, i) => i == 0)
              .join(',')}
          </Title>
        </Flex>
      ))}
    </Flex>
  );
}
