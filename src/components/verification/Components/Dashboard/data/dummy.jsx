import React from 'react';
import { FiBarChart, FiCreditCard } from 'react-icons/fi';
import { BsBoxSeam, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import users from './users.json';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);


export const notificationData = [
  {
    image:
      avatar2,
    message: 'Gayatri spent $100!',
    desc: 'Check her spendings this month',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: "Aditya's credit limit is about to over",
    desc: 'Sent Aditya money for this month',
    time: '11:56 AM',
  },
  {
    image:
      avatar,
    message: 'New Reward received',
    desc: 'Check your rewards',
    time: '4:39 AM',
  },
];

export const notificationData_rcvr = [
  {
    image:
      avatar,
    message: 'Adidev sent $50!',
    desc: 'Check your Balance!',
    time: '07:56 AM',
  },
  {
    image:
      avatar2,
    message: "Balance limit exhausting",
    desc: '$80 left for this month',
    time: '12:45AM',
  },
]

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '5',
    percentage: `-2 last month`,
    title: 'Recipients',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '3',
    percentage: 'remaining',
    title: 'Rewards',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '$800',
    percentage: '+75%',
    title: 'Savings',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
];


// export const getEarningData = (userData) => {
//   if (userData === null) {
//     // Handle the case where userData is null
//     return [];
//   }

//   return [
//     {
//       icon: <MdOutlineSupervisorAccount />,
//       amount: `${userData.totalRecipients}`,
//       percentage: `${userData.diffInRecipients} last month`,
//       title: 'Recipients',
//       iconColor: '#03C9D7',
//       iconBg: '#E5FAFB',
//       pcColor: 'red-600',
//     },
//     {
//       icon: <BsBoxSeam />,
//       amount: `${userData.totalRewards}`,
//       percentage: 'remaining',
//       title: 'Rewards',
//       iconColor: 'rgb(255, 244, 229)',
//       iconBg: 'rgb(254, 201, 15)',
//       pcColor: 'green-600',
//     },
//     {
//       icon: <FiBarChart />,
//       amount: `$${userData.totalSavings}`,
//       percentage: `+${userData.percentIncSavings}%`,
//       title: 'Savings',
//       iconColor: 'rgb(228, 106, 118)',
//       iconBg: 'rgb(255, 244, 229)',
//       pcColor: 'green-600',
//     },
//   ];
// };

export const earningData_rcvr = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '2',
    percentage: '+1 last month',
    title: 'Senders',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '3',
    percentage: 'remaining',
    title: 'Rewards',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '$90',
    percentage: '-32%',
    title: 'Savings',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: '-600',
  },
];

export const customersData_rcvr = [
  {
    id:1,
    name: 'Adidev Bhattacharya',
    code: 'Cousin',
    image:
      avatar,
    moneyShared: 320,
  },
  {
    id:2,
    name: 'Nitya Singh',
    code: 'Sister',
    image:
      avatar2,
    moneyShared: 400,
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const userProfileData_rcvr = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const customersData = [
  {
    id:1,
    name: 'Aditya Bhattacharya',
    code: 'Q65tgvh5Y3',
    image:
      avatar4,
    moneyShared: 530,
  },
  {
    id:2,
    name: 'Arun Kumar',
    code: '12bhGT569i',
    image:
      avatar3,
    moneyShared: 400,
  },
  {
   id:3,
    name: 'Gayatri Singh',
    code: 'QU67398bA2',
    image:
      avatar2,
    moneyShared: 500,
  },
  {
    id:4,
    name: 'Nirav Joshi',
    code: 'Q65tgvh5Y3',
    image:
      avatar3,
    moneyShared: 650,
  },
  {
    id:5,
    name: 'Rohan Bhattacharya',
    code: 'bbT76c6t30',
    image:
      avatar4,
    moneyShared: 380,
  },
];

export const ecomPieChartData = [
  250,325,140,80,200
];

