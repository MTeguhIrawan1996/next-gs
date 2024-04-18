import { Skeleton } from '@mantine/core';
import Chart from 'react-apexcharts';

export interface BarChartProps {
  stats: Array<{
    legend: string;
    color: string;
    data: number;
  }>;
  isLoading?: boolean;
  showXLabel: boolean;
}

const BarChart = (PROPS: BarChartProps) => {
  return (
    <>
      {PROPS.isLoading ? (
        <Skeleton width="100%" height={300} />
      ) : (
        <Chart
          options={{
            chart: {
              height: 250, // Set height using REM
              width: '100%', // Make width responsive
              toolbar: {
                show: true,
              },
            },
            responsive: [
              {
                breakpoint: 768, // example breakpoint for mobile devices
                options: {
                  // You can set specific options for mobile devices
                  chart: {
                    height: 500, // Smaller height on mobile devices
                  },
                  legend: {
                    position: 'top',
                  },
                },
              },
            ],
            colors: PROPS.stats.map((el) => el.color),
            plotOptions: {
              bar: {
                columnWidth: '35%',
                distributed: true,
                dataLabels: {
                  position: 'top',
                },
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
            },
            xaxis: {
              categories: PROPS.stats.map((el) => el.legend) || [],

              labels: {
                show: PROPS.showXLabel,
                style: {
                  fontSize: '12px',
                },
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
                // style: {
                //   colors: PROPS.stats.map((el) => el.color),
                //   fontSize: '12px',
                // },
              },
            },
          }}
          series={[
            { name: 'Jumlah', data: PROPS.stats.map((el) => el.data) || [] },
          ]}
          type="bar"
          borderRadius={10}
        />
      )}
    </>
  );
};

export default BarChart;
