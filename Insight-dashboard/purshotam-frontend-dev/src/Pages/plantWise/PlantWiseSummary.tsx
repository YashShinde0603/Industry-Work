import { Package, TrendingUp } from 'lucide-react';
import React from 'react';
import { InventoryCard } from '../../Components/Index';
import ProjectProgress from '../../Components/chart/ProgressBar';
import { Tab } from '../../Components/shared';
import inventoryCardsData from '../../data/InventoryCardsData';

const tabs = [
  { to: '/plant-wise', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/plant-wise-chart', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const projects = [
  { name: 'Project 1', value: 143382 },
  { name: 'Project 2', value: 87974 },
  { name: 'Project 3', value: 45211 },
  { name: 'Project 4', value: 21893 },
  { name: 'Project 1', value: 143382 },
  { name: 'Project 2', value: 87974 },
  { name: 'Project 3', value: 45211 },
  { name: 'Project 4', value: 21893 },
  { name: 'Project 1', value: 143382 },
  { name: 'Project 2', value: 87974 },
  { name: 'Project 3', value: 45211 },
  { name: 'Project 4', value: 21893 },
  { name: 'Project 1', value: 143382 },
  { name: 'Project 2', value: 87974 },
  { name: 'Project 3', value: 45211 },
  { name: 'Project 4', value: 21893 },
  { name: 'Project 1', value: 143382 },
  { name: 'Project 2', value: 87974 },
  { name: 'Project 3', value: 45211 },
  { name: 'Project 4', value: 21893 },
  { name: 'Project 1', value: 143382 },
  { name: 'Project 2', value: 87974 },
  { name: 'Project 3', value: 45211 },
  { name: 'Project 4', value: 21893 },
];

const PlantWiseSummary: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />

      {/* Inventory Cards and BarChart Section */}
      <div className="flex flex-wrap justify-between w-full px-4 mb-4 space-y-4 lg:space-y-0">
        <div className="grid gap-x-5 gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full lg:w-[50%]">
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
        <div className="w-full lg:w-[45%]">
          <div className="w-full h-[20.8rem] rounded-xl border border-[#D7D7D7]/55 shadow-sm overflow-hidden">
          <ProjectProgress title={'Project Program'} projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantWiseSummary;
