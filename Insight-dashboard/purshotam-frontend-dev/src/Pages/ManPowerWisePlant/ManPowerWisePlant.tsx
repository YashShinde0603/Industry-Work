import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@radix-ui/themes';
import NewDatatable, { DatatableThead } from '../../Components/dataTable/NewDatatable';
import {
  BarChart,
  PieChart,
} from '../../Components/Index';
import { LinkCarousel, Tab } from '../../Components/shared';
import barChartData from '../../data/barChart';
import pieChartData from '../../data/pieChartData';
import { manPowerTableType } from '../../lib/DataType/manPowerTableType';

const tabs = [
  {
    to: '/man-power',
    label: 'Table View',
    colorClass: 'bg-emerald-400',
  },
  {
    to: '/man-power-chart',
    label: 'Chart View',
    colorClass: 'bg-purple-600 bg-opacity-50',
  },
];

const menuItems = ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E', 'Plant F'];

const ManPowerWisePlant: React.FC = () => {
  const [inventory, setInventory] = useState<manPowerTableType[]>([]);

  useEffect(() => {
    const dummyData: manPowerTableType[] = [
      {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
      {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
      {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
      {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
           {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
      {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
           {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
      {
        department: 'Plant C',
        names: '2024-08-27',
      },
      {
        department: 'Plant A',
        names: '2024-08-25',
      },
      {
        department: 'Plant B',
        names: '2024-08-26',
      },
    ];
    setInventory(dummyData);
  }, []);

  const THead: DatatableThead[] = [
    {
      element: 'Department'
    },
    {
      element: 'Names'
    },
  ];

  const TBodyRender = (item: manPowerTableType) => {
    return {
      department: `${item.department}`,
      names: `${item.names}`,
    };
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Tab Navigation */}
      <Tab tabs={tabs} />

      <LinkCarousel menuItems={menuItems} />

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
                title="Increase In Manpower"
                legendPosition="right"
                legendPadding={40}
                chartPadding={20}
              />
            </div>
            <div className="w-full rounded-xl border border-gray-300 shadow-sm p-4">
              <BarChart
                data={barChartData}
                title="Increase In Manpower"
                legendPosition="right"
                legendPadding={40}
                chartPadding={20}
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <div className="w-full h-80 -mt-[28rem] rounded-xl border border-gray-300 shadow-sm p-4">
            {/* <BarChart
              data={barChartData}
              title="Increase In Manpower"
              legendPosition="right"
              legendPadding={40}
              chartPadding={20}
            /> */}
          </div>
        </div>
      </div>

      {/* table */}
      <div className="w-[30%] absolute h-[48rem] top-[12rem] left-[56rem] items-center justify-center">
        <ScrollArea type="always" scrollbars="vertical">
          <NewDatatable
            data={inventory}
            tBodyRender={TBodyRender}
            tHead={THead}
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default ManPowerWisePlant;
