import React, { createContext, useContext, useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return {
    isLoggedIn,
    login,
    logout,
  };
};

export const AuthContext = createContext<any>(null);

export const useAuthContext = () => useContext(AuthContext) || {};

interface IProps {
  children: React.ReactNode,
}

const AuthContextProvider = ({ children }: IProps) => (
  <AuthContext.Provider value={ useAuth() }>
    { children }
  </AuthContext.Provider>
);

export default AuthContextProvider;
