import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Credentials = () => {
  const [formData, setFormData] = useState({
    aadhar: "",
    pan: "",
    salaryReceipt: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setFormData({ ...formData, salaryReceipt: file }); // Update the state with the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      // Simulate a delay for verification (replace with actual API call)
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);

        // Clear the success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 2000); // Simulated 2-second delay for verification
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
        <div className="text-green-500 text-2xl flex items-center">
          <FaCheckCircle size={30} className="mr-2" /> 
          Successfully verified
        </div>
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
            <label htmlFor="salaryReceipt" className="block font-semibold mb-2 text-gray-400">
              Upload Salary Receipt
            </label>
            <input
              type="file"
              id="salaryReceipt"
              name="salaryReceipt"
              onChange={handleFileUpload}
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-secondary"
            />
            {formData.salaryReceipt && (
              <p className="text-gray-500 mt-2">Selected file: {formData.salaryReceipt.name}</p>
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
    </div>
  );
};

export default Credentials;
