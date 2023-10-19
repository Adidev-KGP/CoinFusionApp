import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./components/verification/Components/Dashboard/contexts/ContextProvider.jsx";
//import { UserProvider } from "./components/verification/Components/Dashboard/contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Bank_app">
        <ContextProvider>
          <App />
        </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
