import { FaCircleArrowRight } from 'react-icons/fa6';

function SidebarLink({ item, isActive, onClick }) {
  const Icon = item.icon;
  return (
    <a
      href={item.url}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`
        flex items-center justify-between my-2 pl-8 pr-3 py-2 
        transition-colors rounded-lg rounded-r-full
        ${
          isActive
            ? 'text-gray-900 bg-lightgray font-semibold'
            : 'text-gray-500 hover:text-gray-800 hover:bg-lightgray'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        <span>{item.title}</span>
      </div>
      <FaCircleArrowRight
        size={36}
        className="opacity-0 transition-all translate-x-[-10px] data-[active=true]:opacity-100 data-[active=true]:translate-x-0 text-white group-hover:text-gray-600 data-[active=true]:text-white bg-gray-600 rounded-full p-0.5
  "
        data-active={isActive}
      />
    </a>
  );
}

export default SidebarLink;
