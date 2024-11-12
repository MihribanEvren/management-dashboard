import TeamMemberAvatar from '../../DashboardLeft/Statistics/TeamMemberAvatar';

function ActivityCard({ activity }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border border-gray-300 bg-[#eee6e2] rounded-xl">
      <div className="flex items-center space-x-3">
        <TeamMemberAvatar
          member={{ name: activity.userName, color: activity.color }}
          textSize="text-sm"
        />
        <div>
          <p className="text-xs font-medium">
            {activity.userName} {activity.description}
          </p>
          <p className="text-[10px] text-gray-500">
            {activity.date} | {activity.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
