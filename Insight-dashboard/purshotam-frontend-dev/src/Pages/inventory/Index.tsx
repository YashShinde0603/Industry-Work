/* eslint-disable @typescript-eslint/no-explicit-any */
import { Package, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InventoryCard } from '../../Components/Index';
import inventoryCardsData from '../../data/InventoryCardsData';
import { Tab } from '../../Components/shared';
// import { dataTableProps } from '../../lib/DataType/dataTableType';
import NewDatatable, { DatatableThead } from '../../Components/dataTable/NewDatatable';
import { InventoryCardType, InventoryType } from '../../lib/DataType/InventoryDataType';
import { DataTableCheckBox } from '../../Components/dataTable/DataTableComponent';
import { InventoryDemoData } from '../../lib/DemoData/Inventory';

const tabs = [
  { to: '/inventory', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/chart-view', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const InventoryPage: React.FC = () => {
  const navigate = useNavigate();

  const plantNamePriview = (plantName: string) => (
    <button
      type="button"
      onClick={() => navigate(`/inventory/${plantName}`)}
      className="text-[#515761] hover:underline cursor-pointer"
      style={{ background: 'none', border: 'none', padding: 0 }}
      role="link"
    >
      {plantName}
    </button>
  );

  const [inventory, setInventory] = useState<InventoryType[]>([]);
  const [inventoryCard, setInventoryCard] = useState<any>({
    totalFG: 0,
    totalKantaWeight: 0,
    totalNetWeight: 0,
    totalPackingMaterial: 0,
    totalScrap: 0
  });

  useEffect(() => {
    const inventoryTable: InventoryType[] = InventoryDemoData.reduce((acc, current) => {
      const existingIndex = acc.findIndex((item) => item.plantName === current.plantName);
      if (existingIndex !== -1) {
        acc[existingIndex].totalFG += current.totalFG;
        acc[existingIndex].totalKantaWeight += current.totalKantaWeight;
        acc[existingIndex].totalNetWeight += current.totalNetWeight;
        acc[existingIndex].totalPackingMaterial += current.totalPackingMaterial;
        acc[existingIndex].totalScrap += current.totalScrap;
      } else {
        acc.push(current);
      }
      return acc;
    }, [] as InventoryType[]);

    const inventoryTableCarrObject = inventoryTable.reduce((acc, current) => {
      acc.totalFG += current.totalFG;
      acc.totalKantaWeight += current.totalKantaWeight;
      acc.totalNetWeight += current.totalNetWeight;
      acc.totalPackingMaterial += current.totalPackingMaterial;
      acc.totalScrap += current.totalScrap;
      return acc;
    }, {
      totalFG: 0,
      totalKantaWeight: 0,
      totalNetWeight: 0,
      totalPackingMaterial: 0,
      totalScrap: 0
    } as InventoryCardType);
    setInventoryCard(inventoryTableCarrObject)
    setInventory(inventoryTable)
  }, [])

  const THead: DatatableThead[] = [
    {
      element: <DataTableCheckBox titel='#' />
    },
    {
      element: "Plant Name"
    },
    {
      element: "Total Kanta Weight"
    },
    {
      element: "Total Net Weight"
    },
    {
      element: "total FG"
    },
    {
      element: "Total Scrap"
    },
    {
      element: "Total Packing Material"
    }
  ]

  const TBodyRender = (item: InventoryType, index: number) => {
    return {
      id: <DataTableCheckBox titel={(index + 1).toString()} />,
      plantName: plantNamePriview(item.plantName),
      totalKantaWeight: `${Number(item.totalKantaWeight).toFixed(2)} Mt.`,
      totalNetWeight: `${Number(item.totalNetWeight).toFixed(2)} Mt.`,
      totalFG: `${Number(item.totalFG).toFixed(2)} Mt.`,
      totalScrap: `${Number(item.totalScrap).toFixed(2)} Mt.`,
      totalPackingMaterial: `${Number(item.totalPackingMaterial).toFixed(2)} Mt.`,
    }
  }

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />
      {/* Inventory Cards */}
      <div
        className="grid mb-4 gap-x-5 gap-y-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ padding: '0px 2rem 0 0' }}
      >
        {inventoryCardsData.map((cardData, index) => {
          return (
            <InventoryCard
              key={index}
              title={cardData.title}
              value={Number(inventoryCard[cardData.slug] ?? 0).toFixed(2)}
              percentageChange={cardData.percentageChange}
              titleColor={cardData.titleColor}
              percentageChangeColor={cardData.percentageChangeColor}
              icon={<Package className="w-[19px] h-[19px] text-green-500" />}
              percentageIcon={<TrendingUp className="w-[14px] h-[14px] text-green-500" />}
              iconBgColor={cardData.iconBgColor}
            />
          )
        })}
      </div>
      {/* Inventory Breakdown */}
      <div className="" style={{ padding: '20px' }}>
        {/* <DateTable
          data={data}
          columns={columns}
          headerBgColor="bg-[#1677FF]/10"
          headerTextColor="text-black"
          rowBgColor="bg-white"
          rowTextColor="text-gray-600"
          borderColor="border-grey-300"
        /> */}
        <NewDatatable
          data={inventory}
          tBodyRender={TBodyRender}
          tHead={THead}
        />
      </div>
    </div>
  );
};

export default InventoryPage;
