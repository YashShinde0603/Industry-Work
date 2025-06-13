import { Package, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { DataTableCheckBox } from '../../Components/dataTable/DataTableComponent';
import NewDatatable, { DatatableThead } from '../../Components/dataTable/NewDatatable';
import { InventoryCard } from '../../Components/Index';
import { LinkCarousel, Tab } from '../../Components/shared';
import inventoryCardsDataProduction from '../../data/cards/production';
import { InventoryType } from '../../lib/DataType/InventoryDataType';

const tabs = [
  { to: '/sales', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/sales-chart-view', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const menuItems = ['Finsih Good', 'Scrap', 'Plant C', 'Plant D', 'Plant E', 'Plant F'];

const SalesPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryType[]>([]);

  const plantNamePriview = (plantName: string) => (
    <button
      type="button"
      className="text-[#515761] hover:underline cursor-pointer"
      style={{ background: 'none', border: 'none', padding: 0 }}
      role="link"
    >
      {plantName}
    </button>
  );

  const statusIconTemplate = (status: boolean) => (
    status ? (
      <span className="text-green-500 font-semibold">Ready to Dispatch</span>
    ) : (
      <span className="text-red-500 font-semibold">Not Ready to Dispatch</span>
    )
  );

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/inventory')
      .then((data) => data.json())
      .then((res) => {
        if (res.status) {
          setInventory(res.data);
        }
      })
      .catch(() => {
      });
  }, []);

  const THead: DatatableThead[] = [
    {
      element: <DataTableCheckBox titel='#' />
    },
    {
      element: 'Plant Name'
    },
    {
      element: 'Plant Head'
    },
    {
      element: 'Production Head'
    },
    {
      element: 'Supervisor'
    },
    {
      element: 'Inventory Manager'
    },
    {
      element: 'Worker'
    }
  ];

  const TBodyRender = (item: InventoryType, index: number) => {
    return {
      id: <DataTableCheckBox titel={(index + 1).toString()} />,
      plantName: plantNamePriview('PPPL GHZ'),
      rawMaterial: `${item.totalNetWeight} Mt.`,
      finishGoods: `${item.totalKantaWeight} Mt.`,
      scrap: `${item.totalPackingMaterial} Mt.`,
      packagingMaterial: `${item.totalScrap} Mt.`,
      status: statusIconTemplate(true),
    };
  };

  return (
    <div className="flex flex-col overflow-x-hidden">

      <Tab tabs={tabs} />
      <div className="-mt-4 mb-[0.9rem]">
        <LinkCarousel menuItems={menuItems} />
      </div>
      <div
        className="grid mb-4 gap-x-5 gap-y-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ padding: '0px 2rem 0 0' }}
      >
        {inventoryCardsDataProduction.map((cardData, index) => (
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
      <div className="-mt-8" style={{ padding: '20px' }}>
        <NewDatatable
          data={inventory}
          tBodyRender={TBodyRender}
          tHead={THead}
        />
      </div>
    </div>
  );
};

export default SalesPage;
