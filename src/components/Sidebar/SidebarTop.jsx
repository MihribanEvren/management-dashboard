import { IoIosCube } from 'react-icons/io';
import { MdSpaceDashboard, MdInsertChart, MdEmail } from 'react-icons/md';
import { FaPenSquare, FaCalendarAlt, FaCheckSquare } from 'react-icons/fa';
import { BsChatTextFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import SidebarLink from './SidebarLink';
import MicrosoftTeamsImage from '../../assets/microsoftTeams.svg';
import smallCloud from '../../assets/smallCloud.svg';
import bigCloud from '../../assets/bigCloud.svg';
import { useState } from 'react';
import { Button } from '../ui/button';
import Separator from '../SharedElements/Separator';

function SidebarTop() {
  const [activeUrl, setActiveUrl] = useState('/');
  const items = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: MdSpaceDashboard,
    },
    {
      title: 'Project',
      url: '/project',
      icon: FaPenSquare,
    },
    {
      title: 'My Task',
      url: '/task',
      icon: MdInsertChart,
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: FaCalendarAlt,
    },
    {
      title: 'Emails',
      url: '/email',
      icon: MdEmail,
    },
    {
      title: 'Conversations',
      url: '/conversations',
      icon: BsChatTextFill,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: IoMdSettings,
    },
    {
      title: 'Repost',
      url: '/repost',
      icon: FaCheckSquare,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center p-8 space-x-2">
        <IoIosCube size={32} />
        <h1 className="text-2xl font-extrabold font-secondary">Management</h1>
      </div>
      <nav className="pr-6 ">
        {items.map((item, index) => (
          <SidebarLink
            key={index}
            item={item}
            isActive={activeUrl === item.url}
            onClick={() => setActiveUrl(item.url)}
          />
        ))}
      </nav>
      <div className="relative flex items-center justify-center p-8 mt-16">
        <div className="absolute z-20 h-56 rounded-3xl w-52 bg-gradient-to-tr to-linearorange from-linearpink">
          <div className="absolute w-full text-center text-black bottom-6">
            <p className="text-xs font-semibold text-[#263156]">
              Want to upgrade
            </p>
            <Button className="p-3 mt-2 text-center text-white rounded-full">
              Upgrade now
            </Button>
          </div>
        </div>

        <img
          src={MicrosoftTeamsImage}
          alt="Microsoft Teams Image"
          className="relative z-30 object-cover mx-auto -left-1 -top-20"
        />
        <img
          src={smallCloud}
          alt="Small CLoud"
          className="absolute z-30 top-3 left-3"
        />
        <img
          src={bigCloud}
          alt="Big CLoud"
          className="absolute z-30 right-1 top-12"
        />
      </div>
    </>
  );
}

export default SidebarTop;
