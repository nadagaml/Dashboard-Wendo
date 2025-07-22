import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'; 

export let AuthContext = createContext(null);

export default function AuthContextProvider(props) {
  const [loginData, setLoginData] = useState(null);

  const loadLoginDataFromCookie = () => {
    const encodedToken = Cookies.get('token'); 
    if (encodedToken) {
      const decodedToken = jwtDecode(encodedToken);
      setLoginData(decodedToken);
    }
  };

  useEffect(() => {
    loadLoginDataFromCookie(); 
  }, []);

  return (
    <AuthContext.Provider value={{ loginData, loadLoginDataFromCookie, setLoginData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
