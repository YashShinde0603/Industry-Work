import { Separator } from '@radix-ui/themes';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TabConfigType } from '../../lib/DataType/TabType';
import FiltersButton from './FiltersButton';
import TabLink from './TabLink';
import CalendarButton from '../calendar/CalendarButton';

interface TabProps {
  tabs: TabConfigType[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col min-w-full p-2 mb-3 ">
      <div className="flex flex-wrap items-center justify-between w-full mb-4">
        <div className="flex gap-4 mb-2 md:mb-0">
          <div className="absolute flex gap-8 text-sm font-medium tracking-normal text-gray-600 top-[4.8rem] left-[7.1rem] md:text-base">
            {tabs.map((tab, index) => (
              <TabLink
                key={index}
                to={tab.to}
                active={location.pathname === tab.to}
                label={tab.label}
                colorClass={tab.colorClass}
                onClick={() => handleTabClick(tab.to)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs tracking-normal text-gray-500">
          <CalendarButton />
          <FiltersButton />
          <Separator className="w-full absolute left-[0.01%] right-[0.1rem] mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Tab;
