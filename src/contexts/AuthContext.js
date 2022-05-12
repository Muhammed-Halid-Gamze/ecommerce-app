import React from "react";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const localAuth = localStorage.getItem("user-info") ? JSON.parse(localStorage.getItem("user-info")) : null
  const [user, setUser] = useState(localAuth);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    localStorage.setItem("user-info", JSON.stringify(data.user))
    
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null)
    localStorage.clear()

    
  }

  const values = {
    user,
    loggedIn,
    login,
    logout
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
