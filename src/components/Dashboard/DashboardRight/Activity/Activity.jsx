import { activityData } from '@/data/activityData.js';
import ActivityCard from './ActivityCard';
import ReusableCard from '@/components/SharedElements/ReusableCard';

function Activity() {
  return (
    <ReusableCard
      title="Activity"
      buttonLabel="View All"
      onButtonClick={() => {}}
    >
      {activityData.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </ReusableCard>
  );
}

export default Activity;
