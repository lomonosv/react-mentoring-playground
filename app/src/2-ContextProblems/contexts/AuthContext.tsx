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

export const AuthContext = createContext<ReturnType<typeof useAuth> | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }

  return context;
};

interface IProps {
  children: React.ReactNode,
}

const AuthContextProvider = ({ children }: IProps) => (
  <AuthContext.Provider value={ useAuth() }>
    { children }
  </AuthContext.Provider>
);

export default AuthContextProvider;
