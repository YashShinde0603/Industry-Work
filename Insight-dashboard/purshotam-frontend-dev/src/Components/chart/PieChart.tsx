import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJs, Tooltip, Legend, ArcElement, Title, ChartData, LegendItem, ChartOptions
} from 'chart.js';

ChartJs.register(Tooltip, Legend, ArcElement, Title);

interface PieChartProps {
  data: ChartData<'doughnut'>;
  legendPosition?: 'top' | 'left' | 'bottom' | 'right';
  padding?: { top?: number; right?: number; bottom?: number; left?: number };
  margin?: string;
  title?: string;
  titlePadding?: { top?: number; bottom?: number };
  titleMargin?: { top?: number; bottom?: number; left?: number; right?: number };
  options?: ChartOptions<'doughnut'>;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  legendPosition = 'bottom',
  padding = {},
  margin = '0',
  title = '',
  titlePadding = {},
  titleMargin = {},
  options = {},
}) => {
  const modifiedData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      borderColor: 'transparent',
      borderWidth: 0,
    })),
  };

  return (
    <div style={{ padding: margin }}>
      {title && (
        <div style={{
          marginTop: titleMargin.top || 0,
          marginBottom: titleMargin.bottom || 0,
          marginLeft: titleMargin.left || 0,
          marginRight: titleMargin.right || 0,
          textAlign: 'center',
        }}
        >
          <h3
            style={
              {
                paddingTop: titlePadding.top || 0, paddingBottom: titlePadding.bottom || 0
              }
            }
            className="font-semibold"
          >
            {title}
          </h3>
        </div>
      )}
      <Doughnut
        data={modifiedData}
        options={{
          plugins: {
            legend: {
              position: legendPosition,
              align: 'center',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 10,
                boxWidth: 10,
                font: {
                  size: 12,
                  weight: 'normal',
                },
                generateLabels: (chart): LegendItem[] => {
                  const datasets = chart.data.datasets[0];
                  const backgroundColors = datasets.backgroundColor as string[];
                  return chart.data.labels?.map((label, index) => ({
                    text: `${label} ${datasets.data[index]}`,
                    fillStyle: backgroundColors[index],
                    strokeStyle: 'transparent',
                    lineWidth: 0,
                    hidden: false,
                    index,
                    pointStyle: 'circle',
                  })) || [];
                },
              },
            },
            title: {
              display: false, // Disable default title display
            },
          },
          layout: {
            padding: {
              top: padding.top || 0,
              right: padding.right || 0,
              bottom: padding.bottom || 80,
              left: padding.left || 0,
            },
          },
          ...options,
        }}
      />
    </div>
  );
};

export default PieChart;
