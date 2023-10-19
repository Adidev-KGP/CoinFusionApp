import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "US",
    phoneNumber: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [otpClicked, setOtpClicked] = useState(false);
  const [isSender, setIsSender] = useState(false); // Added isSender state

  const validateValues = (formData, otpClicked) => {
    let errors = {};

    if (!otpClicked && formData.enterOtp !== "1234") {
      errors.enterOtp = "Incorrect OTP";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = "Invalid Email";
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid Phone Number";
    }
    if (formData.password.length < 8) {
      errors.password = "Password must be 8-characters long";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpClick = () => {
    setOtpClicked(true);
  };

  // Toggle the isSender state
  const handleToggleClick = () => {
    setIsSender(!isSender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateValues(formData, otpClicked);

    if (Object.keys(validationErrors).length === 0 && isSender) {
      navigate("/pages/VerificationPage");
    } else if (Object.keys(validationErrors).length === 0 && !isSender) {
      navigate("/pages/VerificationPage_rcvr");
    } else {
      setErrors(validationErrors);
    }
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(formData);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className="selection:bg-cyan 500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-4 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="pt-8">
              <h1 className="text-5xl font-bold text-tertiary flex justify-center items-center">
                Create account
              </h1>

              <form
                className="mt-10"
                onSubmit={handleSubmit}
                style={{ height: "410px", overflowY: "auto" }}
              >
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="John"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>

                <div className="mt-10 relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="Doe"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                </div>

                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="john@doe.com"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                {errors.email ? (
                  <div className="error" style={{ color: "red", fontSize: 12 }}>
                    Invalid email
                  </div>
                ) : null}

                <div className="mt-10 relative">
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="peer h-20 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary resize-none"
                    placeholder="123 Main St, City, Zip Code"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Address
                  </label>
                </div>

                <div className="mt-10 relative">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    required
                  >
                    <option value="US">&#x1F1FA;&#x1F1F8; United States</option>
                    <option value="CA">&#x1F1E8;&#x1F1E6; Canada</option>
                    <option value="IN">&#x1F1EE;&#x1F1F3; India</option>
                    <option value="AU">&#x1F1E6;&#x1F1FA; Australia</option>
                    <option value="UK">
                      &#x1F1EC;&#x1F1E7; United Kingdom{" "}
                    </option>
                    <option value="SG">&#x1F1F8;&#x1F1EC; Singapore</option>
                    <option value="MY">&#x1F1F2;&#x1F1FE; Malaysia</option>
                    <option value="NZ">&#x1F1F3;&#x1F1FF; New Zealand</option>
                    <option value="AE">
                      &#x1F1E6;&#x1F1EA; United Arab Emirates
                    </option>
                    <option value="SA">&#x1F1F8;&#x1F1E6; Saudi Arabia</option>
                  </select>
                  <label
                    htmlFor="country"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Country
                  </label>
                </div>

                <div className="mt-10 relative flex">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="peer h-10 w-11/12 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="e.g., +1 123-456-7890"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Mobile Number
                  </label>
                  <button
                    type="button"
                    className="bg-tertiary hover:bg-primary text-white font-semibold py-2 px-4 rounded-full ml-2 focus:outline-none"
                    style={{ borderRadius: "0 50px 50px 0" }}
                    onClick={handleOtpClick}
                  >
                    OTP
                  </button>
                </div>
                {errors.phoneNumber ? (
                  <div className="error" style={{ color: "red", fontSize: 12 }}>
                    Invalid mobile number
                  </div>
                ) : null}

                <div className="mt-10 relative">
                  <input
                    id="enterOtp"
                    name="enterOtp"
                    type="text"
                    value={formData.enterOtp}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="Enter OTP"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="enterOtp"
                    className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Enter OTP
                  </label>
                </div>
                {errors.enterOtp ? (
                  <div className="error" style={{ color: "red", fontSize: 12 }}>
                    Incorrect OTP
                  </div>
                ) : null}

                <div className="mt-10 relative">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="dob"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Date of Birth
                  </label>
                </div>

                <div className="mt-10 relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="Create Password"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Create Password
                  </label>
                </div>
                {errors.password ? (
                  <div className="error" style={{ color: "red", fontSize: 12 }}>
                    Password should be at least 8 characters long
                  </div>
                ) : null}

                <div className="mt-10 relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>

        
                <div className="mt-6 flex items-center">
                  <label className="mr-2">Are you the Sender?</label>
                  <Switch
                  id="isSender"
                  name="isSender"
                  checked={isSender}
                  onChange={handleToggleClick}
                  onColor="#377484" 
                  offColor="#999"   
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={40}         
                  height={20}       
                  handleDiameter={16} 
                />
                </div>

                <input
                  type="submit"
                  value="Sign up"
                  className="mt-14 ml-3 px-8 py-4 uppercase rounded-full bg-tertiary hover:bg-primary text-white font-semibold text-center block w-11/12 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
