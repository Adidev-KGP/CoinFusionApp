import React, { useState } from "react";
import { FaCheckCircle, FaCopy } from "react-icons/fa";

const Credentials_rcvr = () => {
  const [formData, setFormData] = useState({
    aadhar: "",
    pan: "",
    familytreedocument: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [randomCode, setRandomCode] = useState("");
  const [isCodeCopied, setIsCodeCopied] = useState(false);

  const generateRandomCode = () => {
    // Generate a random 10-character code
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  };

  const copyCodeToClipboard = () => {
    // Copy the code to the clipboard
    navigator.clipboard.writeText(randomCode);
    setIsCodeCopied(true);
    // Reset the "Copied!" message after 3 seconds
    setTimeout(() => {
      setIsCodeCopied(false);
    }, 3000);
  };

  const validateFormData = () => {
    let errors = {};
    const aadharRegex = /^\d{12}$/;
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;

    if (!aadharRegex.test(formData.aadhar)) {
      errors.aadhar = "Invalid Aadhar Number";
    }

    if (!panRegex.test(formData.pan)) {
      errors.pan = "Invalid PAN Number";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({ ...formData, familytreedocument: file }); // Update the state with the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      // Generate a random code after a 2-second delay (simulated verification)
      setTimeout(() => {
        const code = generateRandomCode();
        setIsLoading(false);
        setRandomCode(code);
        setSubmitted(true);
      }, 2000);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gradient">Verification Details</h2>
      {isLoading ? (
        <>
          <p className="text-green-500 text-2xl tracking-widest animate-bounce">Details verifying...</p>
          <p className="text-white tracking-wider mt-3">You shall be notified once the details are verified.</p>
        </>
      ) : submitted ? (
        <>
        <div className="text-green-500 text-2xl flex items-center">
          <FaCheckCircle size={30} className="mr-2" />
          Successfully verified
        </div>
        <div className=" text-sm text-white animate-pulse">One final push, Send this code to your sender, and you are there!! </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="aadhar" className="block font-semibold mb-2 text-gray-400">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-secondary"
              autoComplete="off"
              required
            />
            {errors.aadhar && (
              <p className="text-red-500 mt-1">{errors.aadhar}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pan" className="block font-semibold mb-2 text-gray-400">
              PAN
            </label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-secondary"
              autoComplete="off"
              required
            />
            {errors.pan && <p className="text-red-500 mt-1">{errors.pan}</p>}
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label htmlFor="familytreedocument" className="block font-semibold mb-2 text-gray-400">
              Upload Family Tree Document
            </label>
            <input
              type="file"
              id="familytreedocument"
              name="familytreedocument"
              onChange={handleFileUpload}
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-secondary"
            />
            {formData.familytreedocument && (
              <p className="text-gray-500 mt-2">Selected file: {formData.familytreedocument.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-b from-lightBlue to-blue text-black font-semibold py-2 px-4 rounded ease-in-out transform hover:scale-110 transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
      {submitted && (
        <div className="mt-4 bg-white rounded-lg p-3 flex items-center">
          <div className="flex-grow">{randomCode}</div>
          <button
            onClick={copyCodeToClipboard}
            className="bg-grey-500 text-black rounded-lg p-2 ml-3 flex items-center"
          >
            <FaCopy className="mr-2" />
            {isCodeCopied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Credentials_rcvr;
