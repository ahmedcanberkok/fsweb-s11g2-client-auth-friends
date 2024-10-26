import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!(localStorage.getItem("token")));
  return (
    <Context.Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</Context.Provider>
  );
};

export default ContextProvider;