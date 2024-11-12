import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import {
  IoCalendarOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';

function CustomCalendar() {
  const [selectedRange, setSelectedRange] = useState({ from: null, to: null });

  const handleDateSelect = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="w-full p-4 rounded-lg">
      <div className="flex items-center gap-2 px-4 mb-2">
        <IoCalendarOutline className="w-5 h-5" />
        <h2 className="text-lg font-medium">Calendar</h2>
      </div>

      <Calendar
        mode="range"
        selected={selectedRange}
        onSelect={handleDateSelect}
        className="flex items-center justify-center w-full rounded-md"
        classNames={{
          months: 'space-y-4 w-full',
          nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          day: 'h-9 w-9 p-0 font-normal rounded-full hover:bg-gray-100',
          day_selected: 'bg-primary text-white',
          day_today: 'bg-accent text-accent-foreground',
          day_outside: 'text-gray-300 opacity-50',
          day_range_middle: 'bg-primary/10 rounded-full',
        }}
        components={{
          IconLeft: () => <IoChevronBackOutline className="w-4 h-4" />,
          IconRight: () => <IoChevronForwardOutline className="w-4 h-4" />,
        }}
      />
    </div>
  );
}

export default CustomCalendar;
