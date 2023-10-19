import React from "react";
import Credentials_rcvr from "./Components/Credentials_rcvr";
import Dashboard_rcvr from "./Components/Dashboard/App_rcvr";
import FAQs from "./Components/FAQs";
import UserAgreement from "./Components/UserAgreement";

const RightContent_rcvr = ({ activeTab }) => {
  return (
    <div className="bg-primary rounded-b-md p-4">
      {activeTab === "credentials" && <Credentials_rcvr />}
      {activeTab === "dashboard" && <Dashboard_rcvr />}
      {activeTab === "faqs" && <FAQs />}
      {activeTab === "userAgreement" && <UserAgreement />}
    </div>
  );
};

export default RightContent_rcvr;
