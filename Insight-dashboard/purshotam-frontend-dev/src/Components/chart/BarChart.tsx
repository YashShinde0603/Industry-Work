import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJs, ChartData, ChartOptions, CategoryScale,
  LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: ChartData<'bar'>;
  title?: string;
  legendPosition?: 'top' | 'left' | 'bottom' | 'right';
  legendPadding?: number;
  chartPadding?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  legendPosition = 'bottom',
  legendPadding = 20,
  chartPadding = 30,
}) => {
  return (
    <div className="flex flex-col mx-auto p-3 sm:p-4 mb-4 min-w-fit h-96 md:ml-4 lg:ml-4 rounded-xl">
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              position: legendPosition,
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: legendPadding,
              },
            },
            title: {
              display: true,
              text: title, // Use the dynamic title prop here
            },
          },
          layout: {
            padding: {
              bottom: chartPadding,
              top: chartPadding,
              left: chartPadding,
              right: chartPadding,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        } as ChartOptions<'bar'>}
      />
    </div>
  );
};

export default BarChart;
