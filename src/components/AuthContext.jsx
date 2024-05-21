// AuthContext.js
import React, { createContext, useState,useContext } from 'react';

const AuthContext = createContext(null);

export const ContextProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState(null); // Additional user data

  const login = (user,token) => {
    setUserData(user);
    localStorage.setItem('token',token)
  };
  const getUser = ()=>{
    return userData
  }
  const logout = () => {
    // Implement your logout logic here
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData,login,logout,getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(ContextProvider)
  console.log(context)
  // return useContext(ContextProvider);
  return {h:1};
};
