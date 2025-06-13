import React from 'react';
import { BarChart, PieChart } from '../../Components/Index';
import pieChartData from '../../data/pieChartData';
import barChartData from '../../data/barChart';
import { Tab } from '../../Components/shared';

const tabs = [
  { to: '/man-power', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/man-power-chart', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const ManPowerChartPage: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />
      <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[22rem] justify-items-center">
        {/* Pie Chart Section */}
        <div className="flex items-center w-full lg:w-[48%] rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)] p-4">
          <div className="w-full h-full flex justify-center">
            <h3 className="text-lg font-semibold text-left -ml-16">Finished Good</h3>
            <PieChart
              data={pieChartData}
              legendPosition="right"
              padding={{
                top: 50, right: 10, bottom: 0, left: 10
              }}
            />
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="flex items-center w-full lg:w-[48%] rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)] p-4">
          <div className="w-full h-[24rem] lg:h-[28rem] -mt-14 flex flex-col justify-center">
            <div className="w-full h-full mt-20">
              <BarChart
                data={barChartData}
                title="Increase In Manpower"
                legendPosition="right"
                legendPadding={10}
                chartPadding={10}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bar Chart */}

      <div className="mt-8 rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)]">
        <BarChart
          data={barChartData}
          title="Increase In Manpower"
          legendPosition="right"
          legendPadding={40}
          chartPadding={20}
        />
      </div>
    </div>
  );
};

export default ManPowerChartPage;
