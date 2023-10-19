import LoginPage from "../components/LoginPage/LoginPage";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "CoinFusion";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-tertiary  from 10% to-primary to-130%">
      <LoginPage />
    </div>
  );
};

export default Login;
