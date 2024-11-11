import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TeamMemberAvatar({
  member,
  width = 'w-10',
  height = 'h-10',
  textSize = 'text-lg',
}) {
  return (
    <Avatar className={`${width} ${height}`}>
      <AvatarImage src={member?.image} alt={member.name} />
      <AvatarFallback
        className={`${member?.color} ${textSize} font-semibold text-white flex items-center justify-center`}
      >
        {member.name.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
}

export default TeamMemberAvatar;
