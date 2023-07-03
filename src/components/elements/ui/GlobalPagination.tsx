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
    if (totalData === 0 || totalAllData === 0) {
      setStartData(0);
      setEndData(0);
    }
    if (currentPage && totalAllData) {
      const pageLength =
        currentPage === totalPage && totalPage !== 1
          ? (totalAllData - totalData) / (totalPage - 1)
          : (totalPage * totalData) / totalPage;

      const startDatas = (currentPage - 1) * pageLength + 1;
      const endDatas = Math.min(currentPage * pageLength, totalAllData);
      setStartData(startDatas);
      setEndData(endDatas);
    }
  }, [currentPage, totalAllData, totalData, totalPage]);

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
          total={totalPage === 0 ? 1 : totalPage}
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
