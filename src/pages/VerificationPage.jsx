
/*import React, { useState } from "react";
import Tabs from "../components/verification/Tabs";
import RightContent from "../components/verification/RightContent";
import NavbarDash from "../components/verification/NavbarDash";

const VerificationPage = () => {
  const [activeTab, setActiveTab] = useState("credentials");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-primary flex">
      <div className="w-1/5 bg-primary text-white p-6">
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="w-4/5 pl-6 pr-6 pb-6" style={{ marginTop: "10px" }}>
        <NavbarDash />
        <RightContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default VerificationPage;*/



  
import React, { useState } from "react";
import Tabs from "../components/verification/Tabs";
import RightContent from "../components/verification/RightContent";
import NavbarDash from "../components/verification/NavbarDash";

const VerificationPage = () => {
  const [activeTab, setActiveTab] = useState("credentials");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-primary">
    <NavbarDash/>
    <div className="min-h-screen flex">
      <div className="w-1/5 bg-primary text-white p-6">
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="w-4/5 pl-6 pr-6 pb-6" style={{ marginTop: "10px" }}>
        <RightContent activeTab={activeTab} />
      </div>
      </div>
    </div>
  );
};

export default VerificationPage;