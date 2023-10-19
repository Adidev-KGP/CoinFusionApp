import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}
