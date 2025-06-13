import React from 'react';
import { Link } from 'react-router-dom';
import type { NavItemDataType } from '../../lib/DataType/NavType';

const NavItem: React.FC<NavItemDataType> = ({
  icon,
  showBadge,
  showIcon,
  propPadding,
  propTop,
  propLeft,
  link,
  active,
  label,
  isExpanded,
}) => (
  <div>
    <Link
      to={link || '#'}
      className={`relative flex items-center justify-start transition-colors duration-300 ${active ? 'bg-[#d9ebff] w-full rounded-full transition-all duration-200' : 'bg-transparent'
        }`}
      style={{
        padding: propPadding,
        top: propTop,
        left: propLeft,
      }}
    >
      {showIcon && (
        <img
          src={icon}
          alt={label || 'nav icon'}
          className="w-6 h-6"
          style={{ width: '24px', height: '24px' }}
        />
      )}
      {isExpanded && (
        <span className="ml-4 font-semibold text-black">{label}</span>
      )}
      {showBadge && (
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full"
          style={{ top: '0.5rem', right: '0.5rem' }}
        >
          1
        </span>
      )}
    </Link>
  </div>
);

export default NavItem;
