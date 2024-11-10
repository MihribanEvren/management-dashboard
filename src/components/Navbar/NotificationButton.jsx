function NotificationButton({
  icon: Icon,
  className = '',
  notificationCount = 0,
}) {
  return (
    <button className={`relative ${className}`}>
      <Icon className="w-6 h-6 text-gray-600" />

      {notificationCount > 0 && (
        <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-1.5 -right-1.5">
          {notificationCount}
        </span>
      )}
    </button>
  );
}

export default NotificationButton;
