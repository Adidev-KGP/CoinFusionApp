// import React from "react";
// import { Route,Routes } from "react-router-dom";
// import Login from "./pages/Login.jsx";
// import Homepage from "./pages/Homepage.jsx";
// import VerificationPage from "./pages/VerificationPage.jsx";
// import VerificationPage_rcvr from "./pages/VerficationPage_rcvr.jsx";

// const ErrorPage = () => {
//   return <div className="text-red-700 font-xl">404 - Page Not Found</div>;
// };

// const App = () => {
//    return(
//     <>
//       <Routes>
//         <Route exact path = "/Bank_app/" element={<Homepage/>}/>
//         <Route path="/pages/Login" element={<Login/>} />
//         <Route path="/pages/VerificationPage" element={<VerificationPage/>}/>
//         <Route path="/pages/VerificationPage_rcvr" element={<VerificationPage_rcvr/>}/>
//         <Route element={ErrorPage}/>
//       </Routes>
//     </>
//    )
// }
  
// export default App;


import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Homepage from "./pages/Homepage.jsx";
import VerificationPage from "./pages/VerificationPage.jsx";
import VerificationPage_rcvr from "./pages/VerficationPage_rcvr.jsx";

const ErrorPage = () => {
  return <div className="text-red-700 font-xl">404 - Page Not Found</div>;
};

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/VerificationPage" element={<VerificationPage />} />
        <Route path="/pages/VerificationPage_rcvr" element={<VerificationPage_rcvr />} />
        <Route element={ErrorPage} />
      </Routes>
  );
};

export default App;
