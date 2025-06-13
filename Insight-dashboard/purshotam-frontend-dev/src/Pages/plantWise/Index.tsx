import { Package, TrendingUp } from 'lucide-react';
import React from 'react';
import { InventoryCard } from '../../Components/Index';
import inventoryCardsData from '../../data/InventoryCardsData';
import { Tab } from '../../Components/shared';

const tabs = [
  { to: '/plant-wise', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/plant-wise-chart', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const PlantWisePage: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />
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
    </div>
  );
};

export default PlantWisePage;
