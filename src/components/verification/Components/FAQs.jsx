import React, { useState } from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "How do I send money to India?",
      answer:
        "To send money to India, you can use our easy and secure online transfer service. Simply log in to your account, enter the recipient details, and initiate the transfer. It's fast and hassle-free.",
    },
    {
      question: "What are the transfer fees?",
      answer:
        "We offer zero-cost transfer fees for NRI users. You can send money to your family members in India without any additional charges.",
    },
    {
      question: "How long does it take for the transfer to reach the recipient?",
      answer:
        "The transfer time may vary depending on the selected transfer method and location. In most cases, the transfer is completed within 1-2 business days.",
    },
    {
      question: "Is my money safe with your service?",
      answer:
        "Yes, your money is secure with us. We use advanced security measures and encryption to protect your transactions and personal information.",
    },
    {
      question: "What are the supported payment methods?",
      answer:
        "We support various payment methods, including bank transfers, credit/debit cards, and digital wallets. You can choose the most convenient option for you.",
    },
    {
      question: "How can I track my transfer?",
      answer:
        "You can easily track the status of your transfer by logging in to your account. We provide real-time updates and notifications to keep you informed.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gradient">Frequently Asked Questions</h2>
      <div className="bg-gradient-to-r from-lightgray via-lightgray to-darkgray rounded">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border-b transition ease-in-out duration-300 ${
              activeIndex === index ? "bg-gray-100" : ""
            }`}
          >
            <button
              onClick={() => handleAccordionClick(index)}
              className="w-full text-left p-3 font-semibold hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              style={{ height: "50px" }}
            >
              <span className="mr-2 inline-block animate-pulse">+</span> {faq.question}
            </button>
            <div
              className={`pl-3 transition-max-height ease-in-out duration-300 ${
                activeIndex === index ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
