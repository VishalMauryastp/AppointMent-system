import { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState([]);

  console.log("login", login);
  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  return useContext(LoginContext);
};

export { LoginProvider, useLogin };
