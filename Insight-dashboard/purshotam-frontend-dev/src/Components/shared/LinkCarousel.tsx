import * as ScrollArea from '@radix-ui/react-scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import MenuItem from '../linkCarousel/MenuItem';

interface LinkCarouselProps {
  menuItems: string[];
}

const LinkCarousel: React.FC<LinkCarouselProps> = ({ menuItems }) => {
  const [selectedItem, setSelectedItem] = useState<string>(menuItems[0]);

  const handleLeftClick = () => {
    const container = document.getElementById('scrollable-carousel');
    container?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const handleRightClick = () => {
    const container = document.getElementById('scrollable-carousel');
    container?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Left Scroll Button */}
      <button
        type="button"
        onClick={handleLeftClick}
        className="p-1 mr-6 rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>

      {/* Scrollable LinkCarousel */}
      <ScrollArea.Root className="w-full overflow-hidden">
        <ScrollArea.Viewport
          className="flex items-center space-x-4 overflow-x-auto no-scrollbar whitespace-nowrap"
          id="scrollable-carousel"
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              label={item}
              selected={selectedItem === item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </ScrollArea.Viewport>
      </ScrollArea.Root>

      {/* Right Scroll Button */}
      <button
        type="button"
        onClick={handleRightClick}
        className="p-1 rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>
    </div>
  );
};

export default LinkCarousel;
