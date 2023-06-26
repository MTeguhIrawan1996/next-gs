import { Grid, Group, Pagination, Text } from '@mantine/core';
import * as React from 'react';

interface IPaginationProps {
  currentPage: number;
  totalPage: number;
  totalAllData: number;
  totalData: number;
  setPage: (page: number) => void;
}

const GlobalPagination: React.FunctionComponent<IPaginationProps> = ({
  currentPage,
  totalAllData,
  totalData,
  totalPage,
  setPage,
}) => {
  const [startData, setStartData] = React.useState<number>(0);
  const [endData, setEndData] = React.useState<number>(0);

  const calculateDataRange = React.useCallback(() => {
    if (currentPage && totalAllData) {
      const startDatas = (currentPage - 1) * totalData + 1;
      const endDatas = Math.min(currentPage * totalData, totalAllData);
      setStartData(startDatas);
      setEndData(endDatas);
    }
  }, [currentPage, totalAllData, totalData]);

  React.useEffect(() => {
    calculateDataRange();
  }, [calculateDataRange]);

  return (
    <Grid py="sm" px="xs">
      <Grid.Col span={3}>
        <Text fw={400} fz={12} color="#969BA4">
          {startData}-{endData} dari {totalAllData}
        </Text>
      </Grid.Col>
      <Grid.Col span={6}>
        <Pagination.Root
          total={totalPage}
          value={currentPage}
          onChange={setPage}
          size="xs"
          styles={{
            control: {
              fontSize: '12px',
              fontWeight: 400,
            },
          }}
        >
          <Group spacing={5} position="center" fw={400} fz={12}>
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      </Grid.Col>
    </Grid>
  );
};

export default React.memo(GlobalPagination);
