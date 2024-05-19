// AuthContext.js
import React, { createContext, useState,useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState(null); // Additional user data

  const login = (user) => {
    // Implement your login logic here
    setIsLoggedIn(true);
    setUserData(user);
  };
  const getUser = ()=>{
    return userData
  }
  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout,getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
