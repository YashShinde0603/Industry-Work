import React from 'react';
import { PieChart } from '../Index';
import pieChartData from '../../data/pieChartData';

interface Material {
  name: string;
  percentage: string;
}

interface PieChartSectionProps {
  materials: Material[];
}

const PieChartSection: React.FC<PieChartSectionProps> = ({ materials }) => {
  return (
    <div className="border rounded-xl overflow-x-auto ml-3 w-[71rem]">
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
        <div className="col-span-1 pl-1 flex justify-center items-center" style={{ padding: '20px' }}>
          <PieChart
            data={pieChartData}
            legendPosition="right"
            padding={{
              top: 20,
              right: 10,
              bottom: 0,
              left: 20,
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
  );
};

export default PieChartSection;
