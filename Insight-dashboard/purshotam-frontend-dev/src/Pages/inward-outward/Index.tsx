import React from 'react';
import { Package, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DateTable from '../../Components/dataTable/DataTable';
import { InventoryCard } from '../../Components/Index';
import inventoryCardsData from '../../data/InventoryCardsData';
import { LinkCarousel, Tab } from '../../Components/shared';
import { dataTableProps } from '../../lib/DataType/dataTableType';

const tabs = [
  { to: '/inward-outward-page', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/inward-outward-chart-page', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const menuItems = ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E', 'Plant F'];

const CheckboxBody = () => (
  <input type="checkbox" className="cursor-pointer" />
);

const InwardOutWardPage: React.FC = () => {
  const navigate = useNavigate();

  const plantNameTemplate = (rowData: dataTableProps) => {
    return (
      <button
        type="button"
        onClick={() => navigate(rowData.link)}
        className="text-[#515761] hover:underline cursor-pointer"
        style={{ background: 'none', border: 'none', padding: 0 }}
        role="link"
      >
        {rowData.plantName}
      </button>
    );
  };

  const data: dataTableProps[] = [
    {
      id: 1,
      plantName: 'Plant B',
      rawMaterial: 'Aluminum',
      finishGood: '50 units',
      scrap: '10 units',
      packagingMaterial: '6/22/2024',
      status: 'not ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 2,
      plantName: 'Plant A',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
  ];

  const columns = [
    {
      header: 'Id',
      body: CheckboxBody,
    },
    {
      field: 'plantName' as keyof dataTableProps,
      header: 'Plant Name',
      body: plantNameTemplate,
      bgColor: '#E6ECF5'
    },
    {
      field: 'plantHead' as keyof dataTableProps,
      header: 'Plant Head'
    },
    { field: 'productionHead' as keyof dataTableProps, header: 'Production Head' },
    { field: 'supervisor' as keyof dataTableProps, header: 'Supervisor' },
    { field: 'inventoryManager' as keyof dataTableProps, header: 'Inventory Manager' },
    { field: 'worker' as keyof dataTableProps, header: 'Worker' },
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
      {/* Inventory Breakdown */}
      <div className="w-[71.8rem] ml-4 border border-gray-300 rounded-lg">
        <DateTable
          data={data}
          columns={columns}
          headerBgColor="bg-[#1677FF]/10"
          headerTextColor="text-black"
          rowBgColor="bg-white"
          rowTextColor="text-gray-600"
          borderColor="border-grey-300"
        />
      </div>
    </div>
  );
};

export default InwardOutWardPage;
