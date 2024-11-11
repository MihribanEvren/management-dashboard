function Event({ icon, title, time }) {
  const Icon = icon;
  return (
    <div className="flex items-center mt-2 space-x-3">
      <Icon className="w-10 h-10 text-gray-400" />
      <div className="flex flex-col">
        <span className="text-base font-semibold text-gray-900">{title}</span>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
    </div>
  );
}

export default Event;
