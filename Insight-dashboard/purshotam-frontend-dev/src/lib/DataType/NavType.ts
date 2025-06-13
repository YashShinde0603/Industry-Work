export interface NavItemType {
  icon: string;
  showBadge: boolean;
  showIcon: boolean;
  propPadding: string;
  propTop: string;
  propLeft: string;
  link?: string;
  label?: string;
}

export type NavItemDataType = {
  key: number;
  icon: string;
  showBadge: boolean;
  showIcon: boolean;
  propPadding: string;
  propTop?: string;
  propLeft?: string;
  link: string;
  active: boolean;
  label?: string;
  isExpanded: boolean;
  height?: string;
  width?: string;
};
