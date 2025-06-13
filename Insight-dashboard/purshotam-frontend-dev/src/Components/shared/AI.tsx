import React from 'react';
import { Separator } from '@radix-ui/themes';
import { Search, Sparkles } from 'lucide-react';

interface Props {
  label: string;
}

const AI: React.FC<Props> = ({ label }) => {
  return (
    <div className="flex flex-col min-w-full p-2 mb-3 -mt-3 -ml-3">
      <div className="flex flex-wrap justify-between w-full pl-4 max-md:pl-5">
        {/* Inventory Label */}
        <div className="flex my-auto ml-1.5 text-base font-medium tracking-normal text-gray-600">
          <div className="absolute w-4 h-4  rounded top-[1.4rem] bg-emerald-200" />
          <div className="ml-6 ">{label}</div>
        </div>

        {/* AI Search */}
        <div className="flex items-center gap-2 px-2 py-0 rounded-full shadow-lg bg-white min-h-[34px] max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
          <div className="flex items-center gap-2 py-1 px-2 text-[#ABB7C2]">
            <Search size={15} />
          </div>
          <input
            type="text"
            placeholder="Ask AI..."
            className="flex-1 text-xs text-gray-400 placeholder-gray-400 bg-transparent border-none outline-none sm:text-sm lg:text-base"
          />
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#41D9FB] via-[#FDA16E] to-[#BD3FFC]">
            <Sparkles size={15} className="text-[#FFC800]" />
          </div>
        </div>
      </div>

      <Separator className="w-full absolute left-[0.01%] right-[0.1rem] mt-[2.3rem]" />
    </div>
  );
};

export default AI;
