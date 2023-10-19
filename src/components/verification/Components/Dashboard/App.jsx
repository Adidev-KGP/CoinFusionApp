import React, { useState,useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import Stacked from "./components/Stacked";
import Pie from "./components/Pie";
import Button from "./components/Button";
import Members from "./components/Members";
import {
  earningData,
  ecomPieChartData,
} from "./data/dummy";
import SampleRewards from "./components/SampleRewards";
//import { useUserContext } from "./contexts/UserContext";//added


const App = () => {
  //const { userEmail } = useUserContext();
  // const [selectedUserEmail, setSelectedUserEmail] = useState(userEmail);
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   fetch('/src/components/verification/Dashboard/data/users.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     const selectedUserData = data.users.find(user => user.email === selectedUserEmail);
  //       setUserData(selectedUserData);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching user data:" + error);
  //     });
  // }, [selectedUserEmail]);

  // if (userData === null) {
  //   // Handle the case when userData is null, you can display a loading spinner or an error message.
  //   return <div>Loading...</div>;
  // }

  // const earningData = getEarningData(userData);

  return (
    <div className="mt-19">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-black-gradient dark:text-white dark:bg-secondary-dark-bg h-44 rounded-xl hover:ease-in-out transform hover:scale-110 transition duration-500 w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-white">Total Shared</p>
              <p className="text-2xl">$19680</p>
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
          {earningData.map((item) => (
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
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-blue hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$3300</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs animate-pulse">
                    10%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">2500</p>
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
            <div>
              <Stacked />
            </div>
          </div>
        </div>

        <div>
          <div className=" rounded-2xl md:w-400 p-4 m-3 bg-blue ease-in-out transform hover:scale-110 transition duration-500">
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">
                Total Credit Score
              </p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">612</p>
                <p className="text-gray-100 animate-pulse">Fair</p>
              </div>
            </div>
          </div>

          <div className="bg-black-gradient dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">995</p>
              <p className="text-gray-400">Total Coins Earned</p>
            </div>

            <div className="w-40">
              <Pie data={ecomPieChartData} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap justify-center">
        <div className="bg-primary dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
          <Members />
        </div>

        <div className="bg-blue dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-9/12 md:w-760 hover:ease-in-out transform hover:scale-110 transition duration-500 ">
          <div className="md:w-full overflow-auto">
            <SampleRewards/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
