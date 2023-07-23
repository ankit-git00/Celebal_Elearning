import React, {createContext, useState } from 'react'

const authContext = createContext();
const Authprovider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (

    <authContext.Provider value={ {isLoggedIn,setIsLoggedIn} } >
        {children}
    </authContext.Provider>
  )
}

export {authContext,Authprovider}


