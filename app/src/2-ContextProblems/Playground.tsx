import React from 'react';
import Auth from './components/Auth';
import Settings from './components/Settings';
import AuthContext from './contexts/AuthContext';
import SettingsContext from './contexts/SettingsContext';

const Playground = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 drop-shadow">Context Problems Playground</h1>
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-10 flex flex-row gap-10 border border-purple-100 min-h-[400px]">
        <AuthContext>
          <Auth />
        </AuthContext>
        <SettingsContext>
          <Settings />
        </SettingsContext>
      </div>
    </div>
  );
};

export default Playground;
