import React from 'react';

const FiltersButton: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-[90px] px-4 py-1 border border-zinc-200 rounded-2xl cursor-pointer font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v3.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V19a1 1 0 01-.553.894l-4 2A1 1 0 018 21v-6.586a1 1 0 00-.293-.707L1.293 8.293A1 1 0 011 7.586V4z"
        />
      </svg>
      <span>Filters</span>
    </div>
  );
};

export default FiltersButton;
