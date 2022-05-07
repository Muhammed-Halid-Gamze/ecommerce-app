import React from "react";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(true);
  };

  const values = {
    user,
    loggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default { AuthProvider, useAuth };
