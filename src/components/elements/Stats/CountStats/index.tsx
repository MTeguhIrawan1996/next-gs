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
      gap="lg"
      sx={{
        backgroundColor: 'white',
        borderRadius: '10px',
        // border: '1px solid #E5E5E5',
        padding: '1.5rem',
        width: '100%',
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        sx={{
          gap: '5.32rem',
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
                fontSize: '1.625rem',
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
    </Flex>
  );
}
