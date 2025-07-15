import React, { createContext, useContext, useState, useEffect } from 'react';

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
  const [language, setLanguage] = useState<string>('en');
  const [theme, setTheme] = useState<{ color : string }>(getThemeFromLocalStorage());

  useEffect(() => {
    saveThemeToLocalStorage(theme);
    return () => {

    }
  }, [theme]);

  return {
    language,
    setLanguage,
    theme,
    setTheme,
  };
};

export const SettingsContext = createContext<ReturnType<typeof useSettings> | null>(null);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsContextProvider');
  }

  return context;
};

interface IProps {
  children: React.ReactNode,
}

const SettingsContextProvider = ({ children }: IProps) => {
  const { language, setLanguage } = useSettings();
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
