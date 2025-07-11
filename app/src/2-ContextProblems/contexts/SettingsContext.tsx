import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext';

interface ITheme {
  color: string;
}

const saveThemeToLocalStorage = (theme: ITheme) => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', JSON.stringify(theme));
  }
}

const getThemeFromLocalStorage = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return JSON.parse(localStorage.getItem('theme') || '{}');
  }
  return {};
}

const useSettings = () => {
  const { isLoggedIn } = useAuthContext();
  const [language, setLanguage] = useState('en');
  // @ts-ignore
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    if (isLoggedIn) {
      setLanguage('en');
    }
  }, [isLoggedIn]);

  useEffect(() => () => {
    saveThemeToLocalStorage(theme);
  }, [theme]);

  return {
    language,
    setLanguage,
    theme,
    setTheme,
  };
};

export const SettingsContext = createContext<any>(null);

export const useSettingsContext = () => useContext(SettingsContext) || {};

interface IProps {
  children: React.ReactNode,
}

const SettingsContextProvider = ({ children }: IProps) => {
  const { language } = useSettings();
  const { setLanguage } = useSettings();
  const { theme, setTheme } = useSettings();

  const contextValue = {
    language,
    setLanguage,
    theme,
    setTheme,
  };

  return (
    <SettingsContext.Provider value={ contextValue }>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsContextProvider;
