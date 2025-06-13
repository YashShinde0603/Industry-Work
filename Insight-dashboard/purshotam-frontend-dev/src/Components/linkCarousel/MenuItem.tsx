import React from 'react';

interface MenuItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-8  py-[.28rem] rounded-lg transition-colors min-w-[150px] duration-200 font-medium text-base ${
      selected ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border border-gray-300'
    } ${!selected && 'hover:bg-gray-100'} mr-[1.5rem]`}
  >
    {label}
  </button>
);

export default MenuItem;
