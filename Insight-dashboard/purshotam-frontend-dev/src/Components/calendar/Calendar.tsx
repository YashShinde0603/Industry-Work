import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  subDays,
} from 'date-fns';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from '@radix-ui/themes';

const Calendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [preset, setPreset] = useState<string | null>('thismonth');
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(true);

  const renderDays = (month: Date) => {
    const startDay = startOfWeek(startOfMonth(month));
    const endDay = endOfWeek(endOfMonth(month));
    const days = eachDayOfInterval({ start: startDay, end: endDay });

    return days.map((day, index) => {
      const isSameMonth = day.getMonth() === month.getMonth();
      const isSelected = selectedDate?.toDateString() === day.toDateString();
      const isInRange = rangeStart && rangeEnd && day >= rangeStart && day <= rangeEnd;

      const dayClass = [
        'w-10 h-10 flex z-20 items-center justify-center cursor-pointer',
        isSelected ? 'bg-blue-500 text-white' : '',
        isInRange ? 'bg-blue-100' : '',
        !isSameMonth ? 'text-gray-400' : '',
        'hover:bg-gray-200',
      ]
        .filter(Boolean)
        .join(' ');

      const handleDayClick = () => {
        if (isSameMonth) {
          if (!rangeStart || (rangeStart && rangeEnd)) {
            setRangeStart(day);
            setRangeEnd(null);
          } else {
            setRangeEnd(day);
            // Close calendar after setting the end date only
            setIsCalendarVisible(false);
          }
          setSelectedDate(day);
        }
      };

      return (
        <div
          key={index}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected}
          className={dayClass}
          onClick={handleDayClick}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && isSameMonth) {
              handleDayClick();
            }
          }}
        >
          {format(day, 'd')}
        </div>
      );
    });
  };

  const renderMonthNavigation = (
    month: Date,
    setMonth: React.Dispatch<React.SetStateAction<Date>>
  ) => (
    <div className="flex items-center justify-between mb-4">
      <button
        type="button"
        onClick={() => setMonth(subMonths(month, 1))}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <div className="font-semibold">{format(month, 'MMMM yyyy')}</div>
      <button
        type="button"
        onClick={() => setMonth(addMonths(month, 1))}
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );

  const renderPresets = () => {
    const today = new Date();

    return (
      <div className="flex flex-col gap-2 text-[1rem]">
        {['today', 'yesterday', 'last7days', 'last14days', 'last30days', 'thisweek'].map((presetValue) => (
          <Button
            key={presetValue}
            type="button"
            className={`flex items-center justify-between p-2 rounded-full cursor-pointer transition-all duration-200 ${preset === presetValue ? 'bg-blue-100' : 'bg-white'
              } hover:bg-gray-300 rounded-full`}
            onClick={() => {
              setPreset(presetValue);
              // Update selectedDate, rangeStart, and rangeEnd based on preset
              let presetStartDate: Date;
              let presetEndDate: Date;

              switch (presetValue) {
                case 'today':
                  presetStartDate = today;
                  presetEndDate = today;
                  break;
                case 'yesterday':
                  presetStartDate = subDays(today, 1);
                  presetEndDate = presetStartDate;
                  break;
                // Add more cases for other presets as needed
                default:
                  return;
              }

              setSelectedDate(presetStartDate);
              setRangeStart(presetStartDate);
              setRangeEnd(presetEndDate);
              setIsCalendarVisible(false); // Close calendar when preset is selected
            }}
          >
            <span className={`transition-colors duration-200 ${preset === presetValue ? 'text-blue-600' : 'text-gray-700'}`}>
              {presetValue}
            </span>
            {preset === presetValue && <Check className="h-4 w-4 text-blue-500 rounded-full" />}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex border rounded-lg shadow-md">
      {isCalendarVisible && (
        <div className="p-4 w-2/3 flex">
          <div className="w-1/2 pr-2">
            {renderMonthNavigation(selectedMonth, setSelectedMonth)}
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-semibold">
                  {day}
                </div>
              ))}
              {renderDays(selectedMonth)}
            </div>
          </div>
          <div className="w-1/2 pl-2">
            {renderMonthNavigation(addMonths(selectedMonth, 1), setSelectedMonth)}
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-semibold">
                  {day}
                </div>
              ))}
              {renderDays(addMonths(selectedMonth, 1))}
            </div>
          </div>
        </div>
      )}

      <div className="w-1/3 border-l p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold">Date presets</div>
        </div>
        {renderPresets()}
      </div>
    </div>
  );
};

export default Calendar;
