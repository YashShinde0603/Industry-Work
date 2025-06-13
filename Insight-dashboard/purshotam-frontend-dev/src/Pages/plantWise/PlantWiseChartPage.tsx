import React from 'react';
import { BarChart, PieChart } from '../../Components/Index';
import { LinkCarousel, Tab } from '../../Components/shared';
import barChartData from '../../data/barChart';
import pieChartData from '../../data/pieChartData';

const tabs = [
  { to: '/plant-wise', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/plant-wise-chart', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const menuItems = ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E', 'Plant F'];

const PlantWiseChartPage: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Tab Navigation */}
      <Tab tabs={tabs} />

      {/* Link Carousel */}
      <div className="-mt-3">
        <LinkCarousel menuItems={menuItems} />
      </div>

      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">
        <div className="col-span-2 flex flex-col justify-between space-y-4">
          <div className="flex justify-center">
            <div className="w-full h-80 rounded-xl border border-gray-300 shadow-sm p-4">
              <PieChart
                data={pieChartData}
                legendPosition="bottom"
                padding={{
                  top: 2,
                  right: 10,
                  bottom: 0,
                  left: 10,
                }}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-full rounded-xl border border-gray-300 shadow-sm p-4">
              <BarChart
                data={barChartData}
                title="Increase In Manpower" // Dynamic title
                legendPosition="right"
                legendPadding={40}
                chartPadding={20}
              />
            </div>
            <div className="w-full rounded-xl border border-gray-300 shadow-sm p-4">
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

        <div className="col-span-2 flex items-center justify-center">
          <div className="w-full h-80 -mt-[28rem] rounded-xl border border-gray-300 shadow-sm p-4">
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
    </div>
  );
};

export default PlantWiseChartPage;
