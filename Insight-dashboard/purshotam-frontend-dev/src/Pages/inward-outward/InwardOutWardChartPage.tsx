import React from 'react';
import { BarChart, PieChart } from '../../Components/Index';
import barChartData from '../../data/barChart';
import pieChartData from '../../data/pieChartData';

const InwardOutWardChartPage: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden scrollbar-hide">
      <div className="grid gap-x-5 w-full gap-y-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full mx-auto md:w-5/6 lg:w-4/5 rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)]">
          <PieChart
            data={pieChartData}
            legendPosition="bottom"
            padding={{
              top: 1, right: 0, bottom: 50, left: 0
            }}
            margin="40px 40px"
          />
        </div>
        <div className="w-full mx-auto md:w-5/6 lg:w-4/5 rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)]">
          <PieChart
            data={pieChartData}
            legendPosition="bottom"
            padding={{
              top: 1, right: 0, bottom: 50, left: 0
            }}
            margin="40px 40px"
          />
        </div>
        <div className="w-full mx-auto md:w-5/6 lg:w-4/5 rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)]">
          <PieChart
            data={pieChartData}
            legendPosition="bottom"
            padding={{
              top: 1, right: 0, bottom: 50, left: 0
            }}
            margin="40px 40px"
          />
        </div>
      </div>

      <div className="min-w-full mt-5 ml-9">
        <div className="h-96 w-[68rem] rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px rgba(12,12,13,0.1)] overflow-hidden">
          <BarChart
            data={barChartData}
            title="Increase In Manpower" // Dynamic title
            legendPosition="right"
            legendPadding={40}
            chartPadding={20}
          />
        </div>
      </div>
    </div>
  );
};

export default InwardOutWardChartPage;
