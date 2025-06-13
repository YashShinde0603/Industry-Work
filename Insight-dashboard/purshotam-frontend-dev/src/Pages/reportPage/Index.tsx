import { ScrollArea } from '@radix-ui/themes';
import React from 'react';
import MISDataTable from '../../Components/misDataTable/MISDataTable';
import { LinkCarousel, Tab } from '../../Components/shared';
import productionData from '../../data/dummyData.json';

// Production data row interface
interface ProductionDataRow {
  date: string;
  mill1FGProduction: number;
  mill2FGProduction: number;
  scrapGeneration: number;
  totalFG: number;
}

interface IncomingMISDataRow {
  date: string | undefined;
  from: string;
  noOfVehicles: number;
  kantaWeight: number | undefined;
  erpWeight: string | number;
  materialType: string;
}

interface DispatchMISDataRow {
  date: string; // Ensure this is a string
  to: string;
  noOfVehicles: number;
  kantaWeight: number | undefined;
  erpWeight: number | undefined;
  profile: string;
  partName: string;
}

// Inventory data row interface
interface InventoryDataRow {
  Date: string;
  TotalKantaWeight: number;
  rawMaterial: number;
  FG: number;
  scrap: number;
  PackingMaterial: number;
}

// Tabs configuration
const tabs = [
  { to: '#', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '#', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

// ReportPage component
const ReportPage: React.FC = () => {
  // Mapping production data from JSON
  const productionDataMapped: ProductionDataRow[] = productionData.production.map((item) => ({
    date: item.date,
    mill1FGProduction: item.mill1FgProduction,
    mill2FGProduction: item.mill2FgProduction,
    scrapGeneration: item.scrapGeneration,
    totalFG: item.totalFg,
  }));

  // Mapping incoming MIS data from JSON
  const incomingMisData: IncomingMISDataRow[] = productionData.incomingMis.map((item) => ({
    date: item.date,
    from: item.from,
    noOfVehicles: item.noOfVehicles,
    kantaWeight: item.kantaWeight,
    erpWeight: item.erpWeight,
    materialType: item.materialType,
  }));

  // Mapping dispatch MIS data from JSON
  const dispatchMisData: DispatchMISDataRow[] = productionData.dispatchMis.map((item) => ({
    date: item.date || '', // Provide a default value if date is undefined
    to: item.to,
    noOfVehicles: item.noOfVehicles,
    kantaWeight: item.kantaWeight,
    erpWeight: item.erpWeight,
    profile: item.profile,
    partName: item.partName,
  }));

  // Mapping inventory data from JSON
  const inventoryData: InventoryDataRow[] = productionData.MISInventory.map((item) => ({
    Date: item.Date,
    TotalKantaWeight: item.TotalKantaWeight,
    rawMaterial: item.rawMaterial,
    FG: item.FG,
    scrap: item.scrap,
    PackingMaterial: item.PackingMaterial,
  }));

  const productionColumns = [
    { header: 'Date', accessor: 'date' as keyof ProductionDataRow },
    { header: 'Mill 1 FG Production', accessor: 'mill1FGProduction' as keyof ProductionDataRow },
    { header: 'Mill 2 FG Production', accessor: 'mill2FGProduction' as keyof ProductionDataRow },
    { header: 'Scrap Generation', accessor: 'scrapGeneration' as keyof ProductionDataRow },
    { header: 'Total FG', accessor: 'totalFG' as keyof ProductionDataRow },
  ];

  const incomingColumns = [
    { header: 'Date', accessor: 'date' as keyof IncomingMISDataRow },
    { header: 'From', accessor: 'from' as keyof IncomingMISDataRow },
    { header: 'No of Vehicles', accessor: 'noOfVehicles' as keyof IncomingMISDataRow },
    { header: 'Kanta Weight', accessor: 'kantaWeight' as keyof IncomingMISDataRow },
    { header: 'ERP Weight', accessor: 'erpWeight' as keyof IncomingMISDataRow },
    { header: 'Material Type', accessor: 'materialType' as keyof IncomingMISDataRow },
  ];

  const dispatchColumns = [
    { header: 'Date', accessor: 'date' as keyof DispatchMISDataRow },
    { header: 'To', accessor: 'to' as keyof DispatchMISDataRow },
    { header: 'No of Vehicles', accessor: 'noOfVehicles' as keyof DispatchMISDataRow },
    { header: 'Kanta Weight', accessor: 'kantaWeight' as keyof DispatchMISDataRow },
    { header: 'ERP Weight', accessor: 'erpWeight' as keyof DispatchMISDataRow },
    { header: 'Profile', accessor: 'profile' as keyof DispatchMISDataRow },
    { header: 'Part Name', accessor: 'partName' as keyof DispatchMISDataRow },
  ];

  const inventoryColumns = [
    { header: 'Date', accessor: 'Date' as keyof InventoryDataRow },
    { header: 'Total Kanta Weight', accessor: 'TotalKantaWeight' as keyof InventoryDataRow },
    { header: 'Raw Material', accessor: 'rawMaterial' as keyof InventoryDataRow },
    { header: 'FG', accessor: 'FG' as keyof InventoryDataRow },
    { header: 'Scrap', accessor: 'scrap' as keyof InventoryDataRow },
    { header: 'Packing Material', accessor: 'PackingMaterial' as keyof InventoryDataRow },
  ];

  // Background colors for even and odd rows
  const bgColorEven = '#FEFAE5';
  const bgColorOdd = '#E6ECF5';
  const stockColorEven = '#E5ECF6';
  const stockColorOdd = '#E3F5FF';
  const manPowerColorOdd = '#E87B35';
  const manPowerColorEven = '#E6ECF5';

  const menuItems = [
    'P-GHZ', 'P-2', 'P-3', 'P-4', 'P-5', 'P-6', 'P-7', 'P-8', 'P-9', 'P-10',
    'P-JODHPUR', 'P-Taluja slitting bansal(MH)', 'P-Taluja (MH)',
    'P-Rolling Hosapete', 'P-Slitting hosapete', 'P-Sra Hyderabad',
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="z-20">
        <Tab tabs={tabs} />
      </div>

      <LinkCarousel menuItems={menuItems} />

      <div className="h-[500px] text-sm mt-4 p-4 mb-4 border border-gray-300 rounded-lg">
        <ScrollArea type="always" scrollbars="both">
          <MISDataTable
            title="Inventory Data"
            data={inventoryData}
            columns={inventoryColumns}
            bgColorEven={stockColorEven}
            bgColorOdd={stockColorOdd}
          />
        </ScrollArea>
      </div>

      {/* Production, manPower */}
      <div className="h-[500px] text-sm text-nowrap mb-4 text-clip p-4 w-full border border-gray-300 rounded-lg">
        <ScrollArea type="always" scrollbars="both">
          <div className="flex justify-between gap-8 ">
            <div className="w-[40rem]">
              <MISDataTable
                title="Production Data"
                data={productionDataMapped}
                columns={productionColumns}
                bgColorEven={bgColorEven}
                bgColorOdd={bgColorOdd}
              />
            </div>
            <div className="w-[40rem]">
              <MISDataTable
                title="Man Power"
                data={productionDataMapped}
                columns={productionColumns}
                bgColorEven={manPowerColorEven}
                bgColorOdd={manPowerColorOdd}
              />
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Incoming MIS Data Table */}
      <div className="h-[500px] text-sm p-4 mb-4 border border-gray-300 rounded-lg">
        <ScrollArea type="always" scrollbars="both">
          <MISDataTable
            title="Incoming MIS Data"
            data={incomingMisData}
            columns={incomingColumns}
            bgColorEven={bgColorEven}
            bgColorOdd={bgColorOdd}
          />
        </ScrollArea>
      </div>

      {/* Dispatch MIS Data Table */}
      <div className="h-[500px] text-sm text-nowrap mb-4 p-4 min-w-full border border-gray-300 rounded-lg">
        <ScrollArea type="always" scrollbars="both">
          <MISDataTable
            title="Dispatch MIS Data"
            data={dispatchMisData}
            columns={dispatchColumns}
            bgColorEven={bgColorEven}
            bgColorOdd={bgColorOdd}
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default ReportPage;

// start date and end date par filter bano, and same with plant name
