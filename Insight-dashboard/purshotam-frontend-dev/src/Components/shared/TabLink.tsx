import React from 'react';
import { Link } from 'react-router-dom';
import { TabConfigType } from '../../lib/DataType/TabType';

interface TabLinkProps extends TabConfigType {
  active: boolean;
  onClick: () => void;
}

const TabLink: React.FC<TabLinkProps> = (
  {
    to, active, label, colorClass, onClick
  }
) => {
  return (
    <div className="relative flex items-center gap-2 ml-[0.3rem] md:text-sm">
      <div className={`w-4 h-4 rounded ${colorClass}`} />
      <Link
        to={to}
        onClick={onClick}
        className={`relative ${active ? 'text-black' : 'text-gray-600'}`}
      >
        {label}
      </Link>
      {active && (
        <div className="absolute bottom-[-12px] left-0 w-full h-[4px] bg-[#0F60FF] rounded-full z-20" />
      )}
    </div>
  );
};

export default TabLink;
