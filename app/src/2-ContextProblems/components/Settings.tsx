import React from 'react';
import { useSettingsContext } from '../contexts/SettingsContext';
import { useAuthContext } from '../contexts/AuthContext';

const Settings = () => {
  const { language, setLanguage, theme, setTheme } = useSettingsContext();
  const { isLoggedIn } = useAuthContext();

  return (
    <div className="flex-1 flex flex-col items-stretch justify-center">
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-100 shadow rounded-xl p-8 flex flex-col items-center border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Settings</h2>
        { isLoggedIn ? ' You are logged in!' : ' You are not logged in.' }
        <div className="mb-2 text-gray-700">Selected Language: <span className="text-blue-600 font-medium">{ language }</span></div>
        <label className="mb-1 text-sm text-gray-500" htmlFor="lang-select">Select Language:</label>
        <select
          id="lang-select"
          className="w-full max-w-xs px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
          value={ language }
          onChange={e => setLanguage?.(e.target.value)}
        >
          <option value="en">English</option>
          <option value="uk">Ukrainian</option>
          <option value="es">Spanish</option>
        </select>


        <div className="mb-2 text-gray-700">Selected Theme: <span className="text-blue-600 font-medium">{ JSON.stringify(theme) }</span></div>
        <label className="mb-1 text-sm text-gray-500" htmlFor="lang-select">Select Theme:</label>
        <select
          id="theme-select"
          className="w-full max-w-xs px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
          value={ JSON.stringify(theme) }
          onChange={ e => {
            setTheme?.(JSON.parse(e.target.value))
          }}
        >
          <option value='{"color":"red"}'>Red</option>
          <option value='{"color":"green"}'>Green</option>
          <option value='{"color":"blue"}'>Blue</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
