import React, { useState } from "react";
import { IoMdSunny } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const SampleRewards = () => {
  const [progress, setProgress] = useState(30);

  const milestones = [
    { value: 25, description: "Bronze Badge" },
    { value: 50, description: "Silver Badge" },
    { value: 75, description: "Gold Badge" },
    { value: 100, description: "Platinum Badge" },
  ];

  // Determine the next milestone the user will reach
  const nextMilestone = milestones.find(
    (milestone) => milestone.value > progress
  );

  // Sample rewards data with icons
  const rewards = [
    {
      name: "Dream Vacation Package",
      icon: <IoMdSunny size={16} />,
    },
    {
      name: "Platinum Membership Benefits",
      icon: <FaStar size={16} />,
    },
    {
      name: "Tech Gadget Bundle",
      icon: <FiSettings size={16}/>,
    },
  ];

  return (
    <div className="mt-8 flex justify-center">
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Your Rewards Progress
      </h2>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {nextMilestone ? nextMilestone.description : "Maxed Out"}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-teal-600">
              {progress}% Complete
            </span>
          </div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <div className="text-xs">
            <span className="font-semibold text-slate-600">
              {nextMilestone ? progress : "100"}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div
            style={{ width: `${nextMilestone ? progress : 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
          ></div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          {nextMilestone
            ? `Earn ${nextMilestone.value - progress}% more to unlock ${
                nextMilestone.description
              }`
            : "You have unlocked all available rewards."}
        </p>
      </div>
      </div>
      <div className="mt-3 ml-8">
        <h3 className="text-xl mb-2 text-white ml-10">
          Grabbed Rewards
        </h3>
        <ul className="list-disc pl-6">
          {rewards.map((reward, index) => (
            <li key={index} className="text-gray-700 flex items-center mb-2">
              <span className="mr-2">{reward.icon}</span>
              {reward.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SampleRewards;
