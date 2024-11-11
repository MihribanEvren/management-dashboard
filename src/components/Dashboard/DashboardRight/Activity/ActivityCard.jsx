import TeamMemberAvatar from '../../DashboardLeft/Statistics/TeamMemberAvatar';

function ActivityCard({
  userInitials,
  userName,
  activityDescription,
  date,
  time,
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border border-gray-300 bg-[#eee6e2] rounded-xl">
      <div className="flex items-center space-x-3">
        <TeamMemberAvatar
          member={{ name: userName, color: 'bg-secondary' }}
          textSize="text-sm"
        />
        <div>
          <p className="text-xs font-medium">
            {userName} {activityDescription}
          </p>
          <p className="text-[10px] text-gray-500">
            {date} | {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
