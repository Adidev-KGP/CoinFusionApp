import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password:"",
  });

   const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (loginData) => {
    let errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.email)){
      errors.email = "Invalid Email";
    }
    if (loginData.password !== "12345678") {
      errors.password = "Password does not match";
    }
    return errors;
  };
  
  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     const validationErrors = validateValues(loginData);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/pages/VerificationPage");
    }else{
    setErrors(validateValues(loginData));
    }
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(loginData);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-tertiary">
                Welcome to CoinFusion!
              </h1>

              <form className="mt-12" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={loginData.email}
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
                  <div className="error" style={{ color:'red', fontSize:12 }}>
                    Account does not exist
                  </div>
                ) : null}

                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
                    placeholder="Password"
                    autoCapitalize="off"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                {errors.password ? (
                  <div className="error" style={{ color:'red', fontSize:12 }}>
                    Password does not match
                  </div>
                ) : null}

                <input
                  type="submit"
                  value="Sign in"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-primary hover:bg-tertiary text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-gray-950 hover:underline focus:outline-none focus:ring-2 focus:ring-tertiary"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;

                  
// import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../verification/Components/Dashboard/contexts/UserContext.jsx";

// const SigninForm = () => {
//   const navigate = useNavigate();
//   const { updateUserEmail } = useUserContext();//line added

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password:"",
//   });

//    const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   const validateValues = (loginData) => {
//     let errors = {};
//     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.email)){
//       errors.email = "Invalid Email";
//     }
//     if (loginData.password !== "12345678") {
//       errors.password = "Password does not match";
//     }
//     return errors;
//   };
  
//   const handleInputChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//      const validationErrors = validateValues(loginData);

//     if (Object.keys(validationErrors).length === 0) {
//       updateUserEmail(loginData.email);//line added
//       navigate("/pages/VerificationPage");
//     }else{
//     setErrors(validateValues(loginData));
//     }
//     setSubmitting(true);
//   };

//   const finishSubmit = () => {
//     console.log(loginData);
//   };
//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && submitting) {
//       finishSubmit();
//     }
//   }, [errors]);

//   return (
//     <div className="selection:bg-indigo-500 selection:text-white">
//       <div className="flex justify-center items-center">
//         <div className="p-8 flex-1">
//           <div className="mx-auto overflow-hidden">
//             <div className="p-8">
//               <h1 className="text-5xl font-bold text-tertiary">
//                 Welcome to CoinFusion!
//               </h1>

//               <form className="mt-12" onSubmit={handleSubmit}>
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="text"
//                     value={loginData.email}
//                     onChange={handleInputChange}
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
//                     placeholder="john@doe.com"
//                     autoComplete="off"
//                     required
//                   />
//                   <label
//                     htmlFor="email"
//                     className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
//                   >
//                     Email address
//                   </label>
//                 </div>
//                 {errors.email ? (
//                   <div className="error" style={{ color:'red', fontSize:12 }}>
//                     Account does not exist
//                   </div>
//                 ) : null}

//                 <div className="mt-10 relative">
//                   <input
//                     id="password"
//                     type="password"
//                     name="password"
//                     value={loginData.password}
//                     onChange={handleInputChange}
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-tertiary"
//                     placeholder="Password"
//                     autoCapitalize="off"
//                     required
//                   />
//                   <label
//                     htmlFor="password"
//                     className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 {errors.password ? (
//                   <div className="error" style={{ color:'red', fontSize:12 }}>
//                     Password does not match
//                   </div>
//                 ) : null}

//                 <input
//                   type="submit"
//                   value="Sign in"
//                   className="mt-20 px-8 py-4 uppercase rounded-full bg-primary hover:bg-tertiary text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
//                 />
//               </form>
//               <a
//                 href="#"
//                 className="mt-4 block text-sm text-center font-medium text-gray-950 hover:underline focus:outline-none focus:ring-2 focus:ring-tertiary"
//               >
//                 {" "}
//                 Forgot your password?{" "}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SigninForm;
            