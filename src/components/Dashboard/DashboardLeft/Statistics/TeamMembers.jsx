import RemainingMembersCount from './RemainingMembersCount';
import TeamMemberAvatar from './TeamMemberAvatar';

function TeamMembers({ members }) {
  return (
    <div className="flex -space-x-2">
      {members.slice(0, 4).map((member, index) => (
        <TeamMemberAvatar
          key={index}
          member={member}
          width="w-6"
          height="h-6"
          textSize="text-[9px]"
        />
      ))}
      {members.length > 4 && (
        <RemainingMembersCount count={members.length - 4} />
      )}
    </div>
  );
}

export default TeamMembers;
