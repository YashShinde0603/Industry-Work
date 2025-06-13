import { ReactNode } from 'react';

export interface InventoryCardDataType  {
  title: string;
  value: number | string;
  percentageChange: string;
  titleColor: string;
  percentageChangeColor: string;
  iconBgColor: string;
  additionalIcon?: ReactNode;
  slug: string
}