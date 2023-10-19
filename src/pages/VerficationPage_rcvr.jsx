import React, { useState } from "react";
import Tabs_rcvr from "../components/verification/Tabs_rcvr";
import RightContent_rcvr from "../components/verification/RightContent_rcvr";
import NavbarDash_rcvr from "../components/verification/NavbarDash_rcvr";

const VerificationPage_rcvr = () => {
  const [activeTab, setActiveTab] = useState("credentials");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-primary">
    <NavbarDash_rcvr/>
    <div className="min-h-screen flex">
      <div className="w-1/5 bg-primary text-white p-6">
        <Tabs_rcvr activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="w-4/5 pl-6 pr-6 pb-6" style={{ marginTop: "10px" }}>
        <RightContent_rcvr activeTab={activeTab} />
      </div>
      </div>
    </div>
  );
};

export default VerificationPage_rcvr;