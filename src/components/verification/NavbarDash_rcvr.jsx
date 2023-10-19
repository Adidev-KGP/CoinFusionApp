import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar2 from './Components/Dashboard/data/avatar2.jpg';
import UserProfile_rcvr from './Components/Dashboard/components/UserProfile_rcvr';
import Notification_rcvr from './Components/Dashboard/components/Notification_rcvr';
import { useStateContext } from './Components/Dashboard/contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const NavbarDash_rcvr = () => {
  const { handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      <NavButton title="Menu" customFunc={null} color="#00f6ff" icon={<AiOutlineMenu />} />
      <div className="flex z-10">
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color="#00f6ff" icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar2}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-300 text-14">Hi,</span>{' '}
              <span className="text-gray-300 font-bold ml-1 text-14">
                Gayatri
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-300 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.notification && (<Notification_rcvr />)}
        {isClicked.userProfile && (<UserProfile_rcvr />)}
      </div>
    </div>
  );
};
 export default NavbarDash_rcvr;