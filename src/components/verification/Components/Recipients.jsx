import React, { useState } from "react";

const Recepients = () => {
  const [code, setCode] = useState("");
  const [recipientCodes, setRecipientCodes] = useState([]);
  const [error, setError] = useState("");

  const handleCodeChange = (e) => {
    const enteredCode = e.target.value;
    setCode(enteredCode);
    if (enteredCode.length === 10) {
      setError("");
    }
  };

  const handleAddRecipient = () => {
    if (code.length === 10) {
      setRecipientCodes([...recipientCodes, code]);
      setCode("");
    } else {
      setError("Invalid code. You cannot add this recipient.");
    }
  };

  const handleDeleteRecipient = (index) => {
    const updatedCodes = [...recipientCodes];
    updatedCodes.splice(index, 1);
    setRecipientCodes(updatedCodes);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gradient">Add Recipients</h2>
      <div className="mb-4">
        <label htmlFor="code" className="block font-semibold mb-2 text-gray-400">
          Enter Recipient Code
        </label>
        <input
          type="text"
          id="code"
          name="code"
          value={code}
          onChange={handleCodeChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-secondary"
          autoComplete="off"
        />
        {error && <p className="text-red-500 mt-1">{error}</p>}
      </div>

      <button
        onClick={handleAddRecipient}
        className="bg-blue-gradient text-black font-semibold py-2 px-4 rounded  ease-in-out transform hover:scale-110 transition duration-200"
      >
        Add Recipient
      </button>

      <div className="bg-gray-200 mt-4 p-4 rounded">
        {recipientCodes.map((recipient, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-lightBlue via-lightBlue to-blue p-2 rounded-full inline-flex items-center mr-2 mb-2"
          >
            {recipient}
            <button
              onClick={() => handleDeleteRecipient(index)}
              className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
            >
              &#x2716;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recepients;
