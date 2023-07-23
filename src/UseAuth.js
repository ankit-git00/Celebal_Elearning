import React, { useState } from 'react'

export const UseAuth = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () =>{
      setIsLoggedIn(true);
    };
  
    const logout =() =>{
      setIsLoggedIn(false);
    }
  return [isLoggedIn,login,logout,isLoggedIn];
};

export default UseAuth;
