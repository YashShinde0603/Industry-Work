import { InventoryCardDataType } from '../../lib/DataType/InventoryCardDataType';

const inventoryCardsDataManPower: InventoryCardDataType[] = [
  {
    title: 'Morning Shift',
    value: '0',
    percentageChange: '+0%',
    titleColor: 'text-[#E87B35]',
    percentageChangeColor: 'text-green-500 bg-green-500',
    iconBgColor: 'bg-orange-400 bg-opacity-10',
    slug: "MorningShift"
  },
  {
    title: 'Night Shift',
    value: '0',
    percentageChange: '+0%',
    titleColor: 'text-[#1EB163]',
    percentageChangeColor: 'text-green-500 bg-green-500',
    iconBgColor: 'bg-green-500 bg-opacity-10',
    slug: "NightShift"
  },
  {
    title: 'Man Power Shortage',
    value: '0',
    percentageChange: '+0%',
    titleColor: 'text-[#FF0000]',
    percentageChangeColor: 'text-green-500 bg-green-500',
    iconBgColor: 'bg-red-500 bg-opacity-10',
    slug: "ManPowerShortage"
  },
  {
    title: 'Active Man Power',
    value: '0',
    percentageChange: '+0%',
    titleColor: 'text-[#606060]',
    percentageChangeColor: 'text-green-500 bg-green-500',
    iconBgColor: 'bg-gray-300 bg-opacity-10',
    slug: "ActiveManPower"
  },
  {
    title: 'Idle Man Power',
    value: '0',
    percentageChange: '+0%',
    titleColor: 'text-[#606060]',
    percentageChangeColor: 'text-green-500 bg-green-500',
    iconBgColor: 'bg-gray-300 bg-opacity-10',
    slug: "IdleManPower"
  },
  {
    title: 'Total Man Power',
    value: '0',
    percentageChange: '+0%',
    titleColor: 'text-[#606060]',
    percentageChangeColor: 'text-green-500 bg-green-500',
    iconBgColor: 'bg-orange-400 bg-opacity-10',
    slug: "TotalManPower"
  },
];

export default inventoryCardsDataManPower;
