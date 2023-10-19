import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import Bar from "./components/Bar";
import Button from "./components/Button";
import Members_rcvr from "./components/Members_rcvr";

import {
  earningData_rcvr,
} from "./data/dummy";

const App_rcvr = () => {
  return (
    <div className="mt-19">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-black-gradient dark:text-white dark:bg-secondary-dark-bg h-44 rounded-xl hover:ease-in-out transform hover:scale-110 transition duration-500 w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-white">Total Recieved</p>
              <p className="text-2xl">$4500</p>
            </div>
            <button
              type="button"
              style={{
                background: "linear-gradient(to bottom, #a3eef1, #38c0d2)",
              }}
              className="text-2xl opacity-0.9 text-black hover:drop-shadow-xl rounded-full  p-4 animate-bounce"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              //color="black"
              //bgColor="#00f6ff"
              text="Download"
              //className="custom-button-1"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData_rcvr.map((item) => (
            <div
              key={item.title}
              className="bg-black-gradient-2 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ease-in-out transform hover:scale-90 transition duration-300"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl hover: ease-in-out transform hover:scale-125 transition duration-300"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center mt-6">
        <div className="bg-primary dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">
              Revenue Updates
              <span className={`text-sm font-thin ml-2`}>(Monthwise)</span>
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-blue hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>Recieved</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$600</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-400 ml-3 text-xs animate-pulse">
                    5.5%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Recieved</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$350</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
             
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="#00f6ff"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="ml-6">
              <Bar />
            </div>
          </div>
        </div>

        <div className="flex gap-5 flex-wrap justify-center">
          <div className="bg-primary dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
            <Members_rcvr />
          </div>
          </div>
        </div>
      </div>
  );
};

export default App_rcvr;
