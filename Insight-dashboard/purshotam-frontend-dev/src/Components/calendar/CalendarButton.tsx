import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import Calendar from './Calendar';

const CalendarButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Get the start and end dates of the current month
  const startDate = startOfMonth(new Date());
  const endDate = endOfMonth(new Date());

  // Format the dates to display them in the button
  const formattedStartDate = format(startDate, 'd MMM yyyy');
  const formattedEndDate = format(endDate, 'd MMM yyyy');

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="flex items-center -mt-[.30rem] border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none w-full md:w-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span className="text-xs sm:text-sm md:text-base truncate">
            {formattedStartDate}
            {' '}
            -
            {' '}
            {formattedEndDate}
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Content
        align="start"
        sideOffset={8}
        className="p-4 bg-white rounded-lg w-full sm:w-auto max-w-[90vw]"
      >
        <Calendar />
      </Popover.Content>
    </Popover.Root>
  );
};

export default CalendarButton;
