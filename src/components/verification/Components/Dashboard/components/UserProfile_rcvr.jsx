import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button  from './Button';
import { userProfileData_rcvr } from '../data/dummy';
import avatar2 from '../data/avatar2.jpg';

const UserProfile_rcvr = () => {

  return (
    <div className="nav-item absolute right-1 top-16 bg-black-gradient dark:bg-black-gradient p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          className="custom-button-1"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar2}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">Gayatri Singh</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Product Manager   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> gayatri123@gmail.com </p>
        </div>
      </div>
      <div>
        {userProfileData_rcvr.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
         // color="white"
          //bgColor="blue"
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile_rcvr;