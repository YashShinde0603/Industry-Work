import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@radix-ui/themes';
import { useLocation } from 'react-router-dom';
import { NavItemType } from '../../lib/DataType/NavType';
import NavItem from './NavItem';

interface ISidebar {
  className?: string;
}

const Sidebar: React.FC<ISidebar> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const location = useLocation();
  const activeLink = location.pathname;

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  const navItemsTop: NavItemType[] = [
    {
      icon: '/assets/logo.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      label: 'Purshotam Profile',
    },
    {
      icon: '/assets/Icon.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      link: '/home',
      label: 'Home',
    },
    {
      icon: '/assets/all.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      label: 'All MIS',
      link: '/MIS',
    },
    {
      icon: '/assets/manpower.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      link: '/man-power',
      label: 'Man Power',
    },
    {
      icon: '/assets/Icon1.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.831rem 0.812rem 0.837rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      link: '/inventory',
      label: 'Inventory',
    },
    {
      icon: '/assets/sales.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.831rem 0.812rem 0.837rem',
      propTop: '0.975rem',
      propLeft: '0rem',
      label: 'Sales',
      link: '/sales',
    },
    {
      icon: '/assets/productions.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      label: 'Production',
      link: '/production',
    },
    {
      icon: '/assets/inward.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      label: 'Inward/Outward',
      link: '/inward-outward-page',
    },
    {
      icon: '/assets/all.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      link: '/plant-wise',
      label: 'Man Power',
    },
  ];

  const navItemsBottom: NavItemType[] = [
    {
      icon: '/assets/settting.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.975rem',
      propLeft: '0rem',
      link: '/settings',
      label: 'Notifications',
    },
    {
      icon: '/assets/i.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      label: 'Settings',
      link: '#',
    },
    {
      icon: '/assets/vat.svg',
      showBadge: false,
      showIcon: true,
      propPadding: '0.837rem 0.812rem 0.831rem',
      propTop: '0.906rem',
      propLeft: '-0.069rem',
      label: 'Support',
      link: '/profile',
    },
  ];

  return (
    <>
      {isExpanded && (
        <div
          role="button"
          tabIndex={0}
          className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
          onClick={handleToggleSidebar}
        />
      )}

      <div
        className={`${isExpanded ? 'w-[18rem]' : 'w-[5.294rem]'
          } fixed top-0 left-0 h-full bg-white flex flex-col items-center justify-between box-border text-center text-l duration-300 z-[100] shadow-xl ${className}`}
      >
        <div
          role="button"
          tabIndex={0}
          className="w-[2rem] h-[2rem] !m-[0] absolute top-[4rem] right-[-3rem] rounded-full bg-text-white box-border flex items-center justify-center p-[0.25rem] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1] cursor-pointer"
          onClick={handleToggleSidebar}
        >
          <img
            className={`h-[1.5rem] w-[1.5rem] rounded-full bg-white border border-slate-300 p-[0.25rem] transition-transform duration-300 ${isExpanded ? 'rotate-0' : '[transform:_rotate(180deg)]'
              }`}
            loading="lazy"
            alt=""
            src="/assets/right.svg"
          />
        </div>
        <ScrollArea type="always" scrollbars="vertical">

          <div className="self-stretch flex flex-col items-center justify-between overflow-y-auto pt-[0rem] px-[0rem] pb-[2rem] gap-[1.668rem] h-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[1.062rem] pb-[0.006rem] gap-[0.281rem]">
              {navItemsTop.map((item, index) => (
                <NavItem
                  key={index}
                  icon={item.icon}
                  showBadge={item.showBadge}
                  showIcon={item.showIcon}
                  propPadding={item.propPadding}
                  propTop={item.propTop}
                  propLeft={item.propLeft}
                  link={item.link ?? ''}
                  active={item.link === activeLink}
                  label={item.label}
                  isExpanded={isExpanded}
                />
              ))}
            </div>
            <div className="self-stretch mt-[2rem] flex flex-col items-start justify-start py-[0rem] px-[1.062rem] gap-[0.281rem]">
              {navItemsBottom.map((item, index) => (
                <NavItem
                  key={index}
                  icon={item.icon}
                  showBadge={item.showBadge}
                  showIcon={item.showIcon}
                  propPadding={item.propPadding}
                  propTop={item.propTop}
                  propLeft={item.propLeft}
                  link={item.link ?? ''}
                  active={item.link === activeLink}
                  label={item.label}
                  isExpanded={isExpanded}
                />
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default Sidebar;
