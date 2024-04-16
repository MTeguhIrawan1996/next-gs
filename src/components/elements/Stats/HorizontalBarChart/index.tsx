import { Skeleton } from '@mantine/core';
import Chart from 'react-apexcharts';

export interface HorizontalBarChartProps {
  stats: Array<{
    legend: string;
    color: string;
    data: number;
  }>;
  isLoading?: boolean;
}

const HorizontalBarChart = (PROPS: HorizontalBarChartProps) => {
  return (
    <>
      {PROPS.isLoading ? (
        <Skeleton width="100%" height={300} />
      ) : (
        <Chart
          options={{
            colors: PROPS.stats.map((el) => el.color),
            plotOptions: {
              bar: {
                distributed: true,
                dataLabels: {
                  position: 'top',
                },
                horizontal: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: true,
              position: 'top',
            },
            tooltip: {
              y: {
                formatter: function (value: any) {
                  return value
                    .toLocaleString('id-ID', {
                      minimumFractionDigits: 3,
                    })
                    .split(',')
                    .filter((_, i) => i == 0)
                    .join(',');
                },
              },
              x: {
                formatter: function (value: any) {
                  return value
                    .toLocaleString('id-ID', {
                      minimumFractionDigits: 3,
                    })
                    .split(',')
                    .filter((_, i) => i == 0)
                    .join(',');
                },
              },
            },
            xaxis: {
              categories: PROPS.stats.map((el) => el.legend) || [],
              stepSize: 1,
              labels: {
                style: {
                  fontSize: '12px',
                },
                trim: false,
              },
            },
            yaxis: {
              labels: {
                formatter: function (value: any) {
                  return value
                    .toLocaleString('id-ID', {
                      minimumFractionDigits: 3,
                    })
                    .split(',')
                    .filter((_, i) => i == 0)
                    .join(',');
                },
              },
            },
          }}
          series={[{ data: PROPS.stats.map((el) => el.data) || [] }]}
          type="bar"
          height="330px"
          width={1100}
        />
      )}
    </>
  );
};

export default HorizontalBarChart;
