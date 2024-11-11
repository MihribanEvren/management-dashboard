import { Card } from '@/components/ui/card';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import Event from './Event';

function Events() {
  return (
    <Card className="w-full h-64 p-6 bg-white basis-1/3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Events</h2>
        <button className="text-sm font-semibold text-primary hover:text-blue-700">
          View All
        </button>
      </div>

      <Event
        icon={IoMdArrowDroprightCircle}
        title="Vani Call"
        time="2:30 PM, Today"
      />
      <Event
        icon={IoMdArrowDroprightCircle}
        title="Henry Message"
        time="9:21 PM, Yesterday"
      />
      <Event
        icon={IoMdArrowDroprightCircle}
        title="Laura Call"
        time="6:40 AM, Today"
      />
    </Card>
  );
}

export default Events;
