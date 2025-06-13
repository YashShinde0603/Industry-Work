import React from 'react';
import { PieChart } from '../../Components/Index';
import pieChartData from '../../data/pieChartData';

const PlantsPage: React.FC = () => {
  return (
    <div className="grid mb-4 gap-x-5 gap-y-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="py-8">
        <PieChart data={pieChartData} legendPosition="bottom" />
        <PieChart data={pieChartData} legendPosition="bottom" />
        <PieChart data={pieChartData} legendPosition="bottom" />
      </div>
    </div>
  );
};

export default PlantsPage;
