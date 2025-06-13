import React from 'react';

interface DotData {
  title: string;
  percentage: number;
  color: string;
}

interface ISharedDots {
  data: DotData[];
}

const Dots: React.FC<ISharedDots> = ({ data }) => {
  return (
    <div className="flex flex-col text-sm font-medium tracking-tight leading-none max-w-[336px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full gap-4 mt-2 border-0 border-gray-300 border-solid"
        >
          <div className="flex items-center self-stretch gap-3 my-auto text-gray-600">
            <div
              className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-[100px]"
              style={{ backgroundColor: item.color }}
            />
            <div className="self-stretch my-auto">{item.title}</div>
          </div>
          <div className="self-stretch my-auto text-black">
            {item.percentage}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dots;
