import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [loginData, setLoginData] = useState(null);

  const loadLoginDataFromCookie = () => {
    const encodedToken = Cookies.get('token');
    if (encodedToken && encodedToken.split('.').length === 3) {
      try {
        const decodedToken = jwtDecode(encodedToken);
        setLoginData(decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
        setLoginData(null);
      }
    } else {
      console.warn('Invalid or missing token');
      setLoginData(null);
    }
  };

  useEffect(() => {
    loadLoginDataFromCookie();
  }, []);

  return (
    <AuthContext.Provider value={{ loginData, loadLoginDataFromCookie, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
}
