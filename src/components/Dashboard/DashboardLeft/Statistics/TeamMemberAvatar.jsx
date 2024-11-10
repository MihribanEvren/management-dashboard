import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TeamMemberAvatar({ member }) {
  return (
    <Avatar className="w-6 h-6">
      <AvatarImage src={member?.image} alt={member.name} />
      <AvatarFallback
        className={`${member.color} text-[9px] font-semibold text-white`}
      >
        {member.name.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
}
export default TeamMemberAvatar;
