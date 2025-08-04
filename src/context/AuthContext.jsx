import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [loginData, setLoginData] = useState(null);

  const loadLoginDataFromCookie = () => {
    const token = Cookies.get('token');
    if (token && token.split('.').length === 3) {
      try {
        const decodedToken = jwtDecode(token);

        // ✅ تحقق من انتهاء الصلاحية
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          console.warn('Token expired');
          setLoginData(null);
          Cookies.remove('token'); // احذف التوكن لو منتهي
        } else {
          setLoginData(decodedToken);
        }
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
