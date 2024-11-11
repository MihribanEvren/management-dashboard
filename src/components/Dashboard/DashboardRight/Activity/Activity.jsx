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
        <ActivityCard
          key={index}
          userInitials={activity.userInitials}
          userName={activity.userName}
          activityDescription={activity.description}
          date={activity.date}
          time={activity.time}
        />
      ))}
    </ReusableCard>
  );
}

export default Activity;
