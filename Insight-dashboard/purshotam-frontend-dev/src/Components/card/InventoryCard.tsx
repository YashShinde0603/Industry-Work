import React, { ReactNode } from 'react';

interface Props {
  title: string;
  value: number | string;
  percentageChange: string;
  titleColor: string;
  percentageChangeColor: string;
  icon: ReactNode;
  percentageIcon: ReactNode;
  iconBgColor: string;
  additionalIcon?: React.ReactNode;
}

const InventoryCard: React.FC<Props> = ({
  title,
  value,
  percentageChange,
  titleColor,
  percentageChangeColor,
  icon,
  percentageIcon,
  iconBgColor,
  additionalIcon,
}) => {
  return (
    <div className="flex flex-col mx-auto justify-between p-3 sm:p-4 mb-4 w-full md:ml-4 lg:ml-4 rounded-xl border  border-[#D7D7D7]/55 shadow-[0px_1px_4px_rgba(12,12,13,0.1)]">
      {/* sm:w-[20rem] md:w-[18rem]  lg:w-[16.5rem] xl:w-[24rem] h-[8rem] md:h-[9rem] */}
      <div className="flex items-start">
        <div
          className={`flex justify-center items-center w-8 h-8 md:w-10 md:h-10 lg:rounded-full rounded-xl ${iconBgColor}`}
        >
          {icon}
        </div>
        <div className="flex flex-col flex-1 ml-3 md:ml-4">
          <div className="flex items-center justify-between">
            <div
              className={`text-sm md:text-base lg:text-sm xl:text-sm font-semibold ${titleColor} whitespace-nowrap`}
            >
              {title}
            </div>
            {additionalIcon && (
              <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-neutral-100 md:h-7 md:w-7">
                {additionalIcon}
              </div>
            )}
          </div>
          <div className="flex items-center gap-x-1.5 md:gap-x-2 mt-2">
            <div className="text-base font-semibold text-black md:text-lg whitespace-nowrap">
              {value}
            </div>
            <div
              className={`flex items-center gap-x-1.5 md:gap-x-2 px-1 py-0.5 text-xs md:text-sm leading-loose rounded-lg bg-opacity-10 ${percentageChangeColor}`}
            >
              <div>{percentageChange}</div>
              {percentageIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
