function RemainingMembersCount({ count }) {
  return (
    <div className="flex items-center justify-end w-6 h-6 bg-gray-100 border-2 border-white rounded-full">
      <span className="text-[10px] text-gray-600">+{count}</span>
    </div>
  );
}

export default RemainingMembersCount;
