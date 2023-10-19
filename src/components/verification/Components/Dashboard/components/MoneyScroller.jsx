import React, { useState } from 'react';
import './MoneyScroller.css';

function MoneyScroller() {
  const [money, setMoney] = useState(0);

  const handleScrollerChange = (e) => {
    setMoney(e.target.value);
    // Update the slider background color based on the current value
    const percentage = (e.target.value / 1000) * 100; 
    const gradientColor = `linear-gradient(to right, #66fcf1 ${percentage}%, #0a192f ${percentage}%)`;
    e.target.style.background = gradientColor;
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">Control the transfer limit</h1>
      <div className="flex justify-center items-center mt-8">
        <input
          type="range"
          min="0"
          max="1000"
          value={money}
          onChange={handleScrollerChange}
          className="slider"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xl text-slate-900">Transfer: ${money}</p>
        <button className="bg-blue-gradient text-black font-semibold py-2 px-4 rounded ease-in-out transform hover:scale-125 transition duratio-300">
          Send
        </button>
      </div>
    </div>
  );
}

export default MoneyScroller;

