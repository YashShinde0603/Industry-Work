import { Package, TrendingUp } from 'lucide-react';
import React from 'react';

import inventoryCardsData from '../../data/InventoryCardsData';
import pieChartData from '../../data/pieChartData';
import { LinkCarousel, Tab } from '../../Components/shared';
import { InventoryCard, PieChart } from '../../Components/Index';

interface Material {
 name: string;
 percentage: string;
}

const tabs = [
  { to: '/sales', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/sales-chart-view', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const menuItems = ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E', 'Plant F'];

const SalesPlantWisePage: React.FC = () => {
 const materials: Material[] = [
  { name: 'Galvolume', percentage: '25%' },
  { name: 'Hot Roll', percentage: '50%' },
  { name: 'Cold Roll', percentage: '75%' },

  { name: 'Galvolume', percentage: '25%' },
  { name: 'Hot Roll', percentage: '50%' },
  { name: 'Cold Roll', percentage: '75%' },
  { name: 'Galvolume', percentage: '25%' },
  { name: 'Hot Roll', percentage: '50%' },
  { name: 'Cold Roll', percentage: '75%' },
  { name: 'Galvolume', percentage: '25%' },
  { name: 'Hot Roll', percentage: '50%' },
  { name: 'Cold Roll', percentage: '75%' },
  { name: 'Galvolume', percentage: '25%' },
  { name: 'Hot Roll', percentage: '50%' },
  { name: 'Cold Roll', percentage: '75%' }
];
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />
      <div className="-mt-4 mb-[0.9rem]">
      <LinkCarousel menuItems={menuItems} />
      </div>
      {/* Inventory Cards */}
      <div className="grid mb-4 gap-x-5 gap-y-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ padding: '0px 2rem 0 0' }}>
        {inventoryCardsData.map((cardData, index) => (
          <InventoryCard
            key={index}
            title={cardData.title}
            value={cardData.value}
            percentageChange={cardData.percentageChange}
            titleColor={cardData.titleColor}
            percentageChangeColor={cardData.percentageChangeColor}
            icon={<Package className="w-[19px] h-[19px] text-green-500" />}
            percentageIcon={<TrendingUp className="w-[14px] h-[14px] text-green-500" />}
            iconBgColor={cardData.iconBgColor}
          />
        ))}
      </div>
      {/* Make sure this container can scroll on medium screens */}
      <div className="border rounded-xl overflow-x-auto w-[71rem]">
        {/* Header */}
        <div className="grid grid-cols-4 bg-gray-100 p-4">
          <div className="font-semibold text-gray-700">RAW MATERIAL</div>
          <div className="text-center font-semibold text-gray-700">ERP</div>
          <div className="text-center font-semibold text-gray-700">Tally</div>
          <div className="text-center font-semibold text-gray-700">Physical</div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-4 border-b border-t border-gray-200">
          {/* Pie Chart */}
          <div className="col-span-1 flex justify-center items-center">
            <PieChart
              data={pieChartData}
              legendPosition="right"
              padding={{
                top: 20,
                right: 10,
                bottom: 10,
                left: 30,
              }}
            />
          </div>

          {/* Data Columns */}
          <div className="col-span-3 grid grid-cols-3 gap-y-1">
            {materials.map((material, idx) => (
              <div key={idx} className="flex flex-row text-center ml-20 items-center gap-2">
                <span className="text-gray-700">{material.name}</span>
                <span className="text-gray-900 font-bold">{material.percentage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-4 bg-gray-100 p-4">
          <div className="font-semibold text-gray-700">Total</div>
          <div className="text-center text-gray-900 font-semibold">00%</div>
          <div className="text-center text-gray-900 font-semibold">00%</div>
          <div className="text-center text-gray-900 font-semibold">00%</div>
        </div>
      </div>
    </div>
  );
};

export default SalesPlantWisePage;
