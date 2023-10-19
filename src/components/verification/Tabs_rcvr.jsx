import React,{ useState , useEffect } from "react";

const Tabs_rcvr = ({ activeTab, onTabClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

   useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-1/5  ${isScrolled ? 'ease-in-out transform scale-110 transition duration-500' : ''}`}>
    <div className="bg-black-gradient text-white rounded-t-md p-4">
      <ul className="space-y-2">
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "credentials" ? "bg-blue-gradient text-black ease-in-out transform hover:scale-110 transition duration-300 rounded-tl-xl rounded-br-xl" : ""
          }`}
          onClick={() => onTabClick("credentials")}
        >
          Credentials
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "dashboard" ? "bg-blue-gradient text-black ease-in-out transform hover:scale-110 transition duration-300 rounded-tl-xl rounded-br-xl" : ""
          }`}
          onClick={() => onTabClick("dashboard")}
        >
          Dashboard
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "faqs" ? "bg-blue-gradient text-black ease-in-out transform hover:scale-110 transition duration-300 rounded-tl-xl rounded-br-xl" : ""
          }`}
          onClick={() => onTabClick("faqs")}
        >
          FAQs
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "userAgreement" ? "bg-blue-gradient text-black ease-in-out transform hover:scale-110 transition duration-300 rounded-tl-xl rounded-br-xl" : ""
          }`}
          onClick={() => onTabClick("userAgreement")}
        >
          User Agreement
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Tabs_rcvr;
